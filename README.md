# ESTAK — marketing website

The public marketing site for **Estak OÜ** — a real-time tactical operations platform that
brings people, unmanned vehicles and command onto one shared picture.

It's a single, polished landing page aimed at a dual audience:

- **Operators / customers** — what ESTAK does and how to get a walkthrough.
- **Investors / partners** — the thesis and why ESTAK is a natural integration layer for unmanned-systems makers.

Both paths end in a contact CTA to **contact@estak.ee**.

## Tech

A deliberately simple **static site** — plain HTML, CSS and a few lines of vanilla JS.
**No build step, no framework, no dependencies.** It's designed to be hosted as-is on
GitHub Pages (or any static host).

```
estak-website/
├── index.html          # the whole page (semantic, accessible)
├── styles.css          # design system + responsive layout
├── script.js           # mobile nav toggle only
├── CNAME               # custom domain for GitHub Pages → www.estak.ee
├── assets/
│   ├── favicon.svg     # real ESTAK persona-pin mark
│   ├── icon-192.png    # app icon (apple-touch-icon / PWA)
│   ├── icon-512.png    # app icon
│   ├── og-image.png    # social share card (1200×630)
│   └── screenshots/    # drop real screenshots / photos here (see below)
└── README.md
```

### Design & assets

The look carries over the warm, light brand language from the ESTAK one-pager:
brand blue `#258cf4`, the real persona-pin navy `#185fa5`, and the actual in-product
**APP-6D / MIL-STD-2525D** marker vectors. The hub diagram and live-map vignette are
hand-built SVG using those real assets — **not** stock art.

> **Note on imagery:** no real photographs or app screenshots existed in the source
> repositories, so the visuals use genuine in-product vector assets. Clearly-marked
> placeholders live in the "See it in the field" gallery (search `index.html` for
> `REAL IMAGES GO HERE`). To add real shots, drop files into `assets/screenshots/`
> and replace each placeholder `<div class="shot">…</div>` with an `<img>` — 16:10,
> ≥1200px wide, `.webp`/`.png` recommended.

## Run locally

It's just files — open `index.html` in a browser, or serve the folder:

```bash
# Python (any version 3.x)
python -m http.server 8080
# then visit http://localhost:8080

# …or Node, if you prefer
npx serve .
```

## Deploy to GitHub Pages

1. Push to GitHub (this repo is `kuuno777/estak-website`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, folder **`/ (root)`**, then **Save**.
4. The included **`CNAME`** file already sets the custom domain to **`www.estak.ee`**.
   GitHub Pages will pick it up automatically (Settings → Pages → Custom domain shows `www.estak.ee`).
5. Leave **Enforce HTTPS** enabled once the certificate is issued.

## Point www.estak.ee at the site (DNS)

At your DNS provider for `estak.ee`, add a **CNAME** record:

| Type  | Name / Host | Value                   |
|-------|-------------|-------------------------|
| CNAME | `www`       | `kuuno777.github.io`    |

Optional — make the apex (`estak.ee`) redirect to `www`:

| Type | Name / Host | Value (GitHub Pages apex IPs)                         |
|------|-------------|------------------------------------------------------|
| A    | `@`         | `185.199.108.153`                                    |
| A    | `@`         | `185.199.109.153`                                    |
| A    | `@`         | `185.199.110.153`                                    |
| A    | `@`         | `185.199.111.153`                                    |

DNS can take up to ~24h to propagate. Once live, the site is served at **https://www.estak.ee**.

## Editing content

Everything is in `index.html`, organised by clearly-commented sections
(hero, standards strip, how-it-works, capabilities, symbology, roadmap, gallery,
audience, contact, footer). Brand colours are CSS custom properties at the top of
`styles.css` (`--blue`, `--ink`, `--green`, …).

---

© Estak OÜ · contact@estak.ee
