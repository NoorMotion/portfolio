# Changelog — "After Effects Workspace" redesign

## Pass 1 (hero, showreel, logos, work, closing CTA, footer)

### Removed
- Tailwind CDN script → built, purged `style.min.css` (`npm run build:css`).
- 10 font families (Caveat, Cinzel, Cormorant, Playfair, Syne, VT323, Silkscreen, Instrument Serif, Hind Siliguri, Bodoni) and Font Awesome. Now: Inter, JetBrains Mono, Jersey 25 (hero word only), self-hosted woff2.
- Hot-linked carrd.co and YouTube thumbnails → local WebP in `Assets/img/`.
- 4 pinned pastel "Services" cards and their scroll-jacking pin.
- Hero social icons, header live clock, header pill-morph on scroll, cursor-coordinate readout.
- Placeholder testimonials (initial avatars, "StartUp Inc.").
- In-page localStorage analytics with seeded fake events, and the localStorage CMS override of the work/tools grids (both only ever ran in the admin's own browser).
- YouTube iframe API, GSAP TextPlugin, unused wiggle/stacking code.

### Merged
- "Featured Motion Works" + "Technical SaaS Product Walkthroughs" → one **Selected work** section with filters, 2 featured + 9 grid cards, real client names instead of "MOTION PROJECT".

### Moved
- Clock, socials, Blog, Studio → footer.
- Video playback → one accessible modal (native `<dialog>`, Esc + focus trap) with Challenge → Approach → Result and a Payrun episode switcher.

### Added
- Design tokens (light + dark), grain, construction guide lines with "+" marks, `[NN] LABEL_` layer labels, timeline-ruler dividers, scroll playhead on the header edge, AE selection box on work-card hover/focus, keyframe-diamond bullets.
- Hero positioning line, two CTAs, availability meta row; H1 with real text.
- Showreel: muted in-view loop (paused off-screen, skipped for reduced motion / Save-Data), "Watch full reel" with sound.
- Client logo marquee (static wrap under reduced motion).
- Closing CTA (dark): giant headline, form (Formspree via `site.config.js`, email fallback, honeypot), "Book a 20-min call".
- SEO: canonical, Open Graph, JSON-LD Person. `preview.html` now `noindex`.
- Portrait: 4.8 MB PNG → AVIF/WebP 640/1000/1600 (32 KB / 94 KB at 1600), cropped, preloaded with `fetchpriority="high"`.

### Compatibility
- Old `style.css`/`script.js` kept as `legacy.css`/`legacy.js`; `blog.html` and `preview.html` now point at those (one line each).

## Pass 2 (sections 5–11)

### Added
- **Stats band (dark):** "Complex products. Clear motion." with 4 count-up stats (final numbers ship in the HTML).
- **What I do:** 4 hairline columns replacing the pinned pastel cards. Each "Start a project" link jumps to the form with that project type pre-selected.
- **Process:** 5 tabs drawn as AE layer bars with a moving playhead. Full keyboard support (arrows / Home / End), auto-steps while on screen until touched, scrolls horizontally on phones.
- **Tools I built (dark):** CompSync, AutoCaption, textEco, Master Mask, with Gumroad links; demos open in the shared video modal.
- **Client words:** single featured-quote layout (placeholder until real testimonials arrive).
- **About:** cropped portrait, 3 sentences, location / languages / timezone / call hours.
- **FAQ:** native `<details>` accordion, one open at a time.
- Section rhythm now: paper → paper → DARK (stats) → paper → paper → DARK (tools) → paper → DARK (contact + footer).

## Tweaks
- Section labels larger (16–22px) without [NN] numbering.
- Client words (testimonial) section removed.
- Work filter chips larger (14px, 46px tall).
- Stats band rebuilt in the ahmadajmal.co style: light uppercase headline + mono copy left, full-bleed stat rows right with red markers on the divider and a dot-grid hover row.
