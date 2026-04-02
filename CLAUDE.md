# LetsGrowPatients.com

Static website for **Lets Grow Patients** — a chiropractic marketing agency specializing in AI-powered patient acquisition.

## Tech Stack
- Pure HTML/CSS/JS (no frameworks, no build step)
- Google Fonts: Inter + Plus Jakarta Sans
- SVG logos and illustrations
- Responsive design (mobile-first)

## Structure
```
LGP/
├── index.html          # Homepage
├── services.html       # Marketing services
├── ai-solutions.html   # AI-powered solutions
├── about.html          # About the company
├── pricing.html        # Plans & pricing
├── contact.html        # Contact form & info
├── css/
│   └── styles.css      # Global stylesheet
├── js/
│   └── main.js         # Shared JavaScript
├── images/
│   ├── logo.svg        # Full logo (dark bg)
│   ├── logo-light.svg  # Full logo (light bg)
│   └── favicon.svg     # Favicon
├── cloudflare-worker.js # Cloudflare Pages routing
├── .gitignore
└── CLAUDE.md           # This file
```

## Color Palette
- Primary: `#7c3aed` (purple-500)
- Accent: `#d946ef` (fuchsia)
- Background: `#080212` (near-black)
- Text: `#f1f0f5` / `#b8b0cc` / `#8878a9`

## Deployment
Designed for Cloudflare Pages or any static hosting. The `cloudflare-worker.js` handles routing for clean URLs.

## Brand Notes
- No affiliation with LetsGrowDigital.ai
- Exclusively focused on chiropractic marketing
- AI-first positioning is a key differentiator
