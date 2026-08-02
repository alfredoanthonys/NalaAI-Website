# Design System — AI Chatbot Product Website

Reference direction: clean SaaS/dashboard aesthetic — deep blue gradient hero, white body sections, card-based product mockups, restrained sans-serif type. This document translates that reference into a reusable token system and component spec for your site.

---

## 1. Brand Personality

- **Tone:** Confident, technical, calm. Not playful, not corporate-stiff — closer to "trusted infrastructure" than "fun startup."
- **Signature move:** The hero gradient panel is the one bold gesture on the page. Everything else (body sections, cards, type) stays quiet and disciplined so the gradient panel and the product screenshots inside cards do the visual work.
- **Feel in one sentence:** "A serious tool that happens to look effortless."

---

## 2. Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `--color-brand-900` | `#0F1F4D` | Hero gradient — deep end (top-left) |
| `--color-brand-600` | `#1D4ED8` | Hero gradient — mid tone, primary buttons |
| `--color-brand-500` | `#2563EB` | Primary CTA buttons, links, active states, chart accents |
| `--color-brand-300` | `#60A5FA` | Hero gradient — light end (bottom-right), highlighted text background |
| `--color-ink-900` | `#0F172A` | Headings, primary text |
| `--color-ink-600` | `#475569` | Body copy, secondary text |
| `--color-ink-400` | `#94A3B8` | Placeholder text, disabled states, captions |
| `--color-surface-0` | `#FFFFFF` | Page background, card background |
| `--color-surface-50` | `#F8FAFC` | Alternate section background |
| `--color-border` | `#E2E8F0` | Card borders, dividers, input borders |
| `--color-dark-panel` | `#0B1739` | Stats/quote band backgrounds (dark section between light sections) |
| `--color-success` | `#16A34A` | Positive deltas (e.g. "+32%" in dashboard mockups) |

**Rules:**
- White/light-gray sections and one deep-blue gradient section alternate down the page — never more than one dark section in a row.
- Blue is the *only* accent color. No secondary accent (no orange, no purple) — this is what keeps the SaaS-dashboard feel credible rather than decorative.
- Gradient direction: 135°, `--color-brand-900` → `--color-brand-600` → `--color-brand-300`, with a very faint diagonal line/grid texture overlay at ~4% opacity for depth (not a flat gradient).

---

## 3. Typography

| Role | Typeface | Weight | Notes |
| --- | --- | --- | --- |
| Display / Hero headline | **General Sans** (or Inter Display) | 600–700 | Tight tracking (-1.5%), large scale, 1–2 lines max |
| Section headings (H2/H3) | General Sans | 600 | Slightly looser tracking than hero |
| Body / UI text | **Inter** | 400–500 | Default for paragraphs, nav, buttons |
| Numeric / data (stats, dashboard figures) | **Inter** (tabular nums) | 600–700 | Use `font-variant-numeric: tabular-nums` for anything that updates or aligns in a table |

**Type scale (desktop):**

| Token | Size | Line height | Use |
| --- | --- | --- | --- |
| `--text-hero` | 56px | 1.05 | Hero headline |
| `--text-h1` | 40px | 1.1 | Page/section headline |
| `--text-h2` | 28px | 1.2 | Sub-section headline |
| `--text-h3` | 20px | 1.3 | Card titles |
| `--text-body` | 16px | 1.6 | Paragraph text |
| `--text-small` | 14px | 1.5 | Captions, nav links |
| `--text-stat` | 48px | 1.0 | Big stat numbers (dark band) |

Mobile: scale hero down to 32px, h1 to 28px; everything else holds.

**Signature type detail:** in the hero, one word of the headline sits inside a soft rounded highlight chip (light blue background, darker blue text) rather than being bolded or colored inline — e.g. "Prinon helps users navigate your **[platform]**" with "platform" in a pill. Reuse this pattern sparingly — once per hero, never in body copy — as the page's one typographic signature.

---

## 4. Spacing, Radius & Elevation

| Token | Value |
| --- | --- |
| `--radius-sm` | 8px — inputs, small buttons, pills |
| `--radius-md` | 12px — cards, mockup panels |
| `--radius-lg` | 20px — hero panel, large feature cards |
| `--space-section` | 96–120px vertical padding per full section (desktop), 56px mobile |
| `--space-card` | 24–32px internal card padding |
| `--shadow-card` | `0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)` — soft, low-contrast; never a hard drop shadow |
| `--border-card` | 1px solid `--color-border`, always paired with the shadow above (not either/or) |

Grid: 12-column, max content width 1600px (`--container-frame`, exposed as `max-w-frame`), 24px gutters. The hero panel is exempt: it runs near full-bleed with only the page gutter. Feature blocks run in a 2-column grid on desktop, 1-column stacked on mobile.

---

## 5. Core Components

### 5.1 Navigation Bar
- White background, sticky on scroll, 1px bottom border in `--color-border`.
- Left: logo mark + wordmark. Center: 4–5 text links (e.g. Platform, Use Cases, Pricing, Resources). Right: "Login" as plain text link + primary button ("Get Started") in `--color-brand-500`.
- Height ~72px, links in `--text-small` / `--color-ink-600`, active/hover state switches to `--color-ink-900`.

### 5.2 Hero
- Full-width gradient panel (see §2), `--radius-lg` corners, sits inset within the page with white margin around it — not edge-to-edge.
- Small pill label above headline ("AI Assistant" style eyebrow) — white/translucent background, icon + text.
- Headline in white, `--text-hero`, centered, max 2 lines.
- Subtext below in translucent white (`rgba(255,255,255,0.75)`), `--text-body`, max ~60 characters per line, centered.
- Two CTAs side by side: one solid white button with dark text (secondary action, e.g. "Book demo") + one button with white border/translucent fill (primary action, e.g. "Get started"). On alternate hero treatments, swap to one solid `--color-brand-500` button ("Get Started") + one white-bordered ghost button ("Watch video").
- Below the fold of the hero panel: a product screenshot/dashboard mockup card, slightly overlapping the bottom edge of the gradient panel to bridge into the white section below.

### 5.3 Buttons
| Variant | Background | Text | Border |
| --- | --- | --- | --- |
| Primary | `--color-brand-500` | White | none |
| Secondary (on white) | White | `--color-ink-900` | 1px `--color-border` |
| Ghost (on gradient) | transparent | White | 1px `rgba(255,255,255,0.4)` |
| On dark hero (solid) | White | `--color-brand-900` | none |

All buttons: `--radius-sm`, 14–16px horizontal padding × 10–12px vertical, medium weight text, no uppercase, no icon unless it clarifies action (e.g. arrow on a "watch video" button).

### 5.4 Feature Block (icon + heading + description)
- Small square badge icon (24px, `--color-brand-500` icon on light blue `--color-brand-300`-at-10%-opacity background, `--radius-sm`).
- Bold heading directly beneath (`--text-h3`, `--color-ink-900`).
- One-sentence description beneath in `--color-ink-600`, `--text-body`.
- Repeats in a 2-column grid; used for both marketing feature lists and in-product capability call-outs.

### 5.5 Product / Chat Mockup Cards
- White card, `--radius-md`, `--shadow-card`, `--border-card`.
- Chat-style card: shows one user query, one AI response in a lightly shaded sub-panel, 1–2 pill-shaped quick-action buttons beneath (light gray bg, `--radius-sm`, small text), and a small "Powered by [Product]" footer row with a compact confirm button.
- Dashboard-style card: left icon-nav rail (compact, icon + label per row, one item highlighted in light blue as "active"), main area with 2–4 stat sub-cards (label, big number, small trend indicator in `--color-success` or `--color-brand-500`), and one card containing a small bar/line chart in brand blue.
- These mockup cards are the primary visual proof of the product — treat them as hero-adjacent content, not decoration; keep real (or realistic) data in them, not lorem ipsum.

### 5.6 Logo Strip ("Trusted by")
- Row of 4–6 partner/customer logos, grayscale/desaturated, muted opacity (~50%), evenly spaced, no borders or cards around them. Sits directly under the hero or above the footer.

### 5.7 Dark Stats Band
- Full-width section on `--color-dark-panel`, white text.
- 2–3 large numbers (`--text-stat`, bold, white) each with a one-line label beneath in `rgba(255,255,255,0.6)`.
- Optional: one stat rendered inside its own rounded card with a solid `--color-brand-500` background for emphasis (visual variety within the band).

### 5.8 Testimonial Block
- Large pull-quote text (`--text-h2` weight, `--color-ink-900`), left-aligned, no quotation marks glyph — let type size signal it's a quote.
- Below: circular headshot (40px) + name (bold) + role/company (`--color-ink-600`, small).
- Small partner logo placed near the quote (top-left "eyebrow" position), grayscale.

### 5.9 Pricing (for this site's Pricing page — not in the reference screenshot, but follows the same system)
- 3-column card grid, all white cards, `--shadow-card`.
- The recommended/featured plan gets a `--color-brand-500` border (2px) and a small "Most popular" pill badge — everything else about the card stays identical to the others so it doesn't feel like a different template.
- Price in `--text-h1` weight, billing toggle (Monthly/Annual) as a pill switch above the grid using `--color-brand-500` for the active state.

---

## 6. Motion

- Page load: hero content (eyebrow → headline → subtext → CTAs) fades/slides up in a quick staggered sequence (~60ms stagger, 300ms ease-out each). One orchestrated moment, not scattered.
- Scroll: feature blocks and mockup cards fade+rise into place on scroll-into-view, 8–12px translate, no bounce.
- Hover: buttons darken by ~8% and lift with the shadow token going from `--shadow-card` to a slightly larger blur; cards get a subtle `--shadow-card` → deeper shadow transition, no scale change (scale reads as "AI-generated template" — avoid it).
- Respect `prefers-reduced-motion`: disable translate/stagger, keep opacity fades only.

---

## 7. Accessibility & Responsive Floor

- Body text never below `--color-ink-600` on white (meets AA contrast).
- All interactive elements have a visible focus ring: 2px `--color-brand-500` offset 2px.
- Hero and dark-band white text on gradient/dark backgrounds must stay above 4.5:1 contrast — test the lightest point of the gradient behind body copy.
- Breakpoints: 1200px (desktop), 768px (tablet: 2-col → stacked feature grid), 480px (mobile: hero CTAs stack vertically, dashboard mockup cards scroll horizontally or simplify to a single stat card).

---

## 8. What NOT to do

- Don't add a second accent color "for variety" — the discipline of one blue is what makes this read as a real product, not a template.
- Don't make every section a card grid — alternate rhythm (gradient hero → logo strip → feature grid → dark stat band → mockup showcase → testimonial → pricing → footer) so the page has a shape, not a scroll of identical blocks.
- Don't use numbered markers (01/02/03) on the feature grid — these features aren't a sequence, so don't imply one.
- Don't round corners past `--radius-lg` anywhere — sharper radii read as "financial infrastructure," which matches this brand; softer/pill-everything reads as consumer app and undercuts it.
