/* eslint-disable @typescript-eslint/no-explicit-any */
/*
  Blue fire, built on a trimmed copy of Pavel Dobryakov's
  WebGL-Fluid-Simulation (MIT, github.com/PavelDoGreat/WebGL-Fluid-Simulation).
  Navier–Stokes on a 128² velocity grid; the dye field is heat, not paint.
  Dye .r is blue-flame heat, fed by noisy emitter bands along the bottom
  and both side edges. Dye .g is a separate crimson heat for rare, short
  tongues at the base (CRIMSON). Buoyancy lifts both, dissipation cools
  them, and the display maps each through its own ramp, letting the hotter
  one win per pixel so the colours never blend into purple.

  startFluid(canvas, host) runs the sim and returns a teardown function, or
  null if WebGL with half-float render targets is unavailable.
*/

const CONFIG = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  DENSITY_DISSIPATION: 1.35,
  VELOCITY_DISSIPATION: 0.55,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 34,
  BUOYANCY: 26,
  EMIT_HEAT: 0.11,
  EMIT_LIFT: 9,
  SIDE_STRENGTH: 0.4,
  CRIMSON: true,
  SPLAT_RADIUS: 0.16,
  SPLAT_FORCE: 3200,
  POINTER_HEAT: 0.32,
}

type FBO = {
  texture: WebGLTexture
  fbo: WebGLFramebuffer
  width: number
  height: number
  texelSizeX: number
  texelSizeY: number
  attach: (id: number) => number
}
type DoubleFBO = {
  width: number
  height: number
  texelSizeX: number
  texelSizeY: number
  read: FBO
  write: FBO
  swap: () => void
}

const VERT = `
precision highp float;
attribute vec2 aPosition;
varying vec2 vUv, vL, vR, vT, vB;
uniform vec2 texelSize;
void main () {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`

const HEAD = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv, vL, vR, vT, vB;
`

const COPY = HEAD + `
uniform sampler2D uTexture;
void main () { gl_FragColor = texture2D(uTexture, vUv); }`

const CLEAR = HEAD + `
uniform sampler2D uTexture;
uniform float value;
void main () { gl_FragColor = value * texture2D(uTexture, vUv); }`

const DISPLAY = HEAD + `
uniform sampler2D uTexture;
uniform highp vec2 texelSize;
vec3 blueRamp (float t) {
  vec3 c = mix(vec3(0.01, 0.02, 0.16), vec3(0.06, 0.22, 0.95), smoothstep(0.0, 0.35, t));
  c = mix(c, vec3(0.30, 0.78, 1.00), smoothstep(0.30, 0.70, t));
  return mix(c, vec3(0.92, 0.98, 1.00), smoothstep(0.70, 1.00, t));
}
vec3 redRamp (float t) {
  vec3 c = mix(vec3(0.18, 0.0, 0.02), vec3(0.78, 0.05, 0.06), smoothstep(0.0, 0.4, t));
  c = mix(c, vec3(1.0, 0.36, 0.18), smoothstep(0.4, 0.8, t));
  return mix(c, vec3(1.0, 0.86, 0.72), smoothstep(0.8, 1.0, t));
}
void main () {
  vec2 h = texture2D(uTexture, vUv).rg;
  vec2 g = vec2(0.0);
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.785398;
    vec2 d = vec2(cos(a), sin(a)) * texelSize;
    g += texture2D(uTexture, vUv + d * 14.0).rg + texture2D(uTexture, vUv + d * 34.0).rg;
  }
  g /= 16.0;
  float tb = clamp(h.x * 1.15, 0.0, 1.0);
  float tr = clamp(h.y * 1.25, 0.0, 1.0);
  float ab = smoothstep(0.03, 0.4, tb);
  float ar = smoothstep(0.03, 0.4, tr);
  float w = smoothstep(0.35, 0.65, tr / (tb + tr + 0.0001));
  vec3 flame = mix(blueRamp(tb) * ab, redRamp(tr) * ar, w);
  vec3 glow = vec3(0.05, 0.25, 1.0) * g.x * 0.8 * (1.0 - w) + vec3(0.9, 0.08, 0.05) * g.y * 0.7;
  float a = max(ab, ar);
  gl_FragColor = vec4(flame + glow, clamp(max(a, (g.x + g.y) * 0.6), 0.0, 1.0));
}`

const SPLAT = HEAD + `
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;
void main () {
  vec2 p = vUv - point.xy;
  p.x *= aspectRatio;
  vec3 splat = exp(-dot(p, p) / radius) * color;
  vec3 base = texture2D(uTarget, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.0);
}`

const ADVECTION = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;
vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}
void main () {
#ifdef MANUAL_FILTERING
  vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
  vec4 result = bilerp(uSource, coord, dyeTexelSize);
#else
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
  vec4 result = texture2D(uSource, coord);
#endif
  float decay = 1.0 + dissipation * dt;
  gl_FragColor = result / decay;
}`

const DIVERGENCE = HEAD + `
uniform sampler2D uVelocity;
void main () {
  float L = texture2D(uVelocity, vL).x;
  float R = texture2D(uVelocity, vR).x;
  float T = texture2D(uVelocity, vT).y;
  float B = texture2D(uVelocity, vB).y;
  vec2 C = texture2D(uVelocity, vUv).xy;
  if (vL.x < 0.0) { L = -C.x; }
  if (vR.x > 1.0) { R = -C.x; }
  if (vT.y > 1.0) { T = -C.y; }
  if (vB.y < 0.0) { B = -C.y; }
  gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
}`

const CURL = HEAD + `
uniform sampler2D uVelocity;
void main () {
  float L = texture2D(uVelocity, vL).y;
  float R = texture2D(uVelocity, vR).y;
  float T = texture2D(uVelocity, vT).x;
  float B = texture2D(uVelocity, vB).x;
  gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
}`

const VORTICITY = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv, vL, vR, vT, vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;
void main () {
  float L = texture2D(uCurl, vL).x;
  float R = texture2D(uCurl, vR).x;
  float T = texture2D(uCurl, vT).x;
  float B = texture2D(uCurl, vB).x;
  float C = texture2D(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  force /= length(force) + 0.0001;
  force *= curl * C;
  force.y *= -1.0;
  vec2 velocity = texture2D(uVelocity, vUv).xy + force * dt;
  velocity = min(max(velocity, -1000.0), 1000.0);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`

const PRESSURE = HEAD + `
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main () {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;
  float divergence = texture2D(uDivergence, vUv).x;
  gl_FragColor = vec4((L + R + B + T - divergence) * 0.25, 0.0, 0.0, 1.0);
}`

const GRADIENT_SUBTRACT = HEAD + `
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main () {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity.xy -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`

// Feeds the fire. Blue heat comes from a flickering band along the bottom
// and two along the side edges (fading out with height); crimson heat comes
// from rare, sparse flares at the base and cools fast. Two octaves of value
// noise scrolling in time shape the tongues.
const EMIT = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform float time;
uniform float amount;
uniform float dt;
uniform float isVelocity;
uniform float heat;
uniform float lift;
uniform float sides;
uniform float crimson;
float hash (vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise (vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float tongues (float x, float t, float seed) {
  float n = 0.6 * noise(vec2(x * 11.0 + seed, t * 1.6)) + 0.4 * noise(vec2(x * 29.0 + seed, t * 3.3));
  return smoothstep(0.38, 0.85, n);
}
void main () {
  vec4 base = texture2D(uTarget, vUv);
  float x = vUv.x, y = vUv.y;

  float flare = smoothstep(0.74, 0.92, noise(vec2(x * 6.0 + 50.0, time * 0.7))) * crimson;
  float kC = exp(-pow(y / 0.06, 2.0)) * flare * tongues(x, time * 1.3, 91.0);

  // Where a crimson flare is burning, the blue under it holds back.
  float kB = exp(-pow(y / 0.07, 2.0)) * tongues(x, time, 0.0) * (0.8 + 0.2 * sin(x * 3.14159)) * (1.0 - flare);
  float fade = 1.0 - smoothstep(0.1, 0.55, y);
  float kL = exp(-pow(x / 0.035, 2.0)) * tongues(y * 0.8, time, 17.0) * fade * sides;
  float kR = exp(-pow((1.0 - x) / 0.035, 2.0)) * tongues(y * 0.8, time, 43.0) * fade * sides;

  if (isVelocity > 0.5) {
    float side = noise(vec2(x * 7.0 + 31.0, time * 0.9)) - 0.5;
    vec2 v = vec2(side * lift * 1.6, lift) * (kB + kC)
           + vec2(lift * 0.5, lift * 0.8) * kL
           + vec2(-lift * 0.5, lift * 0.8) * kR;
    gl_FragColor = vec4(base.xy + v * amount, 0.0, 1.0);
  } else {
    float blue = base.r + heat * (kB + kL + kR) * amount;
    float red = base.g * (1.0 - 1.2 * dt) + heat * 2.4 * kC * amount;
    gl_FragColor = vec4(blue, red, 0.0, 1.0);
  }
}`

const BUOYANCY = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uHeat;
uniform float buoyancy;
uniform float dt;
void main () {
  vec2 v = texture2D(uVelocity, vUv).xy;
  vec2 h = texture2D(uHeat, vUv).rg;
  v.y += dt * buoyancy * (h.x + h.y);
  gl_FragColor = vec4(v, 0.0, 1.0);
}`

function getContext(canvas: HTMLCanvasElement) {
  const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false }
  let gl: any = canvas.getContext('webgl2', params)
  const isWebGL2 = !!gl
  if (!isWebGL2) gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)
  if (!gl) return null

  let halfFloat: any
  let linear: any
  if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float')
    linear = gl.getExtension('OES_texture_float_linear')
  } else {
    halfFloat = gl.getExtension('OES_texture_half_float')
    if (!halfFloat) return null
    linear = gl.getExtension('OES_texture_half_float_linear')
  }
  const halfFloatType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES

  const supportRT = (internal: number, format: number) => {
    const tex = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, tex)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, 4, 4, 0, format, halfFloatType, null)
    const fbo = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0)
    return gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE
  }

  const pick = (internal: number, format: number): { internal: number; format: number } | null => {
    if (supportRT(internal, format)) return { internal, format }
    if (!isWebGL2) return null
    if (internal === gl.R16F) return pick(gl.RG16F, gl.RG)
    if (internal === gl.RG16F) return pick(gl.RGBA16F, gl.RGBA)
    return null
  }

  const rgba = isWebGL2 ? pick(gl.RGBA16F, gl.RGBA) : pick(gl.RGBA, gl.RGBA)
  const rg = isWebGL2 ? pick(gl.RG16F, gl.RG) : pick(gl.RGBA, gl.RGBA)
  const r = isWebGL2 ? pick(gl.R16F, gl.RED) : pick(gl.RGBA, gl.RGBA)
  if (!rgba || !rg || !r) return null

  return { gl, halfFloatType, linear: !!linear, rgba, rg, r }
}

export function startFluid(canvas: HTMLCanvasElement, host: HTMLElement): (() => void) | null {
  const ctx = getContext(canvas)
  if (!ctx) return null
  const { gl, halfFloatType, rgba, rg, r } = ctx
  const linear = ctx.linear

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const small = window.innerWidth < 720
  const dyeRes = small ? 512 : CONFIG.DYE_RESOLUTION

  // ── programs ────────────────────────────────────────────────
  const compile = (type: number, src: string, keywords: string[] = []) => {
    const s = gl.createShader(type)
    gl.shaderSource(s, keywords.map(k => '#define ' + k + '\n').join('') + src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s))
    return s
  }
  const vert = compile(gl.VERTEX_SHADER, VERT)

  const program = (frag: string, keywords: string[] = []) => {
    const p = gl.createProgram()
    gl.attachShader(p, vert)
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, frag, keywords))
    gl.bindAttribLocation(p, 0, 'aPosition')
    gl.linkProgram(p)
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p))
    const u: Record<string, WebGLUniformLocation> = {}
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS)
    for (let i = 0; i < n; i++) {
      const name = gl.getActiveUniform(p, i).name
      u[name] = gl.getUniformLocation(p, name)
    }
    return { u, bind: () => gl.useProgram(p) }
  }

  let progs: Record<string, ReturnType<typeof program>>
  try {
    progs = {
      copy: program(COPY),
      clear: program(CLEAR),
      display: program(DISPLAY),
      splat: program(SPLAT),
      advection: program(ADVECTION, linear ? [] : ['MANUAL_FILTERING']),
      divergence: program(DIVERGENCE),
      curl: program(CURL),
      vorticity: program(VORTICITY),
      pressure: program(PRESSURE),
      gradient: program(GRADIENT_SUBTRACT),
      emit: program(EMIT),
      buoyancy: program(BUOYANCY),
    }
  } catch {
    return null
  }

  // ── geometry ────────────────────────────────────────────────
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(0)

  const blit = (target: FBO | null) => {
    if (target) {
      gl.viewport(0, 0, target.width, target.height)
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
    } else {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
  }

  // ── framebuffers ────────────────────────────────────────────
  const createFBO = (w: number, h: number, internal: number, format: number, param: number): FBO => {
    gl.activeTexture(gl.TEXTURE0)
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, halfFloatType, null)
    const fbo = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
    gl.viewport(0, 0, w, h)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    return {
      texture, fbo, width: w, height: h, texelSizeX: 1 / w, texelSizeY: 1 / h,
      attach(id: number) {
        gl.activeTexture(gl.TEXTURE0 + id)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        return id
      },
    }
  }

  const createDouble = (w: number, h: number, internal: number, format: number, param: number): DoubleFBO => {
    let a = createFBO(w, h, internal, format, param)
    let b = createFBO(w, h, internal, format, param)
    return {
      width: w, height: h, texelSizeX: a.texelSizeX, texelSizeY: a.texelSizeY,
      get read() { return a },
      set read(v) { a = v },
      get write() { return b },
      set write(v) { b = v },
      swap() { const t = a; a = b; b = t },
    }
  }

  // Keep the dye when the canvas resizes (mobile toolbars, rotation).
  const resizeDouble = (t: DoubleFBO, w: number, h: number, internal: number, format: number, param: number) => {
    if (t.width === w && t.height === h) return t
    const next = createFBO(w, h, internal, format, param)
    progs.copy.bind()
    gl.uniform1i(progs.copy.u.uTexture, t.read.attach(0))
    blit(next)
    t.read = next
    t.write = createFBO(w, h, internal, format, param)
    t.width = w; t.height = h; t.texelSizeX = 1 / w; t.texelSizeY = 1 / h
    return t
  }

  const resolution = (res: number) => {
    let aspect = gl.drawingBufferWidth / gl.drawingBufferHeight
    if (aspect < 1) aspect = 1 / aspect
    const min = Math.round(res)
    const max = Math.round(res * aspect)
    return gl.drawingBufferWidth > gl.drawingBufferHeight
      ? { width: max, height: min }
      : { width: min, height: max }
  }

  let dye: DoubleFBO | null = null
  let velocity: DoubleFBO | null = null
  let divergence: FBO
  let curl: FBO
  let pressure: DoubleFBO

  const initFramebuffers = () => {
    const sim = resolution(CONFIG.SIM_RESOLUTION)
    const dyeSize = resolution(dyeRes)
    const filter = linear ? gl.LINEAR : gl.NEAREST
    gl.disable(gl.BLEND)
    dye = dye
      ? resizeDouble(dye, dyeSize.width, dyeSize.height, rgba.internal, rgba.format, filter)
      : createDouble(dyeSize.width, dyeSize.height, rgba.internal, rgba.format, filter)
    velocity = velocity
      ? resizeDouble(velocity, sim.width, sim.height, rg.internal, rg.format, filter)
      : createDouble(sim.width, sim.height, rg.internal, rg.format, filter)
    divergence = createFBO(sim.width, sim.height, r.internal, r.format, gl.NEAREST)
    curl = createFBO(sim.width, sim.height, r.internal, r.format, gl.NEAREST)
    pressure = createDouble(sim.width, sim.height, r.internal, r.format, gl.NEAREST)
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const resizeCanvas = () => {
    const w = Math.floor(canvas.clientWidth * dpr)
    const h = Math.floor(canvas.clientHeight * dpr)
    if (w && h && (canvas.width !== w || canvas.height !== h)) {
      canvas.width = w
      canvas.height = h
      return true
    }
    return false
  }

  resizeCanvas()
  initFramebuffers()

  // ── simulation ──────────────────────────────────────────────
  const step = (dt: number) => {
    const v = velocity!
    const d = dye!
    gl.disable(gl.BLEND)

    progs.curl.bind()
    gl.uniform2f(progs.curl.u.texelSize, v.texelSizeX, v.texelSizeY)
    gl.uniform1i(progs.curl.u.uVelocity, v.read.attach(0))
    blit(curl)

    progs.vorticity.bind()
    gl.uniform2f(progs.vorticity.u.texelSize, v.texelSizeX, v.texelSizeY)
    gl.uniform1i(progs.vorticity.u.uVelocity, v.read.attach(0))
    gl.uniform1i(progs.vorticity.u.uCurl, curl.attach(1))
    gl.uniform1f(progs.vorticity.u.curl, CONFIG.CURL)
    gl.uniform1f(progs.vorticity.u.dt, dt)
    blit(v.write)
    v.swap()

    progs.buoyancy.bind()
    gl.uniform1i(progs.buoyancy.u.uVelocity, v.read.attach(0))
    gl.uniform1i(progs.buoyancy.u.uHeat, d.read.attach(1))
    gl.uniform1f(progs.buoyancy.u.buoyancy, CONFIG.BUOYANCY)
    gl.uniform1f(progs.buoyancy.u.dt, dt)
    blit(v.write)
    v.swap()

    progs.divergence.bind()
    gl.uniform2f(progs.divergence.u.texelSize, v.texelSizeX, v.texelSizeY)
    gl.uniform1i(progs.divergence.u.uVelocity, v.read.attach(0))
    blit(divergence)

    progs.clear.bind()
    gl.uniform1i(progs.clear.u.uTexture, pressure.read.attach(0))
    gl.uniform1f(progs.clear.u.value, CONFIG.PRESSURE)
    blit(pressure.write)
    pressure.swap()

    progs.pressure.bind()
    gl.uniform2f(progs.pressure.u.texelSize, v.texelSizeX, v.texelSizeY)
    gl.uniform1i(progs.pressure.u.uDivergence, divergence.attach(0))
    for (let i = 0; i < CONFIG.PRESSURE_ITERATIONS; i++) {
      gl.uniform1i(progs.pressure.u.uPressure, pressure.read.attach(1))
      blit(pressure.write)
      pressure.swap()
    }

    progs.gradient.bind()
    gl.uniform2f(progs.gradient.u.texelSize, v.texelSizeX, v.texelSizeY)
    gl.uniform1i(progs.gradient.u.uPressure, pressure.read.attach(0))
    gl.uniform1i(progs.gradient.u.uVelocity, v.read.attach(1))
    blit(v.write)
    v.swap()

    progs.advection.bind()
    gl.uniform2f(progs.advection.u.texelSize, v.texelSizeX, v.texelSizeY)
    if (!linear) gl.uniform2f(progs.advection.u.dyeTexelSize, v.texelSizeX, v.texelSizeY)
    const vid = v.read.attach(0)
    gl.uniform1i(progs.advection.u.uVelocity, vid)
    gl.uniform1i(progs.advection.u.uSource, vid)
    gl.uniform1f(progs.advection.u.dt, dt)
    gl.uniform1f(progs.advection.u.dissipation, CONFIG.VELOCITY_DISSIPATION)
    blit(v.write)
    v.swap()

    if (!linear) gl.uniform2f(progs.advection.u.dyeTexelSize, d.texelSizeX, d.texelSizeY)
    gl.uniform1i(progs.advection.u.uVelocity, v.read.attach(0))
    gl.uniform1i(progs.advection.u.uSource, d.read.attach(1))
    gl.uniform1f(progs.advection.u.dissipation, CONFIG.DENSITY_DISSIPATION)
    blit(d.write)
    d.swap()
  }

  const render = () => {
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
    gl.enable(gl.BLEND)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    progs.display.bind()
    gl.uniform2f(progs.display.u.texelSize, 1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight)
    gl.uniform1i(progs.display.u.uTexture, dye!.read.attach(0))
    blit(null)
  }

  const correctRadius = (radius: number) => {
    const aspect = canvas.width / canvas.height
    return aspect > 1 ? radius * aspect : radius
  }

  const splat = (x: number, y: number, dx: number, dy: number, heat: number) => {
    const v = velocity!
    const d = dye!
    progs.splat.bind()
    gl.uniform1i(progs.splat.u.uTarget, v.read.attach(0))
    gl.uniform1f(progs.splat.u.aspectRatio, canvas.width / canvas.height)
    gl.uniform2f(progs.splat.u.point, x, y)
    gl.uniform3f(progs.splat.u.color, dx, dy, 0)
    gl.uniform1f(progs.splat.u.radius, correctRadius(CONFIG.SPLAT_RADIUS / 100))
    blit(v.write)
    v.swap()
    gl.uniform1i(progs.splat.u.uTarget, d.read.attach(0))
    gl.uniform3f(progs.splat.u.color, heat, 0, 0)
    blit(d.write)
    d.swap()
  }

  const emit = (time: number, dt: number) => {
    const amount = dt * 60
    progs.emit.bind()
    gl.uniform1f(progs.emit.u.time, time)
    gl.uniform1f(progs.emit.u.amount, amount)
    gl.uniform1f(progs.emit.u.heat, CONFIG.EMIT_HEAT)
    gl.uniform1f(progs.emit.u.lift, CONFIG.EMIT_LIFT)
    gl.uniform1f(progs.emit.u.dt, dt)
    gl.uniform1f(progs.emit.u.sides, CONFIG.SIDE_STRENGTH)
    gl.uniform1f(progs.emit.u.crimson, CONFIG.CRIMSON ? 1 : 0)

    gl.uniform1f(progs.emit.u.isVelocity, 1)
    gl.uniform1i(progs.emit.u.uTarget, velocity!.read.attach(0))
    blit(velocity!.write)
    velocity!.swap()

    gl.uniform1f(progs.emit.u.isVelocity, 0)
    gl.uniform1i(progs.emit.u.uTarget, dye!.read.attach(0))
    blit(dye!.write)
    dye!.swap()
  }

  // ── pointer ─────────────────────────────────────────────────
  const pointer = { x: 0, y: 0, prevX: 0, prevY: 0, dx: 0, dy: 0, moved: false, primed: false }

  const onMove = (clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = 1 - (clientY - rect.top) / rect.height
    if (!pointer.primed) {
      pointer.x = pointer.prevX = x
      pointer.y = pointer.prevY = y
      pointer.primed = true
      return
    }
    pointer.prevX = pointer.x
    pointer.prevY = pointer.y
    pointer.x = x
    pointer.y = y
    const aspect = canvas.width / canvas.height
    let dx = x - pointer.prevX
    let dy = y - pointer.prevY
    if (aspect < 1) dx *= aspect
    if (aspect > 1) dy /= aspect
    pointer.dx = dx
    pointer.dy = dy
    pointer.moved = Math.abs(dx) > 0 || Math.abs(dy) > 0
  }

  const mouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY)
  const mouseLeave = () => { pointer.primed = false }
  const touchMove = (e: TouchEvent) => {
    const t = e.touches[0]
    if (t) onMove(t.clientX, t.clientY)
  }
  const touchEnd = () => { pointer.primed = false }

  if (!reduced) {
    host.addEventListener('mousemove', mouseMove)
    host.addEventListener('mouseleave', mouseLeave)
    host.addEventListener('touchmove', touchMove, { passive: true })
    host.addEventListener('touchend', touchEnd)
  }

  // ── loop ────────────────────────────────────────────────────
  let raf = 0
  let last = performance.now()
  const born = last
  let visible = true
  let frames = 0

  const frame = () => {
    raf = 0
    const now = performance.now()
    const dt = Math.min((now - last) / 1000, 1 / 60)
    last = now

    if (resizeCanvas()) initFramebuffers()

    if (pointer.moved) {
      pointer.moved = false
      const speed = Math.min(Math.hypot(pointer.dx, pointer.dy) * 40, 1)
      splat(pointer.x, pointer.y, pointer.dx * CONFIG.SPLAT_FORCE, pointer.dy * CONFIG.SPLAT_FORCE, CONFIG.POINTER_HEAT * (0.4 + speed))
    }
    emit((now - born) / 1000, dt)

    step(dt)
    render()
    frames++

    // Reduced motion: let the fire build, then hold it as a still.
    if (reduced && frames > 150) return
    if (visible && !document.hidden) raf = requestAnimationFrame(frame)
  }

  const resume = () => {
    if (raf || !visible || document.hidden || (reduced && frames > 150)) return
    last = performance.now()
    raf = requestAnimationFrame(frame)
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) resume()
  })
  io.observe(canvas)
  const onVisibility = () => { if (!document.hidden) resume() }
  document.addEventListener('visibilitychange', onVisibility)

  resume()

  return () => {
    cancelAnimationFrame(raf)
    io.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    host.removeEventListener('mousemove', mouseMove)
    host.removeEventListener('mouseleave', mouseLeave)
    host.removeEventListener('touchmove', touchMove)
    host.removeEventListener('touchend', touchEnd)
    // No loseContext(): React may remount on the same canvas (Strict Mode),
    // and a lost context cannot be revived, so the second start would fail.
  }
}
