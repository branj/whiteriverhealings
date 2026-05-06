# Handoff: White River Healings Website

## Overview
White River Healings is the website for Brooke Jennings — Reiki Master, Intuitive Guide, Herbalist, and Holistic Health Coach. The site is a single-page destination for discovering services and booking sessions. The design is warm, botanical, and atmospheric, with subtle seasonal variation.

---

## About the Design Files
The files in this bundle are **high-fidelity HTML prototypes** showing intended look and behavior. They are **not production code to copy directly**. Recreate the designs in a real web framework (Next.js + React recommended) using the design tokens and patterns documented here.

---

## Fidelity
**High-fidelity.** Colors, typography, spacing, and interactions are all final. Recreate exactly using the values below.

---

## Technology Recommendations
- **Framework**: Next.js (React) — single-page site with SEO, easy deploy on Vercel
- **Styling**: Tailwind CSS or CSS Modules
- **Animations**: Framer Motion for scroll reveals; CSS keyframes for particles
- **Booking**: All "Book a Session" buttons → `https://white-river-healings.square.site/` (target="_blank")
- **Contact form**: Resend, EmailJS, or Formspree → send to `whiteriverhealings@gmail.com`
- **Fonts**: Cormorant Garamond + EB Garamond from Google Fonts

---

## Pages / Sections
Single-page layout with anchor navigation:
1. **Hero** — full-viewport with seasonal background, particles, and call-to-action
2. **About** — Brooke's bio with photo (`assets/brooke.jpg`)
3. **Services** — three session offerings
4. **Testimonials** — rotating carousel (replace with real quotes)
5. **Contact** — two-column: contact info + form
6. **Footer** — brand, contact, hours, social

---

## Design Tokens

### Typography
```
Display:  "Cormorant Garamond", Georgia, serif (300/400/500, italic heavily used)
Body:     "EB Garamond", Georgia, serif (400/500)

Hero h1:        clamp(3rem, 7vw, 5.5rem), italic, weight 400, line-height 1.1
Section h2:     clamp(2rem, 4vw, 3rem), italic, weight 400
Card h3:        1.3–1.5rem, italic, weight 400
Eyebrow labels: 0.72–0.75rem, uppercase, letter-spacing 0.2–0.28em
Body text:      0.92–1rem, line-height 1.8–1.9
Buttons:        0.78–0.85rem, uppercase, letter-spacing 0.1–0.12em
```

### Seasonal Themes
The site supports four seasons. Implement as a theme context/CSS variable swap. **Summer is the default.**

#### Summer (default)
```
Hero bg:        #fdf8f0       Section bg:     #fdfaf5
Section alt bg: #f5f0e5       Heading:        #261508
Body text:      #524030       Accent:         #c17f4a
Card border:    rgba(193,127,74,0.18)
Footer bg:      #261508
```

#### Spring
```
Hero bg:        #f2ede4       Heading:    #2e1f14
Body text:      #5a3d2b       Accent:     #a8845a
Footer bg:      #2e1f14
```

#### Autumn (dark hero)
```
Hero bg:        #1e1208 (dark)
Heading (hero): #f0e0c8 (light)    Heading (sections): #3d2510
Body (hero):    #c8a880             Body (sections):    #5c4030
Accent:         #d4782a
Footer bg:      #110a04
```

#### Winter (dark hero)
```
Hero bg:        #0a0f1e (dark)
Heading (hero): #e8eaf5 (light)    Heading (sections): #261508
Body (hero):    #b0b8d0             Body (sections):    #524030
Accent:         #7090c8
Footer bg:      #060a14
```

### Spacing
```
Section padding:    7rem 2rem
Max content width:  1100px (sections), 780px (hero), 750px (testimonials), 900px (contact)
Card padding:       2.5rem 2rem
About grid gap:     5rem
```

### Borders & Shadows
```
Card border:        1px solid rgba(accent, 0.18)
Card border-radius: 4px (cards), 3rem (buttons), 2px (inputs / photo)
Card shadow:        0 4px 30px rgba(heading, 0.08)
Photo shadow:       0 20px 60px rgba(heading, 0.08)
Button shadow:      0 4px 24px rgba(accent, 0.35)
```

---

## Sections — Detailed Specs

### Navigation
- Fixed top, transparent until scrolled 40px → frosted glass
- Wordmark: "White River" (1rem uppercase) + "Healings" (1.35rem italic, accent)
- Links: About · Services · Testimonials · Contact
- "Book a Session" pill (accent) → opens `https://white-river-healings.square.site/` in new tab
- Mobile hamburger → slide-down menu

### Hero (minimalist)
- `min-height: 100vh`, centered text content
- **No SVG illustrations** — clean atmospheric background only
- Layers (back to front):
  1. Solid seasonal background color
  2. Grain texture overlay (SVG noise, 4.5% opacity)
  3. Radial glow (center, subtle)
  4. Seasonal particles (CSS-animated tiny DOM elements, 1–2px)
  5. Hero text content with subtle radial backdrop for legibility
- **Hero text** (centered, max-width 780px):
  - Eyebrow: "Brooke Jennings · Reiki Master · Herbalist · Intuitive Guide" (0.8rem, uppercase, 0.28em tracking, accent)
  - H1: "Align Your Body, / Mind & Spirit" — second line in accent color
  - Divider: 60px × 1.5px, accent
  - Body paragraph
  - CTA buttons: "Book a Session" (filled, → Square) + "Explore Services" (outline, → #services)
- **Hero text counter-scrolls** at `translateY(scrollY × 0.08)`
- **Scroll cue**: animated vertical gradient line at bottom, fades when scrollY > 60

### Seasonal Particles
Implemented as small DOM elements with CSS `@keyframes`. Render mode varies by season:
- **Summer**: ~25 golden dots (1–2px, 6–14% opacity), drift upward
- **Autumn**: ~28 amber firefly dots, fade in/hold/fade out cycle
- **Winter**: ~40 tiny snow crosses (two 0.6px lines), fall with wobble
- **Spring**: ~35 small rose petal divs (oval, 2–4px), drift down with rotation

### About
- Background: `sectionAltBg`
- 2-column grid (1fr 1fr), gap 5rem
- **Left**: photo (`assets/brooke.jpg`), aspect-ratio 3/4, max-width 420px, border-radius 2px, shadow
- **Right**: eyebrow + h2 + divider + 2 paragraphs + 3 credential badges (Reiki Master / Herbalist / Health Coach)
- Scroll-triggered fade-in (IntersectionObserver, 0.9s ease)

### Services
- Background: `sectionBg`
- 3 cards, auto-fit grid, min 300px
- Each card: tag pill, h3 italic, price/duration label, description, "Book This Session" button → Square

#### Service Data
```
1. Distant Reiki Session (60 min) — $111
   Tag: "Most Loved"
   Includes: Full Body Reiki Energy Healing, Chakra & Aura Reading/Cleansing,
             Intuitive Channeling and Guidance

2. Distant Reiki Session (90 min) — $133
   Tag: "Deep Dive"
   Includes: Everything in 60-min + Angel Card Draw with Interpretation

3. Holistic Health & Herbalism Consultation (2 Sessions, 90 min) — $250
   Tag: "Transformative"
   Includes: Intake form, Health History & Lifestyle, Specialized Protocol & Goal Plan,
             Reiki Healing, Two-Week Follow-Up
   Addresses: Digestive issues (GERD/IBS/SIBO/Leaky Gut/Candida), Brain Fog, Joint Pain,
              Hormonal imbalance (Hashimoto's, PCOS), Lyme Disease, Epstein Barr,
              Mental Health, Addiction, Spiritual Blockage
```

Hours note below grid:
> Virtual sessions available Thu–Fri 10:00 AM–5:00 PM · Sat 11:00 AM–4:00 PM

### Testimonials
- Background: `sectionAltBg` with radial glow
- One testimonial visible at a time, dot navigation
- Quote in display font 1.15–1.5rem italic
- **Replace placeholder testimonials with real client quotes**

### Contact
- Background: `sectionAltBg`
- Two columns (1fr 1fr), gap 4rem
- **Left**: contact links + hours table + "Book a Session" button (→ Square)
- **Right**: contact form (name, email, message → `whiteriverhealings@gmail.com`)

### Footer
- Background: `footerBg` (dark, season-dependent)
- 4 columns: Brand / Contact / Hours / Social
- Bottom bar: copyright

---

## Real Business Data

### Contact
```
Email:     whiteriverhealings@gmail.com
Phone:     541.991.8453
Instagram: @whiteriverhealings  → https://instagram.com/whiteriverhealings
Facebook:  @whiteriverhealings  → https://facebook.com/whiteriverhealings
Booking:   https://white-river-healings.square.site/
```

### Hours
```
Thursday    10:00 AM – 5:00 PM
Friday      10:00 AM – 5:00 PM
Saturday    11:00 AM – 4:00 PM
Sun – Wed   Closed
All sessions virtual.
```

---

## Animations & Interactions

### Hero Parallax
```
Hero text: translateY(scrollY × 0.08) — counter-scroll
```

### Scroll Reveal (sections)
- IntersectionObserver, threshold 0.1–0.2
- On enter: opacity 0 → 1, translateY(20–30px) → 0
- Duration: 0.8–0.9s ease
- Stagger cards by `i × 0.15s`

### Button Hover
- Outline buttons fill with accent on hover (0.25s ease)

### Testimonial Carousel
- Dot navigation only, no auto-play
- Active dot 24px wide, inactive 8px

---

## Assets Included
- `assets/brooke.jpg` — Brooke's portrait (900×1200, 3:4 ratio, used in About section)

## Assets Still Needed
- [ ] **Real testimonials** — client quotes with first name + last initial and service type
- [ ] **Logo/wordmark** (optional) — currently typographic; could be replaced with a custom mark
- [ ] **Open Graph image** — for social sharing (1200×630)

---

## SEO / Meta
```html
<title>White River Healings — Reiki, Herbalism & Holistic Health | Brooke Jennings</title>
<meta name="description" content="White River Healings is a safe space for Reiki energy healing, herbalism, and holistic health coaching with Brooke Jennings. Virtual sessions Thursday–Saturday."/>
<meta property="og:title" content="White River Healings"/>
<meta property="og:description" content="Reiki Master, Herbalist & Holistic Health Coach. Book a distant Reiki session or herbal consultation."/>
<meta property="og:image" content="/og-image.jpg"/>
```

---

## Files in This Package
```
design_handoff_white_river_healings/
├── README.md                      ← This document
├── White River Healings.html      ← Full prototype (open in browser to view)
├── tweaks-panel.jsx               ← Helper component for the prototype's season switcher
├── assets/
│   └── brooke.jpg                 ← Real photo of Brooke (use in About section)
└── components/
    ├── hero.jsx                   ← Hero + seasonal particles + SEASONS data
    ├── sections.jsx               ← About, Services, Testimonials, Contact, Footer
    └── nav.jsx                    ← Top navigation
```

### How to View the Prototype
Open `White River Healings.html` in any modern browser. The prototype is fully interactive — switch seasons via the **Tweaks** panel button to see all four palettes.

---

## Developer Notes
1. **Season switching** is a key brand feature. Implement as a React context with CSS-variable swapping; persist in localStorage.
2. **Hero is intentionally minimal** — no botanical illustrations, just atmosphere. Don't add imagery here.
3. **Brooke's photo** is the visual anchor of the About section — give it room to breathe.
4. The **contact form** in the prototype shows a success state on submit. Wire to a real email service before launch.
5. **Accessibility**: Add `aria-label` on icon buttons, ensure WCAG AA contrast (especially on dark autumn/winter heroes), add `prefers-reduced-motion` to disable particles + parallax.
6. The Square booking URL `https://white-river-healings.square.site/` should always open in a new tab.
