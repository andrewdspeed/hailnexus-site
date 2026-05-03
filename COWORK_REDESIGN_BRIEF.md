# Hail Nexus Landing Page Redesign — Cowork Handoff

## Strategic Context

**Hail Nexus is no longer a PDR (paintless dent repair) company.** We've pivoted to a **software company** with two core products:

1. **`map.hailnexus.com`** — A real-time hail damage intelligence & claim management platform (the CRM). This is the primary revenue driver and the hero product.
2. **`app.hailnexus.com`** — The authenticated CRM dashboard where customers manage claims, track repairs, and collaborate with insurers.

The landing site (`hailnexus.com`) exists to **funnel users to the map** — sell the software as the solution to hail damage in the PDR supply chain, not to sell PDR services directly.

## What to Delete

- All PDR estimating form copy, sections, and CTAs (they're misleading now)
- Service cards / "Paintless Dent Repair" / insurance claim handling narrative (old business model)
- Testimonials from PDR customers
- "Free Estimate" form and all its related sections
- Phone/email contact info (we're a B2B software play now, not a field services business)
- Anything that positions Hail Nexus as a service provider

## Site Architecture

Keep the static HTML + CSS + JS stack (`assets/css/style.css`, `assets/js/main.js`). The `vercel.json` already ships a clean production config.

### Page Sections (in order)

1. **Navbar** — Logo + nav links + single primary CTA button (→ "View the Map" or "Start Free Trial")
2. **Hero** — Headline that sells the *problem* (hail damage chaos) and the *solution* (real-time damage intelligence). Feature the map as the visual hero. No form, no contact info — just a strong "Get Started" button.
3. **Problem/Solution** — 2–3 sections explaining why the hail industry needs software (manual processes, slow claims, poor visibility). Use Dark Command Center aesthetic: glowing accent cards, grid overlays, cinematic scroll reveals.
4. **Map Spotlight** — Showcase the live hail map (`map.hailnexus.com`) as the central product. Show sample map interface, real-time alerts, claim intelligence. This is your hero feature.
5. **Platform Features** — Core CRM capabilities: claim management, real-time collaboration, automated workflows, damage intelligence, reporting. 3–4 cards with glowing borders.
6. **Use Cases** — Who benefits: insurance adjusters, PDR shops, claims managers, vehicle owners. Keep it concise.
7. **Stats/Social Proof** — Real numbers: claims processed, users on platform, states covered, partner networks (if applicable).
8. **CTA Section** — Single, bold call-to-action: "Start your free trial" or "Schedule a demo" → links to `app.hailnexus.com/signup` or a booking page.
9. **Footer** — Links to app, map, legal docs (privacy, ToS), social media (if you have them).

## Visual Direction: Dark Command Center

**Per `ideas.md` Idea 1** — this is the *approved* design direction. Implement all of it.

### Color Palette
- **Primary dark:** `#0a1628` (deep navy, page background)
- **Signal cyan:** `#00d4ff` (accent for glowing borders, highlights, hover states)
- **Call-to-action orange:** `#ff6b35` (primary buttons, urgency)
- **Text white:** `#f0f4f8` (body copy on dark)
- **Secondary text:** `rgba(240, 244, 248, 0.6)` (subheadings, muted copy)

### Typography
- **Headings:** Space Grotesk (bold, geometric, techy) — source from Google Fonts
- **Body:** Inter (clean, readable) — source from Google Fonts
- **Accents:** IBM Plex Mono or similar monospace for stats, data points, code-like labels

### Signature Design Elements
1. **Glowing circuit-trace lines** — SVG paths or CSS borders that connect sections, echoing the node-network logo
2. **Subtle grid overlay** — Faint `background-image: linear-gradient(...)` or radial gradient on dark sections, like a radar or blueprint
3. **Floating glass-morphic cards** — Cards with `backdrop-filter: blur(...)`, thin glowing `border: 1px solid rgba(0, 212, 255, 0.3)`, slight `box-shadow` with cyan tint
4. **Parallax scroll reveals** — Sections fade in and slide up on scroll entry
5. **Pulsing/glowing CTAs** — Buttons pulse on hover, have a ripple effect, glow with the accent color

### Interaction Philosophy
- **Activations feel like powering on systems.** Buttons pulse. Cards lift and glow on hover.
- **Scroll reveals feel like deploying each section.** Staggered animation entry, not all-at-once.
- **Data/stats count up** when they enter the viewport (use a simple JavaScript counter or library like CountUp.js).
- **All transitions are smooth and intentional** — no jarring jumps. Easing functions (ease-out-cubic for most animations).

## Technical Guardrails

1. **Keep it static HTML + CSS + vanilla JS.** No React, no build step (Vercel deploys `index.html` directly).
2. **Icon strategy:** Use Lucide React icons as SVGs (embed inline) or a lightweight SVG icon set. Avoid emoji for professional polish.
3. **Image assets:**
   - **Logo:** Keep `assets/images/logo.png` (already exists).
   - **Map screenshot/mockup:** Add a hero image of the live hail map interface to `assets/images/` (this needs to be a screenshot or design mockup of what `map.hailnexus.com` looks like). If you don't have one, use a placeholder showing the map region with overlay UI hints.
4. **Google Fonts:** Add `<link>` tags in `<head>` for Space Grotesk + Inter.
5. **Scroll animations:** Use the existing `IntersectionObserver` pattern in `assets/js/main.js` (the `fade-in` class infrastructure is already there — extend it).
6. **Form elimination:** Delete the entire `#contact` section, the estimate form, all form styles/scripts. Replace with a simple "Get Started" CTA that links to your app signup or booking page.

## Copy Direction

All copy should reinforce: **"We're a software platform that solves the hail damage problem with intelligence, speed, and collaboration."**

- **Headline:** Something like "Real-Time Hail Intelligence. All-In-One Claims Platform." or "Know Your Damage Before the Adjuster Arrives."
- **Subheading:** Pitch the speed/visibility/collaboration angle: "The hail industry's first platform to unify damage intelligence, claim workflows, and stakeholder collaboration."
- **Section copy:** Focus on *problems the old way solves* and *how the platform fixes them* — not PDR as a service, but **visibility and control** in a broken industry process.

## URLs & Routing

- Primary CTA buttons link to: **`https://app.hailnexus.com/signup`** or **`https://map.hailnexus.com`** (user decision which one is primary).
- Footer links to the app and map.
- No internal form routing (`/estimate`, etc.) — those routes are deleted.

## What's Already Done

- ✅ **`vercel.json`** — Static site config, cleaned up (no builds array, just headers + rewrites).
- ✅ **`index.html` structure** — The DOM is clean; just needs sections reordered/rewritten.
- ✅ **`assets/css/style.css`** — Use as a base; rewrite the palette, typography, and card styles for Dark Command Center.
- ✅ **`assets/js/main.js`** — Keep the scroll-fade-in logic; add stat counters, glow effects on hover.

## Deployment & Testing

1. **Local:** Open `index.html` in a browser to verify structure and styles (no build step needed).
2. **Staging:** Push to this branch and check the Vercel preview URL for live rendering + mobile responsiveness.
3. **Production:** Merge to `main`; Vercel auto-deploys. The domain alias (if pointing to this repo) will serve the redesigned site immediately.

## User Action Required (Post-Merge)

After Cowork merges the redesign and Vercel deploys to `hailnexus.com`, you'll need to:

1. **Verify the live site** looks and performs as intended.
2. **Check the Vercel domain alias** — confirm `hailnexus.com` is aliased to the `hailnexus-site` project (not a stale Manus project). If it's not, ask me to help via the screenshot method.
3. **Update app signup/booking URLs** — ensure your buttons link to real signup/booking pages (not yet built; coordinate with Cowork).
4. **DNS for `map.hailnexus.com`** — if not already done, set CNAME to Vercel (this was in the CRM PR notes).

---

**Questions for Cowork:** If unclear on any section above, DM Andrew or ask in the project Slack. This is a complete brief; no guessing needed.
