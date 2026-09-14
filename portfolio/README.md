# Ahmed Hani — Mechatronics Engineering Portfolio

A bilingual (English / Arabic, LTR / RTL) engineering portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Recharts.

## 1. Install & run

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Production build

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

`npm run build` runs a full TypeScript check (`tsc -b`) before bundling, so a type error will fail the build rather than ship silently.

## 3. Deploy

### Vercel
1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder after running `npm run build` for a manual deploy).
2. In Netlify, "Add new site" → import from Git.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

## 4. Replacing the Hero background image

The Hero section looks for an image at:

```
/public/images/hero-background.jpg
```

Drop a photo there with that exact filename. Until you do, the Hero uses the built-in dark CSS fallback (radial gradient + engineering grid + cyan glow) described in the brief — there is no placeholder stock photo in the meantime.

For best results use a dark, moody, landscape-oriented photo (industrial/engineering setting works well) at least 1920px wide — the component already applies a black overlay, vignette, and monochrome-leaning gradient on top of it.

## 5. Adding project / certificate images

Drop images into:

```
/public/images/projects/
/public/images/certificates/
```

Then set the `imageUrl` (and `imageAlt.en` / `imageAlt.ar`) field on the relevant entry in `src/data/portfolioData.ts`. Until an `imageUrl` is set, the card shows the built-in engineering-grid CSS placeholder with an icon — never a broken image or unrelated stock photo.

## 6. Adding future projects, certificates, experience, or activities

Everything lives in **one file**: `src/data/portfolioData.ts`. Each array (`projects`, `certificates`, `experience`, `activities`, `education`, `skillGroups`) takes a new object following the existing shape (see `src/types/index.ts` for the exact fields). The Annual Portfolio Activity chart and timeline recompute automatically from this file — you never need to touch the chart code or manually update a count.

Example — adding a new project:

```ts
{
  id: 'proj-new-thing',
  title: { en: 'Project Name', ar: 'اسم المشروع' },
  year: 2027,
  category: { en: 'Category', ar: 'الفئة' },
  tools: ['Tool A', 'Tool B'],
  description: { en: '...', ar: '...' },
  result: { en: '...', ar: '...' },
  linkedinUrl: 'https://www.linkedin.com/posts/...', // optional
}
```

## 7. Updating LinkedIn URLs

LinkedIn post URLs are attached per-item via the optional `linkedinUrl` field on projects, certificates, and activities in `src/data/portfolioData.ts`. Only attach a URL you've personally verified points to the correct post — an unverified or shortened (`lnkd.in`) link should stay in the `unmatchedLinkedInLinks` array at the bottom of the same file instead of being guessed onto a card. See `LINKEDIN_MATCHING_REPORT.md` for the current match status of every link supplied so far.

## 8. Notes on this build

- No React prototype, reference image, or separate LinkedIn-link file was actually attached to the request that produced this project — only the CV PDF came through. This project was built from scratch against the written brief rather than refactored from an existing prototype.
- All personal content (education, experience, skills, projects, certificates) is taken verbatim from the supplied CV — nothing is invented.
- The CV PDF you uploaded has been copied to `public/Ahmed-Hani-CV.pdf` so the "Download CV" buttons work out of the box. Replace this file if you update your CV.
- `public/images/og-portfolio.jpg` (the Open Graph share-preview image) is not included — add one at that path for social link previews to show an image.
