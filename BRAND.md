# Felix Liu — Brand Guide

> Data Scientist and Aspiring Actuary

Academic Pages portfolio system measured from https://sousekil.github.io/ (source repo https://github.com/SousekiL/sousekil.github.io). Use this guide when designing pages, decks, or UI that should feel like the live portfolio — not GitHub product chrome.

## Identity

- **Name:** Felix Liu
- **Tagline:** Data Scientist and Aspiring Actuary
- **Positioning:** Decision-oriented analytics using causal inference, risk modeling, extreme value theory, and computational social science.
- **Template lineage:** Academic Pages / Minimal Mistakes on GitHub Pages.

## Color (light theme — measured)

| Role | Hex | Token / source | Usage |
| --- | --- | --- | --- |
| background | `#ffffff` | `--global-bg-color` | page canvas |
| surface | `#f2f3f3` | `--global-footer-bg-color`, `--global-border-color` | footer, thead, card borders, raised bands |
| foreground | `#494e52` | `--global-text-color` | body + headings |
| muted | `#9ba1a6` | `--global-text-color-light` | secondary copy, eyebrow labels |
| border | `#bdc1c4` | `--global-dark-border-color` | hairlines, control borders |
| accent | `#52adc8` | `--global-link-color` | links, primary interactive |
| accent-secondary | `#2f7f93` | `$info-color` / link-hover base | info emphasis, hover state mix |

### Dark theme (measured)

- Canvas / surface: `#474747`
- Text: `#ffffff`
- Muted: `#bdc1c4`
- Link accent: `#0ea1c5`
- Link hover: `#0b7994`

## Typography (measured)

- **Display / UI:** system sans stack  
  `-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, Lucida Grande, Arial, sans-serif`  
  Weights 400 / 700. Used for headings, nav, buttons, footer chrome.
- **Body:** `Times New Roman, Times, Georgia, serif`. The live CSS override uses `'Times New Roman', sans-serif`; the canonical stack preserves serif fallbacks. Weight 400 / 700.
- **Mono:** `Monaco, Consolas, Lucida Console, monospace` for code.
- **Icons:** Font Awesome 6 Free / Brands + Academicons (preserved under `fonts/`).

Do not substitute Inter as a display face — the live site is system-sans + serif body.

## Logo

- **Primary:** `logos/favicon.svg` — academic mortarboard mark (`#36c`).
- **Personal lockup:** `logos/avatar-primary.png` — circular masthead portrait.
- **Alternates:** apple-touch icon, favicon PNGs, GitHub mark (`favicon-1.svg`), repository OG card.
- **Note:** the live masthead is a text wordmark; no inline header SVG exists.

## Voice & tone

**Adjectives:** precise, evidence-first, decision-oriented, academic, understated.

**Tone:** Calm academic-professional. Lead with the research question, method, and outcome. Prefer concrete signals (exams, skills, selected work) over marketing superlatives.

**Pillars**
1. Decision-oriented analytics, not vanity metrics
2. Selected work with clear questions, methods, and outcomes
3. Methods: causal inference, risk modeling, EVT, computational social science
4. Open to Data Scientist / Actuarial Analyst / Risk Analytics roles

**Use:** causal inference, risk modeling, extreme value theory, evidence snapshot, selected work, methods, outcomes, quick signals.  
**Avoid:** 10x, disrupt, synergy, rockstar, ninja, guaranteed, world-class.

## Imagery

- Research figures (networks, time series, return levels)
- Project title slides and talk screenshots
- Restrained academic photography / avatar
- Project thumbnails: 6px radius, light shadow
- Summary/project cards: 16px radius, 1px surface border, soft shadow
- Avoid neon gradients, stock handshakes, emoji feature grids, fake 3D renders

## Layout posture

- Base radius **4px** (buttons, code chips); card radius **16px**
- Border **1px** hairlines
- Masthead height **70px**; sidebar breakpoint **1024px**
- Body line-height **1.5**; 8px baseline rhythm
- Hero title: fluid `clamp(2.4rem, 5vw, 4.4rem)` with 1.02 line-height
- Section grids: CSS auto-fit (`minmax(180px, 1fr)` snapshots, `minmax(250px, 1fr)` projects)
- Cards: 1px surface border (`#f2f3f3`) on white; soft shadow `0 12px 32px rgba(15,23,42,0.06)`
- One teal accent; gray base buttons (`#7a8288` light / `#474747` dark)
- Prefer content density of a CV/portfolio over marketing hero bloat

## Implementation notes

- CSS variables live in `_sass/theme/_default.scss` and `_dark.scss`.
- Body serif override: `assets/css/style.scss`.
- Custom homepage components: `_sass/layout/_custom.scss`.
- When reusing this system, bind the seven color roles above and keep display/body split (sans + serif).
