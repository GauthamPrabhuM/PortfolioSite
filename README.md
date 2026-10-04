# PortfolioSite

Source for my portfolio site: https://gauthammanuruprabhu.netlify.app

Next.js 14, TypeScript and Tailwind CSS. Netlify builds and publishes it on every push to `main` (config in `netlify.toml`).

Content lives in `src/lib/data.ts`. The page is composed in `src/app/page.tsx` from the section components in `src/components/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

My research-focused site is a separate repo: [GauthamPrabhuM.github.io](https://github.com/GauthamPrabhuM/GauthamPrabhuM.github.io).
