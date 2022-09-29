import React,{useState,useEffect, useCallback} from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import AnimatedCursor from "react-animated-cursor"

export default function Main() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);



const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

  return (
    <>
        <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />

            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.25,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3.5,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.25,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: false,
            }}
        />

        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        <Work/>
        <Contact/>
    </>

  )
}
