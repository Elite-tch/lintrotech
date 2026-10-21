# Flarestudio — Brand & Flagship Website Execution Plan

> [!IMPORTANT]
> This is a **studio brand website** — it represents a digital company (or founder-led studio positioned as one).
> The goal is not "here is my CV on the web." The goal is: **"We are a studio. Here is who we are, what we build, what we offer, and what we have shipped."**
> A visitor should understand the company before they understand the individual behind it.

---

## 1. Brand Essence & Positioning

### The Company Concept
**[Brand Name]** is a technology, design, and creative studio that helps businesses, startups, and founders build digital products, establish visual identities, and execute on ideas that would otherwise stall without the right execution partner.

This is not a freelancer with a portfolio page. This is a studio — founder-led today, team-ready as it grows — operating as a complete creative and engineering partner.

### What the Brand Must Communicate
1. **Who we are:** A legitimate, professional digital studio with real expertise.
2. **What we do:** The specific services the studio delivers and for whom.
3. **How we work:** The approach, process, and principles that define the studio.
4. **What we have shipped:** A curated body of work that demonstrates capability.
5. **How to engage us:** A direct, frictionless path to a conversation or collaboration.

---

## 2. Website Content Architecture

The site is **multi-page** but tightly structured. The landing page is a sharp, confident studio introduction — it highlights, teases, and converts. Dedicated inner pages go deep where needed without cluttering the first impression.

## Site Map

```
/                  → Landing (Home)
/work              → Full Portfolio & Case Studies
/services          → (Optional) Expanded service detail pages
/about             → Studio story and principals
/contact           → Dedicated contact + inquiry page
```

> [!NOTE]
> Navigation is always available across all pages. The landing page does NOT try to do everything — it highlights, previews, and routes the visitor to where they need to go.

---

## Page-by-Page Content Architecture

### PAGE 1: HOME (Landing)

**Purpose:** Immediate studio identity, service highlights, work preview, and direct path to contact.
**Sections on this page:**

---

### [A] BRAND IDENTITY HEADER / NAVIGATION
* Studio name + wordmark logo (left)
* Navigation items: `About` · `Services` · `Work` · `Contact`
* Live status pill (right, monospace): `● Available for Projects`

---

### [B] HERO — "Who We Are" Statement
**Purpose:** Establish identity immediately. This is not about the founder, it is about what the studio does and for whom.

**Headline:** Editorial serif + accent orange on a key word/phrase.
> Example:
> *"We build software, design products,*
> *and shape the brands that **move businesses forward**."*

**Sub-copy (2–3 lines max):**
> A brief, plain-language statement describing:
> — What kinds of problems the studio solves.
> — Who the typical client is (startups, founders, businesses).
> — The studio's combined technical and creative range.

**Hero CTAs:**
* `[See Our Work]` → smooth-scrolls to Work section
* `[Work With Us]` → opens quick contact/inquiry modal

**Hero Visual (Right Panel):**
* Floating interactive bento dock showing:
  * Live project preview card
  * Floating capability micro-badges: `React`, `Next.js`, `Figma`, `Motion`, `Brand Identity`
  * Studio metrics: *"12+ Projects Shipped / 3 Product Launches / 4 Industries"*

---

### [C] WHAT WE DO — Services Overview
**Purpose:** Clearly communicate the studio's complete service offering.
Not a wall of text. Four (or five) clean pillar cards in a horizontal strip.

| Pillar | Title | Description |
| :--- | :--- | :--- |
| `01` | **Software Engineering** | Web applications, MVPs, custom platforms, and API-integrated systems built to production standards. |
| `02` | **Product & UI/UX Design** | User experience research, interface design, wireframes, and design systems that make products usable and beautiful. |
| `03` | **Brand & Visual Identity** | Logo systems, brand color and typography, graphic design, and identity guides that make businesses look credible. |
| `04` | **Creative & Motion** | Promotional content, motion graphics, product videos, and social-ready creative assets. |
| `05` | **Technical Consultation** | Architecture reviews, product strategy, technical roadmaps, and advisory for founders who need a senior engineering perspective. |

**Each service card has:**
* Icon or abstract visual
* Title + one-line descriptor
* A `→ Learn More` trigger that expands a lightweight drawer/modal with: full description, typical deliverables, ideal client profile, and engagement format.

---

### [D] HOW WE WORK — Studio Approach
**Purpose:** Build trust by explaining the studio's working method. This is what separates a credible studio from a freelancer marketplace.

Short, editorial-formatted section (not a numbered list, reads like a brief manifesto):

> **"We start with the problem, not the deliverable."**
> Every engagement begins with understanding the business goal. From there, the right combination of engineering, design, and creative production is applied — not as separate workstreams, but as one coordinated effort.

Three principles, cleanly typeset:
1. **Full-cycle execution** — From concept to shipped product.
2. **Coordinated delivery** — Engineering and design working from the same brief.
3. **Quality that communicates** — Every output should represent the client as well as the studio.

---

### [E] WORK PREVIEW (on Landing Page)
**Purpose:** Tease the portfolio — show 2–3 of the strongest projects. Each card has a `View All Work →` link that routes to `/work`.
**Layout:** 2–3 featured project cards displayed in a bento grid.

**Each preview card shows:**
* Category tag (e.g., `WEB APP` · `BRAND IDENTITY` · `MVP`)
* Project title / descriptor (e.g., *"FinTech Startup — Lagos"*)
* Visual thumbnail or short looping preview
* 2–3 tech/tool tags
* `View Case Study →` link (routes to that project's entry on `/work`)

**Bottom of section:** `View All Work →` CTA routes to the full `/work` page.

---

### PAGE 2: /work — Full Portfolio & Case Studies

**Purpose:** The full, filterable body of studio work. This is where depth lives — full case studies, client context, approach, deliverables, and outcomes.

#### Tab / Filter System
At the top of the `/work` page, a horizontal tab bar filters projects by category:

```
[ All ]  [ Software Engineering ]  [ UI/UX Design ]  [ Brand & Identity ]  [ Motion & Creative ]
```

* Clicking a tab filters the grid to show only projects in that category.
* Selected tab uses the brand's orange accent (`#FF5B22`) underline or pill.
* Smooth animated transition between filtered states (no page reload).

#### Project Grid
* Masonry or even 2-column card grid with variable card heights based on content.
* Each card: thumbnail/cover, category tag, title, one-line summary, tech tags.

#### Individual Case Study (Modal or Expanded Row)
Clicking a project card expands a sheet/modal (stays on `/work`, no separate URL needed for MVP):

| Field | Content |
| :--- | :--- |
| **The Brief** | What was the client's problem or goal? |
| **The Work** | What did the studio build or design? |
| **The Approach** | Key decisions, methods, and reasoning used. |
| **Deliverables** | List of what was actually delivered. |
| **Outcome** | Result, impact, or measurable win (if shareable). |
| **Stack / Tools** | Technologies, design tools, platforms used. |

> [!NOTE]
> Early-phase work can include personal projects, concept builds, and clearly labeled exploratory pieces — presented with the same case study format. The rigour of the format builds credibility independently of the client name.

---

### PAGE 3: /about — Studio Story
**Purpose:** The brand's story, origin, principals, and operating philosophy.

* Editorial headline and studio origin paragraph.
* Founder credential summary (disciplines, not a resume).
* Studio operating principles.
* Future section placeholder: *"The Team / Collaborators"*

---

### PAGE 4: /contact — Direct Engagement
**Purpose:** Frictionless path to starting a conversation.

* Bold CTA: *"Let's build something worth shipping."*
* Studio availability statement.
* Inquiry form: `Name` · `Email` · `What are you looking to build?` + `[Send Enquiry]`
* Direct email link + LinkedIn / GitHub.
* Optional: `[Book a 30-min Call]` Calendly link.

> [!NOTE]
> The Contact page is also reachable from a persistent CTA in the navigation on every page.

---

### [F] STUDIO / ABOUT SECTION
**Purpose:** Give the brand a human face and a story without making it feel like a personal CV.

**Approach:** Position the founder as the studio's principal, not the center of attention.

Content:
* One sharp editorial line: *"A founder-led studio with enterprise-grade thinking."*
* 2–3 sentences on origin: why the studio was built and what problem it was started to solve.
* Founder credential summary (without being a resume): disciplines, experience, and domain confidence.
* Studio principles: 3–4 bullets on how the studio operates (quality bar, communication standards, ownership of outcomes).
* *Optional future section: "The Team / Collaborators"* — as the network of specialists grows.

---

### [G] CONTACT & ENGAGEMENT
**Purpose:** Make it frictionless to start a conversation.

**Layout:** Clean split or full-width closing section.

**Left side:**
* Bold CTA headline: *"Let's build something worth shipping."*
* Short statement on what kinds of engagements the studio is currently open to.
* Email address (clickable `mailto:`)
* LinkedIn / GitHub / Other professional link

**Right side:**
* Simple inquiry form: `Name` · `Email` · `What are you looking to build?` · `[Send Enquiry]`
* Optional: Calendly embed or `[Book a 30-minute call]` link

---

## 3. Visual Identity & Color System (from mellow.io Reference)

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Canvas** | `#FBF8F3` | Warm organic cream background |
| **Primary Accent** | `#FF5B22` | CTAs, highlighted words, active states |
| **Accent Hover** | `#E64B14` | Button hover, pressed states |
| **Heading Ink** | `#171717` | Bold headlines and display text |
| **Body Text** | `#52525B` | Readable descriptions and paragraphs |
| **Card Surface** | `#FFFFFF` | Floating bento cards |
| **Muted Tag/Pill** | `#EFECE6` | Secondary buttons, category tags |
| **Border** | `#E7E2D8` | Hairline borders on cards and dividers |

---

## 4. Typography Stack

| Role | Font | Source |
| :--- | :--- | :--- |
| **Display / Hero Headlines** | Instrument Serif (with italic weight for accent phrases) | Google Fonts |
| **UI / Body / Navigation** | Plus Jakarta Sans (400, 500, 600, 700) | Google Fonts |
| **Mono / Tech Accents** | JetBrains Mono | Google Fonts |

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

**Type Scale:**
* Hero H1: `Instrument Serif` 64–80px / tight leading
* Accent italic phrase: `Instrument Serif Italic` in `#FF5B22`
* Section H2: `Plus Jakarta Sans 700` 36–48px
* Body: `Plus Jakarta Sans 400` 16–18px / relaxed leading
* Labels / Monospace: `JetBrains Mono 500` 11–13px / uppercase + letter-spacing

---

## 5. Motion & Micro-Interaction Strategy

The website is the studio's first delivered product. It must demonstrate motion craft and engineering precision.

1. **Page Load Choreography:** Staggered fade-up with spring physics (entrance sequence across hero elements).
2. **Hero Visual Dock:** Floating cards animate in subtly with parallax offset on scroll.
3. **Magnetic CTA Buttons:** Primary orange buttons track the cursor within a bounded magnetic radius.
4. **Service Card Hover:** Smooth reveal of secondary descriptor text + subtle background color shift.
5. **Work Card Expand:** Project modal opens with a smooth scale-up + overlay blur on the background (no hard page navigations).
6. **Live Status Pill:** Slow pulse animation on the availability indicator.
7. **Scroll-Triggered Count-Up:** Studio metrics animate as they enter the viewport.

---

## 6. Brand Names (Shortlist)

| Option | Rationale |
| :--- | :--- |
| **Vectra Studio** | Geometric, precise, engineering-forward |
| **Kinetiq** | Movement, velocity, rapid delivery |
| **Sintax Studio** | Code + craft, immediately legible |
| **Forme Studio** | Architecture, shape, design-first |
| **Afra Digital** | Subtle cultural grounding, international-ready |

---

## 7. Implementation Roadmap

### Phase 1 — Foundation
- [ ] **Step 1:** Finalize brand name and create wordmark / logo lockup.
- [ ] **Step 2:** Configure `globals.css` — CSS custom properties, font imports, typography scale, and color system.
- [ ] **Step 3:** Set up Next.js App Router pages: `/`, `/work`, `/about`, `/contact`.
- [ ] **Step 4:** Build the shared layout: navigation bar + footer across all pages.

### Phase 2 — Landing Page (`/`)
- [ ] **Step 5:** Hero section — editorial headline, CTA buttons, hero visual dock with floating badges.
- [ ] **Step 6:** Services strip — 5 pillar cards with expand drawer modals per service.
- [ ] **Step 7:** Work preview section — 2–3 featured project bento cards + `View All Work →` link.
- [ ] **Step 8:** How We Work editorial strip.
- [ ] **Step 9:** Landing page contact teaser / CTA block.

### Phase 3 — Work Page (`/work`)
- [ ] **Step 10:** Tab filter bar with animated category switching.
- [ ] **Step 11:** Project card grid with all case studies.
- [ ] **Step 12:** Case study expand modal/sheet with full brief → approach → outcome layout.

### Phase 4 — About & Contact Pages
- [ ] **Step 13:** `/about` — Studio story, founder dossier, principles section.
- [ ] **Step 14:** `/contact` — Inquiry form, direct links, booking trigger.

### Phase 5 — Polish
- [ ] **Step 15:** Layer all micro-interactions and motion choreography.
- [ ] **Step 16:** Mobile responsiveness pass across all pages.
- [ ] **Step 17:** SEO meta tags, OG image, and favicon on all routes.
- [ ] **Step 18:** Performance audit and deployment.
