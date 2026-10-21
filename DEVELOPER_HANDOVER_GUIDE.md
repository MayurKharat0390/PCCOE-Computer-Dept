# PCCOE Department of Computer Engineering
## Senior Developer Handover & Element Architecture Guide

This comprehensive reference document catalogs every semantic section, structural container, HTML element, heading level, and CSS class in the codebase. Any developer or maintainer receiving this project can locate any component immediately and modify it safely.

---

### Project File Structure

```text
├── index.html                   # Main semantic HTML5 document
├── DEVELOPER_HANDOVER_GUIDE.md  # Handover reference documentation (this file)
└── assets/
    ├── css/
    │   └── style.css            # Complete design system tokens & component styles
    └── js/
        └── main.js              # Slider, counters, modal, and accessibility controllers
```

---

### Global Design System & Color Tokens (`assets/css/style.css`)

All colors, shadows, and fonts are centralized in `:root` at the top of [`assets/css/style.css`](file:///c:/Users/YUVRAJ/Mayur%20Kharat/assets/css/style.css#L7-L55). Modifying these variables updates the entire website instantly:

| CSS Variable | Default Value | Role / Usage |
| :--- | :--- | :--- |
| `--pccoe-navy-darkest` | `#073860` | Rich deep ocean blue for top strip, active nav, and footer base. |
| `--pccoe-navy` | `#035a91` | Authentic emblem outer ring cerulean blue (headings, navbar, card headers). |
| `--pccoe-navy-royal` | `#0277bd` | Vivid ocean blue for gradient transitions and sidebar headers. |
| `--pccoe-navy-mid` | `#0284c7` | Signature PCCOE emblem sky cerulean blue (central disc tone, buttons, icons). |
| `--pccoe-navy-subtle` | `#e0f2fe` | Luminous sky ice tint for badges and accent containers. |
| `--pccoe-navy-wash` | `#f0f8ff` | Soft cerulean canvas background tone. |
| `--pccoe-gold-primary` | `#f59e0b` | Radiant warm golden amber (torch flame highlight). |
| `--pccoe-gold-bright` | `#fbbf24` | Luminous sunburst yellow (torch flame and star ratings). |
| `--pccoe-gold-warm` | `#ea580c` | Flame crimson-orange for energetic accents. |
| `--pccoe-gold-dark` | `#b45309` | High-contrast accessible burnished amber for trust titles. |
| `--pccoe-gold-soft` | `#fffbeb` | Warm golden cream background tint for notice tags and active cards. |
| `--pccoe-gold-gradient`| `linear-gradient(...)`| Primary golden button and badge fill. |
| `--font-sans` | `'Plus Jakarta Sans', ...` | Default body font for high readability. |
| `--font-display` | `'Outfit', ...` | Display font for prestigious headings and brand titles. |

---

### Comprehensive Element & Class Directory

```
========================================================================================
SECTION 1: TOP UTILITY STRIP (Ultra-Slim 32px Bar)
File: index.html (Lines 76–126) | CSS: style.css (.top-strip)
========================================================================================
```
* **Container**: `<header class="top-strip">`
  * `.container` $\to$ Standard 1380px max-width wrapper
  * `.top-strip-inner` $\to$ Flexbox single-row container (`height: 32px; flex-wrap: nowrap;`)
* **Left Sub-Unit**: `.top-contact-info`
  * `.top-contact-item` $\to$ Direct telephone link (`<a href="tel:+918087174347">`)
  * `.top-contact-item` $\to$ Direct email link (`<a href="mailto:pccoeadmin@gmail.com">`)
  * `.strip-divider` $\to$ Subtle vertical divider (`|`)
  * `.top-social-group` $\to$ Container for social links
  * `.top-social-link` $\to$ Icon links for Facebook, LinkedIn, X, Instagram, YouTube
* **Right Sub-Unit**: `.top-links`
  * `.top-enquiry-link` $\to$ Inline gold badge (`<i class="fa-solid fa-bolt"></i> Admission Enquiry`)
  * `.top-nav-link` $\to$ Direct institutional links (`International Admissions`, `NIRF`, `AICTE`)
  * `.access-tools` $\to$ Accessibility button group container
  * `.access-btn#fontDecrease` $\to$ Decrease base font button (`A-`)
  * `.access-btn#fontReset` $\to$ Reset base font button (`A`)
  * `.access-btn#fontIncrease` $\to$ Increase base font button (`A+`)
  * `.access-btn#contrastToggle` $\to$ High contrast toggle button (`<i class="fa-solid fa-circle-half-stroke"></i>`)

```
========================================================================================
SECTION 2: BRAND IDENTITY HEADER (Institutional Logo & Title)
File: index.html (Lines 131–190) | CSS: style.css (.brand-header)
========================================================================================
```
* **Container**: `<section class="brand-header">`
  * `.brand-header-grid` $\to$ 3-column CSS grid (`105px 1fr 105px`)
* **Left Column**: `.brand-logo-left`
  * `.logo-link` $\to$ College portal home link
  * `.main-logo-img` $\to$ PCCOE Official Crest (`assets/images/PCCoE-LOGO/pccoe-logo.webp`)
* **Center Column**: `.brand-text-center`
  * `<div class="trust-title">` $\to$ Parent trust name (`PIMPRI CHINCHWAD EDUCATION TRUST'S (PCET)`)
  * `<h1 class="college-name">` $\to$ **PRIMARY H1 HEADING**: `PIMPRI CHINCHWAD COLLEGE OF ENGINEERING`
  * `<div class="dept-title-text">` $\to$ Subtitle: `DEPARTMENT OF COMPUTER ENGINEERING`
  * `.accreditation-ribbon` $\to$ Single-row horizontal accreditation strip
    * `.accreditation-item` $\to$ Accreditation label (*NBA Tier-1 Accredited, NAAC 'A' Grade, Autonomous, AICTE Approved, SPPU Affiliated*)
    * `.accreditation-sep` $\to$ Bullet separator (`•`)
* **Right Column**: `.brand-logo-right`
  * `.trust-logo-img` $\to$ PCET Trust Emblem (`assets/images/PCCoE-LOGO/pcet-trust-logo.webp`)

```
========================================================================================
SECTION 3: PRIMARY STICKY NAVIGATION BAR
File: index.html (Lines 195–359) | CSS: style.css (.site-navigation)
========================================================================================
```
* **Container**: `<nav class="site-navigation">` (Sticky top with glassmorphic elevation)
  * `.nav-container` $\to$ Flexbox navigation bar wrapper (`height: 50px`)
  * `.nav-links-wrapper` $\to$ Primary menu drawer (`.nav-links-wrapper.open` on mobile)
* **Menu Items**: `.nav-list`
  * `.nav-item` $\to$ Individual menu list item (`li`)
    * `.nav-item.active` $\to$ Currently active page indicator
  * `.nav-link-btn` $\to$ Primary menu link (`a`)
  * `.dropdown-chevron` $\to$ Submenu indicator icon (`<i class="fa-solid fa-chevron-down">`)
  * `.nav-dropdown` $\to$ Absolute-positioned mega/hover dropdown list (`ul`)
  * `.dropdown-item-link` $\to$ Nested dropdown anchor (`a.dropdown-item-link`)
    * *Dropdown sections*: **About us**, **People**, **Academics**, **Research**, **Student Corner**, **Industry Interaction**, **SDW**, **FDW**, **Achievements**, **Contact**
* **Right Quick Actions**: `.nav-actions`
  * `.nav-search-btn.trigger-search-modal` $\to$ Global search trigger button (`Ctrl + K`)
  * `.nav-cta-apply` $\to$ Single-line gold gradient button (`Apply Now`)
  * `.mobile-menu-toggle` $\to$ Mobile hamburger toggle button (`<i class="fa-solid fa-bars">`)

```
========================================================================================
SECTION 4: SPOTLIGHT BREAKING UPDATES TICKER
File: index.html (Lines 364–418) | CSS: style.css (.spotlight-container)
========================================================================================
```
* **Container**: `<div class="spotlight-container">`
  * `.spotlight-wrapper` $\to$ White bordered container with gold left bar
  * `.spotlight-badge` $\to$ Golden tag badge (`<i class="fa-solid fa-bullhorn"></i> SPOTLIGHT`)
  * `.spotlight-ticker-viewport` $\to$ Masked overflow viewport
  * `.spotlight-marquee` $\to$ Infinitely looping CSS marquee strip (`@keyframes ticker-slide`)
  * `.ticker-item` $\to$ Individual ticker announcement block
    * `.ticker-tag` $\to$ Category tag (*Symposium, Award, Hackathon, Admissions*)
    * `<a href="...">` $\to$ Link with bold title and arrow indicator

```
========================================================================================
SECTION 5: BROAD INSTITUTIONAL SHOWCASE SLIDER
File: index.html (Lines 423–468) | CSS: style.css (.broad-hero-section)
========================================================================================
```
* **Container**: `<section class="broad-hero-section">`
  * `.broad-slider-container` $\to$ Edge-to-edge full viewport-width banner frame with subtle top/bottom borders
* **Slider Stage**: `.hero-slider` $\to$ Proportional container (`aspect-ratio: 16 / 5` matching 1600x500 banner artwork)
  * `.slide-item` $\to$ Slide layer with crossfade transition (`opacity: 0; transition: opacity 0.7s;`)
  * `.slide-item.active` $\to$ Active visible slide (`opacity: 1;`)
  * `.broad-slide-img` $\to$ Full banner image (`object-fit: cover; object-position: center;`)
    * *Banner 1*: Faculty Team (`computer-department-faculty-photo.webp`)
    * *Banner 2*: Big Zero Tech MoU (`pccoe-signs-mou-big-zero-tech-llp.webp`)
    * *Banner 3*: Dr. Ashutosh Kotwal Global Lecture (`dr-ashutosh-kotwal-expert-talk.webp`)
    * *Banner 4*: Algix Technology Patent Achievement (`algix-technology-patent-achievement.webp`)
    * *Banner 5*: Shivam Rai Placement Record (`shivam-rai-placement.webp`)
* **Navigation Controls**:
  * `.slider-arrow-btn.prev` $\to$ Circular left arrow button (`<i class="fa-solid fa-chevron-left">`)
  * `.slider-arrow-btn.next` $\to$ Circular right arrow button (`<i class="fa-solid fa-chevron-right">`)
  * `.broad-slider-dots` $\to$ Center bottom glassmorphic pill containing dot indicators
  * `.indicator-dot` $\to$ Slide navigation dot (`button.indicator-dot`)
    * `.indicator-dot.active` $\to$ Expanded active gold indicator

```
========================================================================================
SECTION 6: KEY METRICS STATISTICS COUNTERS
File: index.html (Lines 473–509) | CSS: style.css (.metrics-section)
========================================================================================
```
* **Container**: `<section class="container metrics-section">`
  * `.metrics-grid` $\to$ 4-column responsive grid
* **Cards**: `.metric-card`
  * `.metric-icon-box` $\to$ Rounded icon container
  * `<div class="metric-number">` $\to$ Animated count-up element (Attributes: `data-target="2001"`, `data-prefix="₹"`, `data-suffix=" LPA"`)
  * `<div class="metric-label">` $\to$ Descriptive label (*Year of Establishment, Annual Intake, Highest CTC, Patents Filed*)

```
========================================================================================
SECTION 7: MAIN PORTAL 2-COLUMN GRID (Sidebar + Main Content)
File: index.html (Lines 514–968) | CSS: style.css (.main-layout-grid)
========================================================================================
```
* **Grid Wrapper**: `<div class="container main-layout-grid">` (`grid-template-columns: 310px 1fr; gap: 2rem;`)

#### 7A. Left Sidebar (`aside.sidebar-wrapper`)
1. **Quick Navigation Card**: `.sidebar-card`
   * `.sidebar-header` $\to$ Sapphire blue title bar (`<i class="fa-solid fa-compass"></i> Department Portal`)
   * `.sidebar-nav-list` $\to$ Vertical navigation links list
   * `.sidebar-nav-item` $\to$ Individual nav item (`li`) with right arrow
2. **Virtual Campus Tour Video Card**: `.sidebar-card`
   * `.sidebar-header.accent` $\to$ Header with amber highlight
   * `.video-card-body` $\to$ Card padding wrapper
   * `.video-player-container` $\to$ 16:9 responsive YouTube iframe container
   * `<h4 class="video-meta-title">` $\to$ `PCCOE Akurdi Campus Tour`
   * `<p class="video-meta-subtitle">` $\to$ Caption text
3. **Notice Board Feed**: `.sidebar-card`
   * `.sidebar-header` $\to$ `<i class="fa-solid fa-bell"></i> Notice Board`
   * `.notice-feed` $\to$ Vertical feed list
   * `.notice-item` $\to$ Single notice row
   * `.notice-date` $\to$ Small timestamp / category badge
   * `.notice-link` $\to$ Anchor text for the announcement
4. **Department Helpdesk Box**: `.sidebar-card`
   * Header: `<i class="fa-solid fa-headset"></i> Department Helpdesk`
   * Phone extension, queries email, and link button (`.glance-btn`)

#### 7B. Right Main Stream (`main.main-content-stream`)
1. **About Department Section**: `<section class="content-block-card#about">`
   * `.block-header` $\to$ Title bar with border
   * `<h3 class="block-header-title">` $\to$ `About Computer Engineering Department`
   * `<span class="block-badge">` $\to$ `Since 2001`
   * `<p class="about-dept-intro">` $\to$ Academic overview text
   * `.about-pillars-row` $\to$ 3-column micro-pillar cards
   * `.pillar-mini-card` $\to$ Icon, `<h5>` title, and description
2. **Department at a Glance**: `<section class="content-block-card">`
   * `<h3 class="block-header-title">` $\to$ `Department at a Glance`
   * `.glance-grid` $\to$ 3-column feature cards
   * `.glance-card` $\to$ Card container
   * `.glance-media-box` $\to$ Top photo wrapper with `.glance-badge-tag`
   * `.glance-img` $\to$ Photo:
     * *Card 1*: HOD Dr. Sonali Patil (`mrs-sonali-patil.JPG`)
     * *Card 2*: PCCOE Crest (`latestlogopccoe.png`)
     * *Card 3*: Vision-Mission Emblem (`vision-mission-logo.PNG`)
   * `<h4 class="glance-title">` $\to$ Feature title
   * `<p class="glance-text">` $\to$ Description / quote
   * `<a class="glance-btn">` $\to$ Call-to-action button
3. **Overview & 4 Mission Pillars**: `<section class="content-block-card">`
   * `<h3 class="block-header-title">` $\to$ `Department Overview & Strategic Mission`
   * `.overview-details-grid` $\to$ 2-column split (Affiliations vs. Missions)
   * `.info-pane` $\to$ Left and right pane wrapper
   * `<h4 class="info-pane-title">` $\to$ Pane header
   * `.spec-list` $\to$ Bulleted specification list (`.spec-item`)
   * `.mission-pillar-list` $\to$ M1–M4 strategic pillars
   * `.mission-pillar-item` $\to$ Item box with `.mission-tag` (**M1, M2, M3, M4**)
4. **Academic Programs Grid**: `<section class="content-block-card">`
   * `<h3 class="block-header-title">` $\to$ `Academic Programs Offered`
   * `.programs-grid` $\to$ 3-column program comparison cards
   * `.program-card` $\to$ Degree card container
   * `.program-badge` $\to$ Category tag (*UG Program, PG Program, Doctoral*)
   * `<h4 class="program-title">` $\to$ Degree title (*B.Tech, M.Tech, Ph.D.*)
   * `.program-meta` $\to$ Duration & intake tags
   * `.program-features` $\to$ Bulleted checklist with checkmark icons
   * `.program-footer-link` $\to$ Full syllabus & admissions link
5. **Alumni & Student Testimonials**: `<section class="content-block-card">`
   * `<h3 class="block-header-title">` $\to$ `Voices of PCCoE Alumni & Students`
   * `.testimonials-wrapper` $\to$ Carousel wrapper
   * `.testimonial-track-container` $\to$ Overflow mask
   * `.testimonial-track` $\to$ Sliding track
   * `.testimonial-slide-page` $\to$ 3-card grid page
   * `.testimonial-modern-card` $\to$ Individual student quote card
   * `.testi-avatar-frame` $\to$ Circular avatar container
   * `.testi-avatar-img` $\to$ Alumni portrait image
   * `<h4 class="testi-author-name">` $\to$ Name of alumnus
   * `<div class="testi-author-role">` $\to$ Degree & year (e.g. *B.Tech Comp (2022)*)
   * `<div class="testi-company-tag">` $\to$ Employer badge (e.g. *Goldman Sachs, Microsoft, Veritas, Amazon*)
   * `<p class="testi-quote-text">` $\to$ Blockquote testimony
   * `.testimonial-carousel-dots` $\to$ Dots pagination
   * `.testi-bullet` $\to$ Slide switcher bullet button

```
========================================================================================
SECTION 8: MASTER INSTITUTIONAL FOOTER
File: index.html (Lines 972–1085) | CSS: style.css (.site-master-footer)
========================================================================================
```
* **Container**: `<footer class="site-master-footer">`
1. **Pre-Footer Action Banner**: `.footer-pre-strip`
   * `.footer-pre-inner` $\to$ Flexbox banner
   * `<h3 class="footer-pre-title">` $\to$ Call-to-action title
   * `.footer-pre-actions` $\to$ Button row:
     * `.btn-primary-glow` $\to$ Golden admission portal button
     * `.btn-secondary-glass` $\to$ Glassmorphic syllabus button
2. **Main 4-Column Footer**: `.footer-main-body`
   * `.footer-columns-grid` $\to$ 4-column responsive grid (`1.4fr 1fr 1fr 1.2fr`)
   * **Column 1**: `.footer-col` (Brand & Contact)
     * `.footer-brand-box` $\to$ Logo and department title
     * `.footer-contact-list` $\to$ Address, queries email, phone extension
     * `.visitor-counter-pill` $\to$ Live HitWebCounter image and badge
   * **Column 2**: `.footer-col` (Department Links)
     * `<h4 class="footer-col-title">` $\to$ `Department Links`
     * `.footer-nav-menu` $\to$ Vertical links with chevrons
   * **Column 3**: `.footer-col` (Affiliations & Statutory)
     * `<h4 class="footer-col-title">` $\to$ `Affiliations & Statutory`
     * `.footer-nav-menu` $\to$ SPPU, AICTE, NBA Docs, NIRF, FTO, PCET Trust links
   * **Column 4**: `.footer-col` (Campus Map & Socials)
     * `<h4 class="footer-col-title">` $\to$ `Campus Location`
     * `.footer-map-container` $\to$ Responsive Google Maps iframe
     * `.footer-social-row` $\to$ Social icons row (`.footer-social-icon`)
3. **Bottom Attribution Strip**: `.footer-bottom-strip`
   * `.footer-bottom-inner` $\to$ Flexbox footer credits
   * Copyright notice, terms link, and `.team-badge-link` for developer credits

```
========================================================================================
SECTION 9: INTERACTIVE MODALS & UTILITIES
Files: index.html (Lines 1087–1105) & assets/js/main.js
========================================================================================
```
* **Back to Top Button**: `<button id="backToTop" class="back-to-top-btn">`
  * Controlled by `initBackToTop()` in `main.js`. Appears after 300px scroll.
* **Instant Search Modal**: `<div id="searchModal" class="modal-overlay">`
  * Trigger: `Ctrl + K` or `.trigger-search-modal` button in navbar.
  * `.modal-dialog` $\to$ Search modal window
  * `#siteSearchInput` $\to$ Real-time instant search input field
  * `#searchResults` $\to$ Dynamic search results container

---

### Quick Cheat Sheet for Common Edits

#### 1. How to change or add a slide in the Hero Slider:
In [index.html](file:///c:/Users/YUVRAJ/Mayur%20Kharat/index.html#L427-L452), locate `<div class="hero-slider">` and insert:
```html
<div class="slide-item">
  <img src="YOUR_IMAGE_URL.webp" alt="Description" class="broad-slide-img">
</div>
```
*(Tip: For optimal clarity without letter clipping, use banner graphics with an aspect ratio of approximately 16:5 or 1600 × 500 px).*

#### 2. How to update the college name / H1 heading:
In [index.html](file:///c:/Users/YUVRAJ/Mayur%20Kharat/index.html#L145), locate:
```html
<h1 class="college-name">PIMPRI CHINCHWAD COLLEGE OF ENGINEERING</h1>
```

#### 3. How to adjust theme colors:
In [assets/css/style.css](file:///c:/Users/YUVRAJ/Mayur%20Kharat/assets/css/style.css#L7-L30), edit the `:root` variables (`--pccoe-navy`, `--pccoe-gold-primary`, etc.).

#### 4. How to add a new ticker announcement:
In [index.html](file:///c:/Users/YUVRAJ/Mayur%20Kharat/index.html#L372-L398), locate `<div class="spotlight-marquee">` and add:
```html
<div class="ticker-item">
  <span class="ticker-tag">Notice</span>
  <a href="URL" target="_blank"><strong>Title:</strong> Description &rarr;</a>
</div>
```
