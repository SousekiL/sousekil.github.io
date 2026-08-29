# Felix Liu — Research & Visual Practice

A one-page static portfolio for Felix Liu, focused on research, data visualization, and photography.

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.

## Site structure

- `index.html` — the one-page portfolio
- `styles.css` — layout, typography, light/dark theme
- `script.js` — theme toggle, motion gallery, and city photography walls
- `theme-demos.html` — alternative color and type directions
- `data/photography.json` — city photography manifest
- `images/photography-wall/` — optimized WebP photography archive
- `videos/motion/` — browser-compatible H.264 motion demos

## Content

The homepage separates research writing from data visualization projects. It includes links to project pages, papers, slides, source repositories, and the original article about women's names in ancient China.

The photography section contains five city archives: Chicago, Florida, New York, Shanghai, and Tokyo. Each city opens as a masonry photography wall while preserving the source image proportions.

## Media notes

The city visualization showcase images are curated from the `city-data-visual` repository. Research and project preview images are derived from the linked project repositories and the original local site archive.

The motion demos were converted from local `.MOV` files to H.264 MP4 for broader browser compatibility. The original source videos remain outside this repository.

## Deployment

This repository is published from the root of the `master` branch through GitHub Pages:

<https://sousekil.github.io/>
