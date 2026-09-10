# USEReady Design System

The brand and interface system for **USEReady** — a data, analytics and AI firm founded in 2011, headquartered at 1407 Broadway, Suite 721, New York, NY 10018. USEReady partners with Tableau, Salesforce, Snowflake, Starburst and AWS, and works primarily with Chief Data & Analytics Officers in Financial Services and Insurance.

Tagline (part of the logo lockup): **We empower people to succeed with data.**

---

## Sources this system was built from

Everything here derives from material the user supplied. Nothing was invented from memory.

| Source | What it gave us |
| --- | --- |
| `uploads/USEReady logo usage.pptx` — "BRAND GUIDELINE", 8 slides | Logo lockups, clear-space rule, 16 logo don'ts, primary colours (#79787b / #ea4224 / #0e1239), secondary colours (#fed21a, #0f3f65, #f05657, #cac7c7, #5b8d3e, #00b1bd), fonts (Roboto primary, Rubik secondary), the ring background motif, contact `marketing@useready.com` |
| `uploads/Useready_logo_horiz_color-Tag.svg` / `.pdf` | Horizontal logo with tagline (1496×625) |
| `uploads/Useready_logo_Vertical_with_2lines.svg` / `.pdf` | Vertical logo, two-line tagline (1080×1137) |
| `uploads/Avenir.ttc` | Avenir collection (12 faces) — split into individual TTFs in `assets/fonts/` |
| User note in brief | "Dark blue (#10143a) and that orange (#ea4424) are main colors, font is Avenir." |
| Public web (useready.com, LinkedIn, press) | Product/solution names, positioning, values, tone of voice |

**No codebase, Figma file, or product screenshots were provided.** The UI kits in this system are therefore *brand-faithful constructions* built strictly from the colour, type, logo and layout rules above — they are not recreations of a specific existing USEReady screen. Treat them as the house style, not as pixel-truth of a shipped product. See "Caveats" at the bottom.

### Conflicts resolved

* **Font.** The brand deck names **Roboto** (primary) and **Rubik** (secondary). The user's brief and the uploaded font file say **Avenir**. Avenir wins as `--font-brand` / `--font-body`; Roboto sits in the fallback stack and Rubik is kept as `--font-alt` for anyone following the deck.
* **Dark blue.** The deck prints `#0e1239`; the user's brief says `#10143a`. `#10143a` is the token (`--ur-navy`); `--ur-navy-deck` preserves the deck value.
* **Orange.** Deck prints `#ea4224`, brief says `#ea4424`. `#ea4424` is the token.

---

## Content fundamentals

**Voice.** Confident, plain, consultative. USEReady talks like an advisor sitting next to a CDO, not like a vendor shouting from a booth. Sentences are short and declarative. Claims are backed with a number when one exists.

**Person.** "We" for USEReady, "you"/"your" for the customer. Never "I". Never third-person "USEReady helps its clients…" in body copy — that voice only appears in press boilerplate.

> We empower people to succeed with data.
> You have the data. We make it usable.
> Our unique approach adopts a blended offering of consulting, smart solutions, and cloud transformation.

**Casing.** Sentence case everywhere in UI and body copy. Headlines are sentence case, not Title Case. **Eyebrows, tags, and the tagline are ALL CAPS with wide tracking (`--ls-eyebrow`, 0.14em)** — this is the single most recognisable typographic tic of the brand, inherited straight from `WE EMPOWER PEOPLE TO SUCCEED WITH DATA` in the logo.

**Brand name.** Always `USEReady` — capital U-S-E, capital R, lowercase eady. Never "UseReady", "User Ready", "USEREADY". In the wordmark the "USER" is optically larger than "eady"; do not try to reproduce that in HTML type — use the logo asset.

**Product names** are single-word or compound proper nouns, not sentence-cased: MigrationWorks, Storm, DRE, Refactory.ai, Finomenal, SemaBridge, MigratorIQ, CDO Vantage.

**Vocabulary that belongs.** data readiness, modernization, governance, decision intelligence, agentic AI, semantic layer, migration, AI-ready, self-service BI, enablement, transformation.
**Vocabulary that doesn't.** "revolutionary", "game-changing", "unleash", "supercharge", "10x", "wizard", "magic".

**Numbers carry the argument.** "30,000+ reports and 100,000+ data pipelines modernized." Prefer a real figure over an adjective. Format large numbers with thousands separators and a `+`.

**Values language** (from the company's own values statement): *fanatical customer centricity, humility, integrity, community*. Humility is real here — copy should never boast about USEReady where it could instead credit the customer.

**Emoji: never.** Not in product UI, not in slides, not in marketing. The brand deck has none and the tone doesn't support it.

**CTAs** are two or three words, verb-first, sentence case: `Talk to us`, `See the platform`, `Read the case study`, `Get started`. No "Learn more →" with a stray arrow glyph in text; use a real icon.

**Punctuation.** Serial comma. No exclamation marks. Em dashes sparingly. Ampersands allowed in short labels ("Data & AI"), spelled out in prose.

---

## Visual foundations

### Colour

Three primaries do almost all the work: **navy `#10143a`** (authority, ground), **orange `#ea4424`** (the accent — one per view), **grey `#79787b`** (the wordmark grey, the workhorse for secondary text and structure). The logo itself encodes the rule: three grey figures, one orange figure standing taller. *Orange is the exception, never the field.* Large orange fields are explicitly discouraged by the brand deck ("don't present the logo on vibrating coloured background") — use orange for CTAs, active states, rules, data highlights, and eyebrow accents.

Six secondaries (`--ur-yellow #fed21a`, `--ur-blue #0f3f65`, `--ur-coral #f05657`, `--ur-stone #cac7c7`, `--ur-green #5b8d3e`, `--ur-teal #00b1bd`) exist for charts, status and section differentiation. They are the data-viz sequence (`--viz-1…8`); orange leads it. Never introduce a colour outside these two palettes.

**Maximum two background colours per artefact**: white/`--surface-subtle` and navy. Navy sections are used for statement moments — hero, quote, closing — not for long reading.

### Type

Avenir throughout. Five weights in play: Light 300 (large lead paragraphs only), Book 400 (body), Medium 500 (labels, buttons, UI), Heavy 700 (all headings), Black 900 (display numerals and stat figures only). Avenir's geometric roundness matches the capsule geometry of the logo mark — that is why it holds together.

Headings are tight (`--lh-heading` 1.18) and slightly negative-tracked; body is generous (`--lh-body` 1.6). Measure caps at ~72ch (`--container-text` 720px). Display sizes step 64/52/40/32/24/20; nothing below 12px in UI, nothing below 24px on a 1920×1080 slide.

### Shape & the capsule motif

The logo's figures are **capsules** — full-radius rounded rectangles. That is the brand's shape language. It shows up as: pill chips and tags (`--radius-pill`), pill-shaped progress and meter bars, capsule avatars/indicators. Everything else is restrained: cards at 8px, controls at 4px, large panels at 10–16px. **Never fully-rounded buttons** — buttons are 4px; the pill is reserved for non-interactive status objects so the motif stays meaningful.

### Backgrounds

Three sanctioned treatments, all taken from the supplied deck:
1. **Plain** — white or `--ur-grey-050`. The default; most of the system.
2. **Concentric rings** (`assets/bg-rings-light.jpg`) — enormous, very low-contrast grey rings bleeding off the top-left corner. Decorative only, never behind body text, always subtle enough to be nearly invisible.
3. **Navy field** — flat `--ur-navy`. Optionally with `assets/bg-tech-dark.jpg` (blue circuitry photograph) at low opacity behind a navy scrim for hero moments.

No gradients as brand surfaces. No mesh, no noise, no glassmorphism. The one permitted gradient is a **protection gradient**: a navy→transparent linear ramp placed over photography so white text stays legible. Protection gradients, not capsules — the brand does not put text in translucent pills over images.

### Imagery

Cool-toned, blue-dominant, technology-literal (circuitry, data centres, screens) or candid people-at-work. Never warm filters, never heavy grain, never illustration-as-photograph. Photographs are full-bleed or edge-anchored to a grid column; they are not floated in rounded cards. Photos never sit behind the logo (deck rule: "don't place the logo on a busy photograph").

### Cards, borders, shadows

Cards: white, `--radius-card` 8px, `1px solid var(--border-subtle)`, **no shadow at rest**. Elevation is a hover/overlay affordance, not a decoration — `--shadow-md` on hover, `--shadow-lg` for popovers, `--shadow-xl` for modals. Never a coloured left border on a card. Never a shadow on a flat page section. Dividers are 1px `--border-subtle`; a 3px orange rule is the one decorative border, used under a section eyebrow or on the active tab.

### Motion

Restrained and quick. `--dur-fast` 140ms for controls, `--dur-normal` 220ms for panels, `--dur-slow` 360ms for page-level reveals. Easing is `--ease-standard` `cubic-bezier(.2,0,.2,1)`. Fades and 8–12px upward translations only. **No bounce, no spring, no scale-in-from-zero, no parallax.** Charts may animate a single 360ms draw-in on first paint and never again.

### Interaction states

* **Hover, filled:** darken one step (orange 500→600, navy 700→600 for inverse surfaces). No opacity fades on filled buttons.
* **Hover, outline/ghost:** fill with `--surface-accent-soft` (or `--ur-grey-050` for neutral), border darkens one step.
* **Hover, card/row:** background to `--ur-grey-050`, `--shadow-md`, no movement of the card itself.
* **Hover, link:** colour to `--text-link-hover` plus underline at 3px offset.
* **Press:** darken a second step and drop shadow to none. No transform, no shrink — the brand does not squash.
* **Focus:** 2px `--ur-orange` ring at 2px offset, always visible on keyboard focus, never removed.
* **Disabled:** `--ur-grey-300` surface, `--ur-grey-400` text, no shadow, `cursor:not-allowed`. Never opacity-only.
* **Selected/active:** orange 3px bar (tabs, side nav) or `--surface-accent-soft` fill with navy text.

### Transparency & blur

Used sparingly and only for: modal scrims (`rgba(16,20,58,.55)`), the protection gradient over photography, and `--text-inverse-muted` `rgba(255,255,255,.72)` for secondary text on navy. **No backdrop blur anywhere.** Frosted panels are off-brand.

### Layout

12-column grid, `--gutter` 24px, `--container-max` 1200px (`--container-wide` 1440px for dashboards). Vertical rhythm on an 8px base with a 4px half-step. Section padding `--section-y` 96px desktop / 56px mobile. Headers are sticky, 64px tall, white with a hairline bottom border; app shells use a fixed 240px left rail. Content is left-aligned by default — centred layouts are reserved for hero and empty states.

### Logo rules (from the brand deck, non-negotiable)

Clear space on all sides equals the height of the **"i"** in the wordmark (`--logo-clearspace`). Do not: rotate, bevel, emboss, glow, drop-shadow, outline, recolour, crop, stretch, squeeze, rearrange elements, place on busy photography, place on a similar-value background, place over an object, or use inline within a sentence.

---

## Iconography

**No icon set was supplied.** The brand deck contains no icon system, no icon font, and no SVG icon library, and no codebase was attached.

**Substitution — please confirm.** This system uses **[Lucide](https://lucide.dev)** (CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`) as its icon set. Rationale: Lucide is a 24×24 geometric outline set with a uniform 2px stroke and rounded caps/joins — the rounded terminal matches the capsule geometry of the USEReady mark better than square-capped alternatives (Heroicons outline, Feather is the same family lineage). **If USEReady has a real icon set, send it and this will be replaced.**

Usage rules:
* Stroke width 2, size 16 / 20 / 24 only. Never rescale a 24px icon to 13px.
* Icons take `currentColor` — they inherit the text colour of their context. Orange icons only where the accompanying text is also orange or where the icon *is* the accent.
* Icons never appear alone as a control without an accessible label.
* **Emoji are never used as icons.** Unicode glyphs (→, ✓, •) are never used as icons either — the only unicode allowed is the bullet in a list and the en/em dash. Arrows are `arrow-right`, checks are `check`.
* The logo mark is not an icon and is never used as a favicon-sized glyph inside UI.

---

## What's in here

**Root**
* `styles.css` — the single entry point. `@import`s everything below.
* `readme.md` — this file.
* `SKILL.md` — Agent-Skills-compatible entry point.
* `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**`assets/`**
* `logo-horizontal-tagline.svg` / `.png` — primary lockup
* `logo-vertical-tagline.svg` — stacked lockup, two-line tagline
* `logo-clearspace.png`, `logo-clearspace-both.png` — clear-space diagrams from the brand deck
* `bg-rings-light.jpg`, `bg-rings-alt.jpg` — concentric-ring background motif
* `bg-tech-dark.jpg` — dark circuitry hero photograph
* `fonts/` — nine Avenir TTFs (Light/Book/Medium/Heavy/Black + obliques)

**`guidelines/`** — foundation specimen cards (Brand, Colors, Type, Spacing groups in the Design System tab).

**`components/`** — see below.

**`ui_kits/`**
* `website/` — the marketing site: hero, services, solutions, proof, footer
* `console/` — a data & AI console in the house style (navigation, dashboard, migration detail)

**`slides/`** — nine 16:9 slide templates in brand-deck style: `TitleSlide`, `SectionSlide`, `AgendaSlide`, `ContentSlide`, `StatementSlide`, `ComparisonSlide`, `StatSlide`, `QuoteSlide`, `ClosingSlide`.

**`templates/pitch-deck/`** — `PitchDeck.dc.html`, a seven-slide starting deck consuming projects can copy.

### Components

Authored from brand rules (no source component library existed), grouped by concern:

* `components/core/` — Button, IconButton, Icon, Logo, Eyebrow, Tag, Badge, Card, StatBlock, Divider
* `components/forms/` — Input, Textarea, Select, Checkbox, Radio, Switch, Field
* `components/navigation/` — Tabs, Breadcrumb, SideNavItem, TopBar
* `components/feedback/` — Alert, Tooltip, ProgressBar, EmptyState, Modal
* `components/data/` — DataTable, MetricCard, ChartLegend, BarChart, DonutChart

**Intentional additions** (no source defined a component inventory, so a standard set was authored to brand):
* `Logo` — wraps the supplied SVG lockups and enforces the clear-space rule so consumers can't violate it accidentally.
* `Eyebrow` — the ALL-CAPS wide-tracked label is the brand's defining typographic device; making it a component keeps tracking consistent.
* `StatBlock` / `MetricCard` — the brand argues with numbers; these standardise Avenir Black numerals.
* `BarChart` / `DonutChart` / `ChartLegend` — a data-analytics brand needs the viz palette applied consistently.

---

## Caveats

1. **No product source.** No codebase, Figma file, or screenshots of a real USEReady product were provided. The UI kits are brand-consistent constructions, not recreations. If you have the real site or console, send it and they should be rebuilt against it.
2. **Icon set is a substitution** (Lucide). Flagged above.
3. **Font conflict** between the brand deck (Roboto/Rubik) and the brief (Avenir) was resolved in favour of Avenir. Confirm this is correct.
4. **Avenir is a licensed font.** The TTFs shipped here were extracted from the user's own `Avenir.ttc`. Do not redistribute this system publicly without checking the licence.
5. **Two colour values differ** between the brand deck and the brief (navy, orange). The brief's values are canonical here.
