# GitHub Design Evidence: SousekiL/sousekil.github.io

Source: https://github.com/SousekiL/sousekil.github.io
Read method: git-clone
Local clone method: git clone
Ref: default branch
Repository paths discovered: 243
Snapshot files written: 45

## Intake Status

- This-device intake was used through local git or GitHub CLI.

## README (README.md)

```md
# Academic Pages
**Academic Pages is a GitHub Pages template for personal and professional portfolio-oriented websites.**

![Academic Pages template example](images/homepage.png "Academic Pages template example")

# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your public repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running locally

When you are initially working on your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.

### Using a different IDE
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    If you see error `Unable to locate package ruby-bundler`, `Unable to locate package nodejs `, run the following:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
    then try run `sudo apt install ruby-dev ruby-bundler nodejs` again.

    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.

    If you see file permission error like `Fetching bundler-2.6.3.gem ERROR:  While executing gem (Gem::FilePermissionError) You don't have write permissions for the /var/lib/gems/3.2.0 directory.` or `Bundler::PermissionError: There was an error while trying to write to /usr/local/bin.`
    Install Gems Locally (Recommended):
    ```bas
...
```

## Source Evidence Inventory

### Product docs and manifests

Use these to understand product purpose, dependency stack, scripts, and public naming.

- images/photography/README.md -> `context/github/SousekiL-sousekil.github.io/files/images/photography/README.md` (source)
- markdown_generator/readme.md -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/readme.md` (source)
- package.json -> `context/github/SousekiL-sousekil.github.io/files/package.json` (source)

### Fonts

Preserve source font files or declarations into `fonts/` and bind them in `colors_and_type.css` when applicable.

- assets/fonts/academicons.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.ttf` (binary asset)
- assets/fonts/academicons.woff -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.woff` (binary asset)
- assets/fonts/academicons1.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons1.ttf` (binary asset)
- assets/webfonts/fa-brands-400.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.ttf` (binary asset)
- assets/webfonts/fa-brands-400.woff2 -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.woff2` (binary asset)

### Theme, tokens, and styling

Extract concrete color, typography, spacing, radius, shadow, and theme-variable values from these files.

- assets/css/style.scss -> `context/github/SousekiL-sousekil.github.io/files/assets/css/style.scss` (source)
- _sass/layout/_sidebar.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_sidebar.scss` (source)
- assets/js/theme.js -> `context/github/SousekiL-sousekil.github.io/files/assets/js/theme.js` (source)
- _sass/theme/_dark.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/theme/_dark.scss` (source)
- _sass/theme/_default.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/theme/_default.scss` (source)
- _sass/layout/_archive.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_archive.scss` (source)
- _sass/layout/_base.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_base.scss` (source)
- _sass/layout/_buttons.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_buttons.scss` (source)
- _sass/layout/_custom.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_custom.scss` (source)
- _sass/layout/_footer.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_footer.scss` (source)
- _sass/layout/_forms.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_forms.scss` (source)
- _sass/layout/_masthead.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_masthead.scss` (source)
- _sass/layout/_navigation.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_navigation.scss` (source)
- _sass/layout/_notices.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_notices.scss` (source)
- _sass/layout/_page.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_page.scss` (source)
- _sass/layout/_reset.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_reset.scss` (source)
- _sass/layout/_tables.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_tables.scss` (source)
- _portfolio/Literature_Html_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Literature_Html_files/libs/lightable-0.0.1/lightable.css` (source)
- _portfolio/Literature_Html_for_Github_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Literature_Html_for_Github_files/libs/lightable-0.0.1/lightable.css` (source)
- _portfolio/Liu_FullVersion_Html_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Liu_FullVersion_Html_files/libs/lightable-0.0.1/lightable.css` (source)
- assets/css/cv-layout.css -> `context/github/SousekiL-sousekil.github.io/files/assets/css/cv-layout.css` (source)
- _pages/about_files/libs/bootstrap/bootstrap-icons.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/bootstrap/bootstrap-icons.css` (source)
- _pages/about_files/libs/quarto-html/quarto-syntax-highlighting.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/quarto-syntax-highlighting.css` (source)
- _pages/about_files/libs/quarto-html/tippy.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/tippy.css` (source)

### Other design evidence

Inspect these only after the primary design evidence above has been used.

- markdown_generator/publications.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/publications.py` (source)
- markdown_generator/pubsFromBib.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/pubsFromBib.py` (source)
- markdown_generator/talks.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/talks.py` (source)
- scripts/cv_markdown_to_json.py -> `context/github/SousekiL-sousekil.github.io/files/scripts/cv_markdown_to_json.py` (source)
- talkmap.py -> `context/github/SousekiL-sousekil.github.io/files/talkmap.py` (source)
- _data/cv.json -> `context/github/SousekiL-sousekil.github.io/files/_data/cv.json` (source)
- _drafts/post-draft.md -> `context/github/SousekiL-sousekil.github.io/files/_drafts/post-draft.md` (source)
- _pages/404.md -> `context/github/SousekiL-sousekil.github.io/files/_pages/404.md` (source)
- _pages/about_files/libs/bootstrap/bootstrap.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/bootstrap/bootstrap.min.js` (source)
- _pages/about_files/libs/clipboard/clipboard.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/clipboard/clipboard.min.js` (source)
- _pages/about_files/libs/quarto-html/anchor.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/anchor.min.js` (source)
- _pages/about_files/libs/quarto-html/popper.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/popper.min.js` (source)
- _pages/about_files/libs/quarto-html/quarto.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/quarto.js` (source)


## Files Inspected

- assets/fonts/academicons.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.ttf` (155068 bytes, git-clone, binary asset)
- assets/fonts/academicons.woff -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.woff` (131616 bytes, git-clone, binary asset)
- assets/fonts/academicons1.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons1.ttf` (67872 bytes, git-clone, binary asset)
- assets/css/style.scss -> `context/github/SousekiL-sousekil.github.io/files/assets/css/style.scss` (949 bytes, git-clone)
- _sass/layout/_sidebar.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_sidebar.scss` (4710 bytes, git-clone)
- assets/webfonts/fa-brands-400.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.ttf` (209128 bytes, git-clone, binary asset)
- assets/webfonts/fa-brands-400.woff2 -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.woff2` (117852 bytes, git-clone, binary asset)
- images/photography/README.md -> `context/github/SousekiL-sousekil.github.io/files/images/photography/README.md` (1013 bytes, git-clone)
- markdown_generator/readme.md -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/readme.md` (492 bytes, git-clone)
- assets/js/theme.js -> `context/github/SousekiL-sousekil.github.io/files/assets/js/theme.js` (13899 bytes, git-clone)
- package.json -> `context/github/SousekiL-sousekil.github.io/files/package.json` (1302 bytes, git-clone)
- _sass/theme/_dark.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/theme/_dark.scss` (2340 bytes, git-clone)
- _sass/theme/_default.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/theme/_default.scss` (2045 bytes, git-clone)
- _sass/layout/_archive.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_archive.scss` (4226 bytes, git-clone)
- _sass/layout/_base.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_base.scss` (5985 bytes, git-clone)
- _sass/layout/_buttons.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_buttons.scss` (2802 bytes, git-clone)
- _sass/layout/_custom.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_custom.scss` (3130 bytes, git-clone)
- _sass/layout/_footer.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_footer.scss` (1696 bytes, git-clone)
- _sass/layout/_forms.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_forms.scss` (6111 bytes, git-clone)
- _sass/layout/_masthead.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_masthead.scss` (1188 bytes, git-clone)
- _sass/layout/_navigation.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_navigation.scss` (8621 bytes, git-clone)
- _sass/layout/_notices.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_notices.scss` (1861 bytes, git-clone)
- _sass/layout/_page.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_page.scss` (6583 bytes, git-clone)
- _sass/layout/_reset.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_reset.scss` (3525 bytes, git-clone)
- _sass/layout/_tables.scss -> `context/github/SousekiL-sousekil.github.io/files/_sass/layout/_tables.scss` (808 bytes, git-clone)
- _portfolio/Literature_Html_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Literature_Html_files/libs/lightable-0.0.1/lightable.css` (5090 bytes, git-clone)
- _portfolio/Literature_Html_for_Github_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Literature_Html_for_Github_files/libs/lightable-0.0.1/lightable.css` (5090 bytes, git-clone)
- _portfolio/Liu_FullVersion_Html_files/libs/lightable-0.0.1/lightable.css -> `context/github/SousekiL-sousekil.github.io/files/_portfolio/Liu_FullVersion_Html_files/libs/lightable-0.0.1/lightable.css` (5090 bytes, git-clone)
- assets/css/cv-layout.css -> `context/github/SousekiL-sousekil.github.io/files/assets/css/cv-layout.css` (736 bytes, git-clone)
- markdown_generator/publications.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/publications.py` (3887 bytes, git-clone)
- markdown_generator/pubsFromBib.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/pubsFromBib.py` (6037 bytes, git-clone)
- markdown_generator/talks.py -> `context/github/SousekiL-sousekil.github.io/files/markdown_generator/talks.py` (3996 bytes, git-clone)
- scripts/cv_markdown_to_json.py -> `context/github/SousekiL-sousekil.github.io/files/scripts/cv_markdown_to_json.py` (14389 bytes, git-clone)
- talkmap.py -> `context/github/SousekiL-sousekil.github.io/files/talkmap.py` (1854 bytes, git-clone)
- _data/cv.json -> `context/github/SousekiL-sousekil.github.io/files/_data/cv.json` (1149 bytes, git-clone)
- _drafts/post-draft.md -> `context/github/SousekiL-sousekil.github.io/files/_drafts/post-draft.md` (2970 bytes, git-clone)
- _pages/404.md -> `context/github/SousekiL-sousekil.github.io/files/_pages/404.md` (129 bytes, git-clone)
- _pages/about_files/libs/bootstrap/bootstrap-icons.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/bootstrap/bootstrap-icons.css` (95517 bytes, git-clone)
- _pages/about_files/libs/bootstrap/bootstrap.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/bootstrap/bootstrap.min.js` (78129 bytes, git-clone)
- _pages/about_files/libs/clipboard/clipboard.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/clipboard/clipboard.min.js` (9160 bytes, git-clone)
- _pages/about_files/libs/quarto-html/anchor.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/anchor.min.js` (6008 bytes, git-clone)
- _pages/about_files/libs/quarto-html/popper.min.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/popper.min.js` (19728 bytes, git-clone)
- _pages/about_files/libs/quarto-html/quarto-syntax-highlighting.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/quarto-syntax-highlighting.css` (3135 bytes, git-clone)
- _pages/about_files/libs/quarto-html/quarto.js -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/quarto.js` (28407 bytes, git-clone)
- _pages/about_files/libs/quarto-html/tippy.css -> `context/github/SousekiL-sousekil.github.io/files/_pages/about_files/libs/quarto-html/tippy.css` (1409 bytes, git-clone)

## Binary Assets Preserved

- assets/fonts/academicons.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.ttf`
- assets/fonts/academicons.woff -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons.woff`
- assets/fonts/academicons1.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/fonts/academicons1.ttf`
- assets/webfonts/fa-brands-400.ttf -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.ttf`
- assets/webfonts/fa-brands-400.woff2 -> `context/github/SousekiL-sousekil.github.io/files/assets/webfonts/fa-brands-400.woff2`

## Design-Relevant Excerpts

### assets/css/style.scss

```scss
---
---

body {
  font-family: 'Times New Roman', sans-serif;
}

/* Project blocks: more spacing between projects, larger project titles */
.page__content h3 {
  font-size: 1.2em;
  margin-top: 2.5em;
}
.page__content h3:first-of-type {
  margin-top: 2em;
}

/* Project thumbnail gallery */
.project-thumbnails {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 2.5em;
}

.project-thumbnails a {
  flex: 1;
  max-width: 180px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  line-height: 0;
}

.project-thumbnails a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-thumbnails img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  display: block;
}

@media (max-width: 600px) {
  .project-thumbnails img {
    height: 65px;
  }
  .project-thumbnails a {
    max-width: 140px;
  }
}

```

### _sass/layout/_sidebar.scss

```scss
/* ==========================================================================
   SIDEBAR
   ========================================================================== */

/*
   Default
   ========================================================================== */

.sidebar {
  -webkit-transform: translate3d(0, 0 , 0);
          transform: translate3d(0, 0 , 0);

  @include clearfix();
  margin-bottom: 1em;

  @media (orientation: portrait) {
    margin-top: 1em;
  }

  @media screen and (min-width: $sidebar-screen-min-width) {
    height: 100vh;
    overflow-y: auto;               // Add scrollbar if the sidebar is too long
    position: fixed;
    padding-top: $masthead-height;
  }

  @include breakpoint($large) {
    @include span(2 of 12);
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-in-out;
            transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  @include breakpoint($x-large) {
    max-width: $sidebar-link-max-width;
    padding-right: 0;
  }

  h2, h3, h4, h5, h6 {
    margin-bottom: 0;
    font-family: $sans-serif-narrow;
  }

  h3, h4 {
    font-size: $type-size-5;
  }

  p, li {
    font-family: $sans-serif;
    font-size: $type-size-6;
    line-height: 1.5;
  }

  img {
    width: 100%;
  }
}

.sidebar__right {
  margin-bottom: 1em;

  @include breakpoint($large) {
    position: relative;
    float: right;
    width: $right-sidebar-width-narrow;
    margin-left: span(0.5 of 12);
    z-index: 10;
  }

  @include breakpoint($x-large) {
    width: $right-sidebar-width;
  }
}

/*
   Author profile and links
   ========================================================================== */

.author__avatar {
  display: table-cell;
  vertical-align: top;
  width: 36px;
  // set width only, for non-square avatars
  // height: 36px;

  @include breakpoint($large) {
    display: block;
    width: auto;
    height: auto;
  }

  img {
    max-width: 175px;
    border-radius: 50%;

    @include breakpoint($large) {
      padding: 5px;
      border: 1px solid var(--global-border-color);
    }
  }
}

.author__content {
  display: table-cell;
  vertical-align: top;
  padding-left: 15px;
  padding-right: 25px;
  line-height: 1;

  @include breakpoint($large) {
    display: block;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}

.author__name {
  margin: 0;

  @include breakpoint($large) {
    mar
...
```

### images/photography/README.md

```
# Photography Gallery

## How to Add Photos

Simply place your image files in this folder (`images/photography/`), and they will automatically appear on your Photography page.

### Supported Formats
- JPG / JPEG
- PNG
- GIF
- WebP

### Tips
1. **File Naming**: Use descriptive names for your photos. Underscores and hyphens will be converted to spaces for captions.
   - Example: `sunset_at_beach.jpg` → Caption: "Sunset at beach"
   - Example: `mountain-landscape.jpg` → Caption: "Mountain landscape"

2. **Image Size**: For best performance, resize images before uploading:
   - Recommended width: 1200-2000px
   - Compress images to reduce file size

3. **Organization**: You can also create subfolders here if you want to organize photos by theme or date.

## Features

- ✅ Automatic photo detection and display
- ✅ Responsive grid layout
- ✅ Click to enlarge (lightbox)
- ✅ Keyboard navigation (←/→ arrows, ESC to close)
- ✅ Hover effects and smooth animations
- ✅ Mobile-friendly design

```

### markdown_generator/readme.md

```
# Jupyter notebook markdown generator

These .ipynb files are Jupyter notebook files that convert a TSV containing structured data about talks (`talks.tsv`) or presentations (`presentations.tsv`) into individual markdown files that will be properly formatted for the academicpages template. The notebooks contain a lot of documentation about the process. The .py files are pure python that do the same things if they are executed in a terminal, they just don't have pretty documentation.





```

### assets/js/theme.js

```js
// dark theme extracted from https://github.com/plotly/plotly.py/blob/main/plotly/package_data/templates/plotly_dark.json?raw=true
export const plotlyDarkLayout = {"layout":{"autotypenumbers":"strict","colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#f2f5fa"},"hovermode":"closest","hoverlabel":{"align":"left"},"paper_bgcolor":"rgb(17,17,17)","plot_bgcolor":"rgb(17,17,17)","polar":{"bgcolor":"rgb(17,17,17)","angularaxis":{"gridcolor":"#506784","linecolor":"#506784","ticks":""},"radialaxis":{"gridcolor":"#506784","linecolor":"#506784","ticks":""}},"ternary":{"bgcolor":"rgb(17,17,17)","aaxis":{"gridcolor":"#506784","linecolor":"#506784","ticks":""},"baxis":{"gridcolor":"#506784","linecolor":"#506784","ticks":""},"caxis":{"gridcolor":"#506784","linecolor":"#506784","ticks":""}},"coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]]},"xaxis":{"gridcolor":"#283442","linecolor":"#506784","ticks":"","title":{"standoff":15},"zerolinecolor":"#283442","automargin":true,"zerolinewidth":2},"yaxis":{"gridcolor":"#283442","linecolor":"#506784","ticks":"","title":{"standoff":15},"zerolinecolor":"#283442","automargin":true,"zerolinewidth":2},"scene":{"xaxis":{"backgroundcolor":"rgb(17,17,17)","gridcolor":"#506784","linecolor":"#506784","showbackground":true,"ticks":"","zerolinecolor":"#C8D4E3","gridwidth":2},"yaxis":{"backgroundcolor":"rgb(17,17,17)","gridcolor":"#506784","linecolor":"#506784","showbackground":true,"ticks":"","zerolinecolor":"#C8D4E3","gridwidth":2},"zaxis":{"backgroundcolor":"rgb(17,17,17)","gridco
...
```

### package.json

```json
{
  "name": "academic-pages",
  "version": "0.8.1.1",
  "description": "Academic Pages Mistakes Jekyll theme npm build scripts",
  "repository": {
    "type": "git",
    "url": "https://github.com/academicpages/academicpages.github.io"
  },
  "keywords": [
    "jekyll",
    "theme",
    "minimal"
  ],
  "contributors": [
    "Michael Rose",
    "Robert Zupko"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/academicpages/academicpages.github.io/issues"
  },
  "homepage": "https://github.com/academicpages/academicpages.github.io",
  "engines": {
    "node": ">= 0.10.0"
  },
  "dependencies": {
    "fitvids": "^2.1.1",
    "jquery": "^3.7.1",
    "jquery-smooth-scroll": "^2.2.0",
    "magnific-popup": "^1.2.0"
  },
  "devDependencies": {
    "onchange": "^7.1.0",
    "uglify-js": "^3.17.4"
  },
  "scripts": {
    "uglify": "uglifyjs node_modules/jquery/dist/jquery.min.js node_modules/fitvids/dist/fitvids.min.js node_modules/magnific-popup/dist/jquery.magnific-popup.min.js node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js assets/js/plugins/jquery.greedy-navigation.js assets/js/_main.js -c -m -o assets/js/main.min.js",
    "watch:js": "onchange \"assets/js/**/*.js\" -e \"assets/js/main.min.js\" -- npm run build:js",
    "build:js": "npm run uglify"
  }
}

```

### _sass/theme/_dark.scss

```scss
/* ==========================================================================
   DARK THEME
   ========================================================================== */

/* Color codes used for the theme */
$gray                       : #7a8288;
$dark-gray                  : mix(#000, $gray, 40%);
$darker-gray                : mix(#000, $gray, 60%);
$light-gray                 : mix(#fff, $gray, 50%);

$background                 : #474747;
$background-light           : mix(#fff, $background, 80%);
$background-lighter         : mix(#fff, $background, 90%);
$text                       : #ffffff;
$link                       : #0ea1c5;
$link-dark                  : mix(#000, $link, 25%);
$link-light                 : mix(#fff, $link, 25%);

/* Color codes used for the site */
$danger-color               : #ee5f5b;
$info-color                 : #2f7f93;
$notice-color               : #7a8288;
$success-color              : #62c462;
$warning-color              : #f89406;

/* Other basic settings for the template */
$border-radius              : 4px;
$box-shadow                 : 0 1px 1px rgba(0, 0, 0, 0.125);
$global-transition          : all 0.2s ease-in-out;
$masthead-height            : 70px;
$navicon-width              : 28px;
$navicon-height             : 4px;
$sidebar-link-max-width     : 250px;
$sidebar-screen-min-width   : 1024px;

/* Dark theme for the site */
html[data-theme="dark"] {
    --global-base-color                 : #{$background};
    --global-bg-color                   : #{$background};
    --global-footer-bg-color            : #{$background};
    --global-border-color               : #{$light-gray};
    --global-dark-border-color          : #{$background-light};
    --global-code-background-color      : #fafafa;
    --global-code-text-color            : #{$darker-gray};
    --global-fig-caption-color          : #{$light-gray};
    --global-link-color                 : #{$link};
    --global-link-color-hover           : #{$link-dark};
    --global-link-color-visited         : #{$link-light};
    --global-masthead-link-color        : #{$text};
    --global-masthead-link-color-hover  : #{$background-light};
    --global-text-color                 : #{$text};
    --global-text-color-light           : #{$light-gray};
    --global-thead-color                : #{$background-lighter};
}
```

### _sass/theme/_default.scss

```scss
/* ==========================================================================
   DEFAULT THEME
   ========================================================================== */

/* Color codes used for the theme */
$gray                       : #7a8288;
$dark-gray                  : mix(#000, $gray, 40%);
$darker-gray                : mix(#000, $gray, 60%);
$light-gray                 : #9ba1a6;
$lighter-gray               : mix(#fff, $gray, 90%);

/* Color codes used for the site */
$danger-color               : #ee5f5b;
$info-color                 : #2f7f93;
$notice-color               : #7a8288;
$success-color              : #62c462;
$warning-color              : #f89406;

/* Other basic settings for the template */
$border-radius              : 4px;
$box-shadow                 : 0 1px 1px rgba(0, 0, 0, 0.125);
$global-transition          : all 0.2s ease-in-out;
$masthead-height            : 70px;
$navicon-width              : 28px;
$navicon-height             : 4px;
$sidebar-link-max-width     : 250px;
$sidebar-screen-min-width   : 1024px;

/* Default light theme for the site */
:root {
    --global-base-color                 : #{$gray};
    --global-bg-color                   : #fff;
    --global-footer-bg-color            : #f2f3f3;
    --global-border-color               : #{$lighter-gray};
    --global-dark-border-color          : #bdc1c4;
    --global-code-background-color      : #fafafa;
    --global-code-text-color            : #{$darker-gray};
    --global-fig-caption-color          : mix(#fff,  #{$dark-gray}, 25%);
    --global-link-color                 : #52adc8;
    --global-link-color-hover           : mix(#000, #2f7f93, 25%);
    --global-link-color-visited         : mix(#fff, #2f7f93, 25%);  
    --global-masthead-link-color        : #{$dark-gray};
    --global-masthead-link-color-hover  : mix(#000, #{$gray}, 25%);    
    --global-text-color                 : #{$dark-gray};
    --global-text-color-light           : #{$light-gray};
    --global-thead-color                : #{$lighter-gray};
}
```

### _sass/layout/_archive.scss

```scss
/* ==========================================================================
   ARCHIVE
   ========================================================================== */

.archive {
  margin-bottom: 2em;

  @include breakpoint($medium) {
    @include span(12 of 12);
  }

  @include breakpoint($large) {
    @include span(10 of 12 last);
    @include prefix(0.5 of 12);
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: underline;

      img {
        box-shadow: 0 0 10px rgba(#000, 0.25);
      }
    }
  }
}

.archive__subtitle {
  margin: 1.414em 0 0;
  padding-bottom: 0.5em;
  font-size: $type-size-5;
  color: var(--global-text-color-light);
  border-bottom: 1px solid var(--global-border-color);

  + .list__item .archive__item-title {
    margin-top: 0.5em;
  }
}

.archive__item-title {
  margin-bottom: 0.25em;
  font-family: $sans-serif-narrow;

  a + a {
    opacity: 0.5;
  }
}

/* remove border*/
.page__content {

  .archive__item-title {
    margin-top: 1em;
    border-bottom: none;
  }
}

.archive__item-excerpt {
  margin-top: 0;
  font-size: $type-size-6;

  & + p {
    text-indent: 0;
  }
}

.archive__item-teaser {
  border-radius: $border-radius;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.archive__item:hover {
  .archive__item-teaser {
    box-shadow: 0 0 10px rgba(#000, 0.25);
  }

  .archive__item-title {
    text-decoration: underline;
  }
}


/*
   List view
   ========================================================================== */

.list__item {
  @include breakpoint($medium) {
    padding-right: $right-sidebar-width-narrow;
  }

  @include breakpoint($large) {
    padding-right: $right-sidebar-width;
  }

  @include breakpoint($x-large) {
    padding-right: $right-sidebar-width-wide;
  }

  .page__meta {
    margin: 0 0 4px;
  }
}


/*
   Grid view
   ========================================================================== */

.grid__item {
  margin-bottom: 2em;

  .page__meta {
    margin: 0 0 4px;
  }

  .archive__item-title {
    margin-top: 0.5em;
    font-size: $type-size-5;
  }

  .archive__item-excerpt {
    display: none;
  }

  @include breakpoint($small) {
    @include gallery(5 of 10);
    .archive__item-teaser {
      max-height: 200px;
    }
  }

  @include breakpoint($medium) {
    margin-left: 0; /* reset before mixin does its thing*/
    margin-right: 0; /* reset before mixin does 
...
```

### _sass/layout/_base.scss

```scss
/* ==========================================================================
   BASE ELEMENTS
   ========================================================================== */
html {
  /* sticky footer fix */
  position: relative;
  min-height: 100%;
}

body {
  /* Set via _themes.scss */
  color: var(--global-text-color);
  background-color: var(--global-bg-color);

  margin: 0;
  padding: $masthead-height 0 0;
  padding-bottom: 9em;
  font-family: $global-font-family;
  line-height: 1.5;

  &.overflow--hidden {
    /* when primary navigation is visible, the content in the background won't scroll */
    overflow: hidden;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 2em 0 0.5em;
  line-height: 1.2;
  font-family: $header-font-family;
  font-weight: bold;
}

h1 {
  margin-top: 0;
  font-size: $type-size-3;
}

h2 {
  font-size: $type-size-4;
}

h3 {
  font-size: $type-size-5;
}

h4 {
  font-size: $type-size-6;
}

h5 {
  font-size: $type-size-6;
}

h6 {
  font-size: $type-size-6;
}

small, .small {
  font-size: $type-size-6;
}

p {
  margin-bottom: 1.3em;
}

u,
ins {
  text-decoration: none;
  border-bottom: 1px solid var(--global-text-color);
  a {
    color: inherit;
  }
}

del a {
  color: inherit;
}

/* reduce orphans and widows when printing */

p, pre, blockquote, ul, ol, dl, figure, table, fieldset {
  orphans: 3;
  widows: 3;
}

/* abbreviations */

abbr[title],
abbr[data-original-title] {
  text-decoration: none;
  cursor: help;
  border-bottom: 1px dotted var(--global-text-color);
}

/* blockquotes */

blockquote {
  margin: 2em 1em 2em 0;
  padding-left: 1em;
  padding-right: 1em;
  font-style: italic;
  border-left: 0.25em solid var(--global-border-color);

  cite {
    font-style: italic;

    &:before {
      content: "\2014";
      padding-right: 5px;
    }
  }
}

/* links */

a {
  &:focus {
    @extend %tab-focus;
  }

  &:hover,
  &:active {
    outline: 0;
  }
}

/* code */

tt, code, kbd, samp, pre {
  font-family: $monospace;
}

pre {
  overflow-x: auto; /* add scrollbars to wide code blocks*/
}

a > code,
figcaption > code,
li > code,
p > code,
td > code {
  color: var(--global-code-text-color);
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  font-size: $type-size-6;
  background: var(--global-code-background-color);
  border: 1px solid var(--global-thead-color);
  border-radius: $border-radius;
  box-shadow: $box-shadow;

  &:before, &:af
...
```

### _sass/layout/_buttons.scss

```scss
/* ==========================================================================
   BUTTONS
   ========================================================================== */

/*
   Default button
   ========================================================================== */

.btn {
  /* default button */
  display: inline-block;
  margin-bottom: 0.25em;
  padding: 0.5em 1em;
  color: #fff !important;
  font-family: $sans-serif;
  font-size: $type-size-6;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: var(--global-base-color);
  border: 0 !important;
  border-radius: $border-radius;
  cursor: pointer;

  &:hover {
    background-color: mix(white, #000, 20%);
  }

  .icon {
    margin-right: 0.5em;
  }

  .icon + .hidden {
    margin-left: -0.5em; /* override for hidden text*/
  }

  /* fills width of parent container */

  &--block {
    display: block;
    width: 100%;

    + .btn--block {
      margin-top: 0.25em;
    }
  }

  /* for dark backgrounds */

  &--inverse {
    color: var(--global-text-color-light) !important;
    border: 1px solid var(--global-border-color) !important; /* override*/
    background-color: var(--global-bg-color);

    &:hover {
      color: #fff !important;
      border-color: var(--global-text-color-light);
    }
  }

  /* light outline */

  &--light-outline {
    border: 1px solid #fff !important; /* override*/
    background-color: transparent;
  }

  /* information */

  &--info {
    background-color: $info-color;

    &:hover {
      background-color: mix(#000, $info-color, 20%);
    }
  }

  /* warning */

  &--warning {
    background-color: $warning-color;

    &:hover {
      background-color: mix(#000, $warning-color, 20%);
    }
  }

  /* success */

  &--success {
    background-color: $success-color;

    &:hover {
      background-color: mix(#000, $success-color, 20%);
    }
  }

  /* danger */

  &--danger {
    background-color: $danger-color;

    &:hover {
      background-color: mix(#000, $danger-color, 20%);
    }
  }

  /* disabled */

  &--disabled {
    pointer-events: none;
    cursor: not-allowed;
    filter: alpha(opacity=65);
    box-shadow: none;
    opacity: 0.65;
  }

  /* social buttons */

  $social:
  (bluesky, $bluesky-color),
  (facebook, $facebook-color),
  (twitter, $twitter-color),
  (google-plus, $google-plus-color),
  (linkedin, $linkedin-color);

  
...
```

### _sass/layout/_custom.scss

```scss
.home-hero {
  display: grid;
  gap: 1.5rem;
  padding: 0.5rem 0 2.5rem;
}

.home-hero__eyebrow,
.section-heading__eyebrow {
  margin: 0;
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-hero__title {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1.02;
}

.home-hero__lede {
  max-width: 40rem;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.6;
}

.home-hero__status {
  max-width: 42rem;
  margin: 0;
  color: var(--global-text-color-light);
  font-size: 1rem;
}

.button-row,
.project-card__actions,
.summary-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn--primary {
  background-color: var(--global-base-color);
}

.section-heading {
  display: grid;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.section-heading h2 {
  margin: 0;
}

.section-heading p {
  max-width: 42rem;
  margin: 0;
  color: var(--global-text-color-light);
}

.snapshot-grid,
.focus-grid,
.contact-grid,
.project-grid,
.cv-grid,
.summary-grid {
  display: grid;
  gap: 1rem;
}

.snapshot-grid,
.focus-grid,
.contact-grid,
.summary-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.project-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.cv-grid {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.snapshot-card,
.focus-card,
.contact-card,
.project-card,
.cv-card,
.summary-card {
  height: 100%;
  padding: 1.25rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-border-color);
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
}

.snapshot-card__label,
.project-card__domain,
.summary-card__label {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--global-text-color-light);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.snapshot-card__value {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.focus-card h3,
.project-card h3,
.contact-card h3,
.cv-card h2,
.summary-card h3 {
  margin-top: 0;
}

.project-card p,
.contact-card p,
.cv-card p,
.summary-card p,
.focus-card p {
  margin-bottom: 0.85rem;
}

.project-card__meta {
  margin-bottom: 0.6rem;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  font-weight: 600;
}

.project-card__actions,
.summary-actions {
  m
...
```


## Package Files Materialized

- `fonts/academicons.ttf`
- `fonts/academicons.woff`
- `fonts/academicons1.ttf`
- `fonts/fa-brands-400.ttf`
- `fonts/fa-brands-400.woff2`
- `source_examples/_pages/about_files/libs/bootstrap/bootstrap.min.js`
- `source_examples/_pages/about_files/libs/clipboard/clipboard.min.js`
- `source_examples/_pages/about_files/libs/quarto-html/anchor.min.js`
- `source_examples/_pages/about_files/libs/quarto-html/popper.min.js`
- `source_examples/_pages/about_files/libs/quarto-html/quarto.js`

## Next Design-System Work

- Use these source paths and snapshots as evidence before writing `DESIGN.md`.
- Convert the inventory above into a Claude Design-style package: `README.md`, `SKILL.md`, `colors_and_type.css`, `preview/colors-*`, `preview/typography-specimens.html`, `preview/spacing-*`, `preview/components-*`, `preview/brand-assets.html`, `ui_kits/app/`, and preserved `assets/`, `build/`, or `fonts/` when evidence exists.
- `ui_kits/app/index.html` must be a browser-reviewable component entry: load `../../colors_and_type.css`, load or import at least three files from `ui_kits/app/components/`, and mount the composed UI through ReactDOM/Babel or compiled browser-ready JavaScript. Do not duplicate a static HTML mock when modular component files exist.
- `ui_kits/app/components/App.jsx` (or equivalent app shell) must compose source-backed role components such as Sidebar, AssistantsList, ChatArea, InputBar, and MessageBubble, not merely list their filenames.
- Claude-style UI-kit entry skeleton for direct JSX kits:
  - `<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>`
  - `<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>`
  - `<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>`
  - `<link rel="stylesheet" href="../../colors_and_type.css">`
  - `<div id="root"></div>`
  - Load role components from `components/*.jsx` with `<script type="text/babel" src="components/ComponentName.jsx"></script>`.
  - Mount with `const { App } = window; const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<App />);`.
- Preserve at least three high-signal source examples outside `context/` under `source_examples/` when reusable component snapshots exist, so future agents can compare generated components against original source structure.
- When a captured asset path begins with `build/`, copy the snapshot back into a root `build/` path with its original filename, such as `context/.../files/build/icon.png` -> `build/icon.png`. Do not satisfy build/runtime icon evidence by only renaming those files into `assets/`.
- Make `preview/brand-assets.html` visibly load preserved asset files from `assets/` or `build/`; do not redraw captured logos/icons as inline placeholders.
- Extract concrete colors, typography, spacing, radius, component behavior, assets, and product tone only when supported by inspected files.
- If evidence is missing or ambiguous, mark that uncertainty instead of inventing tokens.
