---
version: alpha
name: Rookie's Lab
description: >-
  Editorial personal blog inspired by the quiet craft of jakub.kr,
  adapted for long-form reading with ET Book as the primary typeface.
colors:
  background: "#FCFCFC"
  surface: "#FFFFFF"
  foreground: "#202020"
  paragraph: "#424242"
  muted: "#646464"
  subtle: "#8D8D8D"
  border: "#E8E8E8"
  border-strong: "#CECECE"
  accent: "#3B82F6"
  selection: "#93A7C633"
  dark-background: "#101010"
  dark-surface: "#111111"
  dark-foreground: "#EEEEEE"
  dark-paragraph: "#DBDBDB"
  dark-muted: "#B5B5B5"
  dark-subtle: "#7B7B7B"
  dark-border: "#2A2A2A"
  dark-accent: "#60A5FA"
typography:
  display:
    fontFamily: et-book
    fontSize: 2.6rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: et-book
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.02em
  headline-md:
    fontFamily: et-book
    fontSize: 1.8rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.015em
  headline-sm:
    fontFamily: et-book
    fontSize: 1.45rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.015em
  body-lg:
    fontFamily: et-book
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: et-book
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-italic:
    fontFamily: et-book
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'liga' 1, 'kern' 1"
  label-md:
    fontFamily: et-book
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.4
  meta:
    fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: 0.95rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
  code:
    fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: 0.95rem
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: et-book
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.4
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 96px
  gutter: 24px
  measure: 43rem
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
components:
  page-shell:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    width: "{spacing.measure}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.accent}"
  post-list-item:
    textColor: "{colors.foreground}"
    typography: "{typography.label-md}"
    padding: 22px
  post-list-meta:
    textColor: "{colors.subtle}"
    typography: "{typography.meta}"
  prose-body:
    textColor: "{colors.paragraph}"
    typography: "{typography.body-lg}"
  prose-link:
    textColor: "{colors.foreground}"
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: 12px
  code-block:
    backgroundColor: "#F6F6F6"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: 16px
---

# Rookie's Lab Design System

Adapted from the quiet, craft-forward personal site aesthetic of [jakub.kr](https://jakub.kr/) — narrow measure, generous whitespace, soft neutrals, and restrained interaction — while locking **ET Book** as the primary typeface for an editorial reading voice.

## Overview

Rookie's Lab should feel like a carefully set book that happens to live on the web: calm, confident, and sparse. The site is a personal engineering blog, not a product marketing page.

**Personality:** editorial · precise · understated · literate  
**Emotional response:** clarity and focus; room to think  
**Density:** airy. Prefer empty space over decoration.  
**Hierarchy:** size and spacing first; weight almost never (ET Book only ships roman / italic / bold).

Keep the existing logo mark as-is. Do not reinvent branding marks, favicons, or add decorative illustrations for their own sake.

Reference vibe (structure & craft): [jakub.kr](https://jakub.kr/).  
Reference type (locked): ET Book (Edward Tufte’s book face).

## Colors

A near-white canvas with ink-dark type, matching jakub.kr’s soft gray ramp rather than loud brand color. Accent blue is reserved for interaction cues (hover, focus, link underline), never large fills.

**Light**

- **Background (`#FCFCFC`):** Page canvas — slightly off-white like jakub’s `gray-background`, softer than pure `#FFF`.
- **Foreground (`#202020`):** Headlines, titles, strong text — deep ink, not pure black.
- **Paragraph (`#424242`):** Body copy; slightly softer than headlines for long reading.
- **Muted (`#646464`) / Subtle (`#8D8D8D`):** Nav, captions, dates, secondary labels.
- **Border (`#E8E8E8`):** Hairline rules for post lists and section breaks.
- **Accent (`#3B82F6`):** Links on hover and underline decoration only.

**Dark**

Invert the ramp onto `#101010` / `#111111` surfaces with `#EEEEEE` / `#DBDBDB` text. Borders become `#2A2A2A`. Accent lightens to `#60A5FA`.

Do not introduce cream paper backgrounds, burgundy Tufte links, purple gradients, or multi-color accent systems.

## Typography

**Primary face: ET Book** (self-hosted). Used for body, headings, nav, and UI chrome.  
**Secondary face: system monospace.** Used for dates, year labels, `#` heading prefixes, and code — the same role Berkeley Mono plays on jakub.kr.

ET Book only provides **roman, italic, and bold**. Never rely on `font-medium` / `font-semibold` / weight 500–600; browsers will faux-bold poorly. Hierarchy comes from **size, spacing, and color**, with true `bold` reserved for `strong` and rare emphasis.

- **Display / post title:** ~2.5–2.6rem, weight 400, slight positive tracking (`0.02em`).
- **Section heads (prose h2/h3):** size steps only; weight 400; soft hairline under h2 when needed.
- **Body:** 1.25rem, line-height ~1.65, ligatures on.
- **Blockquotes:** ET Book italic, muted color, left hairline — no heavy quote chrome.
- **Meta (dates, years):** monospace ~0.95rem, subtle color, slight tracking.
- **Nav:** ET Book at body-adjacent size; muted until hover.

Do not mix in Inter, Geist, Heldane, or other display faces. ET Book stays the voice of the site.

## Layout

Follow jakub.kr’s **single narrow column** model:

- **Measure:** ~`43rem` / `max-w-screen-md` (~690–768px). One reading column, centered.
- **Horizontal padding:** 16–32px (`px-4` → `lg:px-8`).
- **Vertical rhythm:** generous section gaps (`64–96px` between major blocks). Post list rows ~`1.35rem` vertical padding.
- **Home pattern:** year label (mono) → hairline-separated title/date rows — not cards, not grids of tiles.
- **Article pattern:** title + mono date → prose → prev/next footer rule.
- **No dashboard layouts.** No sidebar, no multi-column marketing grids, no hero image plane on the blog chrome.

Spacing scale is 4px-based. Prefer multiples of 8 for section spacing.

## Elevation & Depth

Hierarchy is **tonal and typographic**, not shadowed.

- Prefer hairline borders (`1px` at `{colors.border}`) over drop shadows.
- If a soft lift is needed (rare — e.g. code blocks or focused controls), use a whisper shadow akin to jakub’s:  
  `0 0 0 1px rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)`.
- Code blocks sit on a slightly cooler/gray wash (`#F6F6F6` light / arctic-950 dark), not floating cards.
- Avoid multi-layer shadows, glows, and glassmorphism.

## Shapes

Quiet and slightly soft:

- **Default radius:** 8px for code blocks and media.
- **Small controls:** 4px.
- **No pills** for nav or tags unless functionally required.
- **Hairlines** are straight, full-bleed within the measure (post list rules, h2 underlines, article footer).
- Logo mark retains its own geometry; do not restyle it to match radius tokens.

## Components

### Navigation
Top bar inside the measure: logo left (unchanged SVG), text links right. Links use muted ET Book; hover to accent. No background bar, no border-heavy header.

### Post list
Year heading in mono. Each post is a full-width row with top border; title left (ET Book), date right (mono). Hover reduces opacity slightly — no background fill, no card chrome.

### Prose
Custom `.prose` (not Tailwind Typography plugin defaults). Underlined links with accent-tinted decoration and generous underline offset. Lists use muted markers. Tables get simple bottom borders.

### Footer
Minimal: theme switch + text links. Same muted ET Book voice as nav.

### Theme switch
Small, unobtrusive control. Must not dominate the footer.

### Stub pages (Projects / Contact / Privacy)
Same type scale and arctic-neutral colors as the blog — no one-off Tailwind `slate`/`blue` stacks.

### Out of scope
`/projects/idiom-of-the-day` keeps its own legacy aesthetic and fonts.

## Do's and Don'ts

**Do**

- Do keep ET Book as the only primary typeface site-wide (except mono metadata/code).
- Do use weight 400 for almost everything; bold only for true emphasis.
- Do protect whitespace — when in doubt, add margin, not chrome.
- Do use hairlines and color contrast for separation.
- Do keep interactive accent usage sparse (hover/focus/underline).
- Do preserve the existing logo and favicon artwork.
- Do support light and dark with the neutral ramp above.

**Don't**

- Don't introduce a second sans/serif brand font (no Geist, Inter, Heldane, etc.).
- Don't build card grids, hero marketing layouts, or stat strips on content pages.
- Don't use `font-medium` / `font-semibold` as hierarchy.
- Don't default to purple gradients, glow effects, or cream/terracotta “AI aesthetic” palettes.
- Don't place floating badges, chips, or promo stickers in the first viewport.
- Don't restyle the idiom-of-the-day project page into this system unless explicitly asked.
- Don't sacrifice measure width for “wide modern” layouts — this is a reading site.
