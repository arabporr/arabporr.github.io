# Reza Arabpour — personal website

A responsive portfolio for quantitative machine learning and computational finance, published at [arabporr.com](https://arabporr.com).

The site is a complete replacement for the previous al-folio/Jekyll template. It uses semantic HTML, CSS, and a small JavaScript module. There are no npm dependencies, external fonts, analytics, or third-party scripts. All core content, links, research abstracts, and the résumé remain accessible without JavaScript.

## Local development

Use Node.js 22 or newer. There is no dependency installation step.

```sh
npm run check
npm run dev
```

Open the printed URL, normally `http://127.0.0.1:4173`. After changing source, run `npm run build` and reload the browser. The server serves only `dist/`.

```sh
npm run build
npm run preview
```

## Editing

- `index.html`: profile, research, experience, projects, education, and contact details.
- `assets/style.css`: responsive design, print styles, keyboard focus, and reduced-motion support.
- `assets/site.js`: mobile navigation, research filters, citation copying, email copying, and current-section navigation.
- `assets/reza-arabpour.jpg`: the portrait downloaded from Reza’s public LinkedIn profile in October 2026. LinkedIn’s public image is 200 × 200; it is bundled locally rather than hotlinked.
- `assets/Reza_Arabpour_CV.pdf`: the supplied October 2026 résumé, copied without changes.
- `assets/social-card.png`: social sharing image.
- `scripts/build.mjs`: static build and compatibility routes.
- `scripts/check.mjs`: content, anchor, asset, and structured-data checks.

Publication statuses are deliberate: FinAttn is a manuscript in preparation, LoRA is an ICML **workshop** paper, and the Volterra paper is accepted / in press according to the supplied résumé. Update publication details when new public versions become available. The Volterra author order reflects the current résumé; its linked 2024 preprint lists an earlier order.

## Deployment

The GitHub Actions workflow checks pull requests and deploys pushes to `main` into the existing `gh-pages` branch. This retains the repository’s previous GitHub Pages deployment method. Keep the repository Pages source pointed to `gh-pages` at `/ (root)` and retain the existing custom domain. The build contains `CNAME` (`arabporr.com`) and `.nojekyll`.

Only files in `dist/` are published. The old `/publications/`, `/projects/`, `/cv/`, `/teaching/`, `/hobbies/`, `/news/`, `/blog/`, and `/about/` routes redirect to the corresponding new sections. The original `/assets/pdf/Reza_CV.pdf` link serves the new résumé. Unknown routes use `404.html`.

## Content provenance

Professional history and education come from the supplied résumé. Publication links and the LoRA workshop attribution were checked against arXiv. Project summaries were checked against their public GitHub READMEs. Personal interests come from the previous website. FinAttn has no public-paper link until a preprint is available.

The original MIT license is retained in `LICENSE` with the repository history. The redesigned site does not depend on the previous template.
