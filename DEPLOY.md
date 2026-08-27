# Deploying the redesign — GauthamPrabhuM/PortfolioSite

Live site: gauthammanuruprabhu.netlify.app, auto-publishing from `main`.
Baseline at time of writing: `main@2528e8f`.

## 1. Copy files in

Everything in this folder maps 1:1 onto the repo root.

**Replaced**
- `src/app/globals.css` — swapped wholesale for the Classical token sheet + component layer.
- `src/app/layout.tsx` — `ThemeProvider` import removed. Metadata text otherwise unchanged.
- `src/app/page.tsx` — new section order; no `aurora`, `SideRails`, `InteractiveTerminal`.
- `src/lib/data.ts` — rewritten: new copy and corrected figures (35% autonomous resolution, 10,000 engineer-hours/quarter, 60+ citations, 70% undiagnosed-failure root-cause).
- `src/components/Experience.tsx`, `Publications.tsx` — rebuilt on the editorial layout.

**Added**
- `src/components/Masthead.tsx`, `Hero.tsx`, `Research.tsx`, `Education.tsx`, `Stack.tsx`, `Colophon.tsx`
- `src/components/ui/SectionHead.tsx`
- `public/assets/logos/*.png` — 20 stack logos.

**Now unused — delete when you're happy with the build**
`src/components/InteractiveTerminal.tsx`, `SideRails.tsx`, `Navigation.tsx`, `Hero.tsx` (old, overwritten),
`About.tsx`, `Projects.tsx`, `Achievements.tsx`, `Resume.tsx`, `Skills.tsx`, `Contact.tsx`,
`ThemeProvider.tsx`, `ui/Section.tsx`, `ui/SectionHeader.tsx`, `ui/FadeIn.tsx`, `ui/Spotlight.tsx`, `ui/CountUp.tsx`.

Nothing imports them after this change, so the build passes either way. Once removed,
`framer-motion`, `next-themes` and `react-icons` can come out of `package.json` too.

## 2. Check the portrait exists

`data.ts` points at `/assets/me.png` and `/assets/GauthamManuruPrabhu_Resume_Apr2026.pdf`,
both of which the previous build already used — so `public/assets/` should already have them.
Confirm before pushing; the hero plate and the résumé link depend on them.

## 3. Build and push

```
npm install
npm run build      # next build, output: 'export' → ./out
npx serve out      # eyeball it locally
```

Then commit to a branch and open a PR, or push straight to `main` — Netlify's
auto-publish will pick it up and run `npm run build` with `publish = "out"`.

```
git checkout -b redesign/editorial-cv
git add -A
git commit -m "Redesign: editorial CV layout, Classical type system, rewritten copy"
git push -u origin redesign/editorial-cv
```

## Notes

- The single `&amp;` in `Colophon.tsx` is intentional JSX text and renders as `&`. There are no stray
  HTML entities in this port; an earlier note claiming it fixed entities in the repo was wrong —
  the repo never had them.

- Tailwind is still installed but the new components use plain CSS classes from
  `globals.css`. That's deliberate: it keeps the port off your Tailwind config
  entirely. Removing Tailwind is optional and separate.
- `output: 'export'` is unchanged, so this stays a fully static build.
- Two `{/* eslint-disable-next-line @next/next/no-img-element */}` comments sit above
  the portrait and the logo `<img>` tags — `next/image` isn't worth it under
  `images: { unoptimized: true }`.
