# PCCOE Department of Computer Engineering
# Page-Wise Element, Class & Component Architecture Directory

**Date:** October 21, 2026  
**Department:** Computer Engineering, Pimpri Chinchwad College of Engineering (PCCOE), Pune  
**Project:** Autonomous Department Portal Frontend Modernization  

---

## 1. Executive Summary & Page Inventory

This document provides a comprehensive, page-by-page catalog of every semantic section, structural container, HTML element, unique ID, and CSS class implemented across the modernized PCCOE Computer Engineering Department web portal.

### Current Page Inventory:
1. [`base.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/base.html) — Canonical Master Template for Header, Navigation, and Footer.
2. [`index.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/index.html) — Department Homepage (Edge-to-edge Hero Slider, Notices, Programs, Stats, Recruiters, Testimonials).
3. [`about.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/about.html) — About Department (HOD Overview, Vision, Mission, Quality Policy, PEOs, POs, PSOs, BOS preview).
4. [`hod-desk.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/hod-desk.html) — Head of Department Desk (Dr. Sonali D. Patil address, academic profile, leadership pillars, campus virtual tour).
5. [`bos.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/bos.html) — Board of Studies (12-member executive committee, real-time search filter, 11 official MoM cards).
6. [`dab.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/dab.html) — Department Advisory Board (16-member advisory council, real-time search filter, authentic 2-column table).

---

## 2. Page-Wise Element & Class Catalog

---

### A. Master Base Template (`base.html`)
*Canonical structural scaffolding shared across all portal pages.*

#### 1. Header Utility Strip (`.top-strip`)
* **Tag:** `<header class="top-strip" role="region" aria-label="Top Contact and Admission Strip">`
* **Container:** `.container` > `.top-strip-inner`
* **Elements & Classes:**
  * `.top-contact-info`: Wrapper for phone, email, and social icons.
  * `.top-contact-item`: Flex items containing icon (`fa-phone-volume`, `fa-envelope`) and links.
  * `.strip-divider`: Span separator (`|`).
  * `.top-social-group`: Container for `.top-social-link` icons (Facebook, LinkedIn, X, Instagram, YouTube).
  * `.top-links`: Right-aligned container for quick institutional links.
  * `.top-enquiry-link`: Fast link badge with `fa-bolt` for Admission Enquiry.
  * `.top-nav-link`: Institutional links for `NIRF`, `AICTE`, `NBA Portal`.
  * `.access-tools`: Accessibility button container (`#fontDecrease`, `#fontReset`, `#fontIncrease`, `#contrastToggle` with `fa-circle-half-stroke`).

#### 2. Institutional Brand Header (`.brand-header`)
* **Tag:** `<section class="brand-header" role="banner">`
* **Container:** `.container` > `.brand-header-grid`
* **Elements & Classes:**
  * `.brand-logo-left` > `.logo-link` > `.main-logo-img`: PCCOE crest emblem.
  * `.brand-text-center`: Center typography stack:
    * `.trust-title`: Trust name `PIMPRI CHINCHWAD EDUCATION TRUST'S (PCET)`.
    * `.college-name`: Primary `<h1>` institutional title `PIMPRI CHINCHWAD COLLEGE OF ENGINEERING`.
    * `.dept-title-text`: Subtitle `DEPARTMENT OF COMPUTER ENGINEERING`.
    * `.accreditation-ribbon`: Inline bulleted flex strip containing `.accreditation-item` (NBA Tier-1, NAAC 'A++', Autonomous, AICTE, SPPU) and `.accreditation-sep`.
  * `.brand-logo-right` > `.logo-link` > `.trust-logo-img`: Transparent PCET Trust Logo (`assets/images/PCCoE-LOGO/pcet-trust-logo.webp`).

#### 3. Primary Sticky Navigation Bar (`.site-navigation`)
* **Tag:** `<nav class="site-navigation" role="navigation" aria-label="Main Navigation">`
* **Container:** `.container.nav-container`
* **Elements & Classes:**
  * `.nav-links-wrapper`: Desktop list / mobile drawer container.
  * `.nav-list`: Flex list of items (`.nav-item`).
  * `.nav-link-btn`: Top-level link with hover state and chevron (`.dropdown-chevron`).
  * `.nav-dropdown`: Absolute dropdown panel with `.dropdown-item-link` items (`fa-angle-right`).
  * `.nav-actions`: Utility container with:
    * `.nav-search-btn.trigger-search-modal`: Direct trigger for search modal (`fa-magnifying-glass`).
    * `.nav-cta-apply`: Primary golden amber CTA button (`Apply Now`).
    * `.mobile-menu-toggle`: Hamburger button (`fa-bars`) for screen sizes $\le 992\text{px}$.

#### 4. Master Footer (`.site-master-footer`)
* **Tag:** `<footer class="site-master-footer" role="contentinfo">`
* **Container:** `.footer-main-body` > `.container.footer-columns-grid`
* **Elements & Classes:**
  * `.footer-col.footer-col-contact`:
    * `.footer-counter-wrap` > `.footer-counter-img`: Live hitwebcounter counter.
    * `.footer-contact-list` > `.footer-contact-item`: Icons (`fa-location-dot`, `fa-envelope`, `fa-phone`) with campus address, queries email, and EPABX extension.
  * `.footer-col`: Internal department navigation (`.footer-nav-menu`).
  * `.footer-col`: Regulatory and University links (`.footer-nav-menu`, `.footer-menu-heading`).
  * `.footer-col.footer-col-map`:
    * `.footer-location-title`: `fa-location-dot` header.
    * `.footer-map-container` > `iframe`: 90px height Google Maps campus embed.
  * `.footer-bottom-strip` > `.container.footer-bottom-inner`: 
    * Copyright text and PCET Digital Marketing Team credit badge (`.team-badge-link`).

---

### B. Department Homepage (`index.html`)
*Main entrance portal showcasing academic stature, hero slider, infrastructure, and placements.*

#### Specific Sections & Elements:
* **Section: Hero Banner Slider (`.hero-slider-section`)**
  * `.hero-slider-container`: Full-width slider wrapper (margin-left/right: 0, edge-to-edge).
  * `.slide` (`.slide.active`): Individual slides containing background image, overlay gradient, title, and subtitle.
  * `.slider-arrow.prev`, `.slider-arrow.next`: Slide navigation controls.
  * `.slider-dots`: Dot pagination (`.dot`, `.dot.active`).
* **Section: Announcements Strip (`.announcements-ticker`)**
  * `.ticker-badge`: Golden "LATEST UPDATES" badge (`fa-bullhorn`).
  * `.ticker-marquee-wrap` > `.ticker-marquee`: Continuous CSS-animated text scroll of departmental notices.
* **Section: Fast Navigation Highlights (`.quick-highlights-grid`)**
  * `.highlight-card`: Interactive feature cards for B.Tech, M.Tech, PhD Research, and Top Placements.
* **Section: Department Overview & Leadership Quote (`.home-about-section`)**
  * `.home-about-grid`: 2-column layout (Department story & HOD profile snippet).
* **Section: Key Metrics Counter (`.stats-section`)**
  * `.stats-grid` > `.stat-card`: Animated counter displays (Faculty PhDs, Publications, Placements %, Package Lakhs).
* **Section: Programs Offered (`.academic-programs-section`)**
  * `.programs-grid` > `.program-card`: B.Tech Computer, M.Tech Computer, PhD Center with intake, duration, and curriculum badges.
* **Section: Top Corporate Recruiters (`.recruiters-marquee-section`)**
  * `.recruiters-carousel-track`: Infinite logo marquee featuring Microsoft, BMC, Veritas, TCS, Infosys, Capgemini.
* **Section: Student Testimonials & Video Tour (`.testimonials-video-section`)**
  * `.video-container`: Embedded YouTube PCCOE Virtual Tour player.
  * `.testimonial-carousel`: Student placement experience quotes.

---

### C. About Department (`about.html`)
*Official curriculum governance, vision, mission, and program educational outcomes.*

#### Specific Sections & Elements:
* **Section: Breadcrumb & Title Banner (`.page-header-banner`)**
  * `.breadcrumbs-nav`: Clickable path `Home > About us > About Department`.
  * `.page-title`: `About Department`.
* **Section: Internal Page Grid (`.internal-page-grid`)**
  * `.internal-sidebar`: Sticky navigation drawer:
    * `.sidebar-heading`: `fa-compass` section heading.
    * `.sidebar-menu`: Links to `#about-dept`, `hod-desk.html`, `#vision-mission`, `#peos`, `#pos`, `#psos`, `bos.html`, `dab.html`.
    * `.sidebar-info-card`: Embedded video tour (`PCCOE Virtual Tour`).
  * `.page-article`: Main content container:
    * **Card 1: Department Overview (`#about-dept`, `.content-card`)**: Overview paragraph, year of establishment (1999), autonomous milestones.
    * **Card 2: HOD Profile Snippet (`.hod-preview-card`)**: Headshot of Dr. Sonali D. Patil, qualifications (Ph.D., M.E., B.E.), and link to `hod-desk.html`.
    * **Card 3: Vision & Mission (`#vision-mission`, `.content-card`)**: Structured cards with `.vision-box` and `.mission-box`.
    * **Card 4: Quality Policy (`.content-card`)**: Institutional quality commitment statement.
    * **Card 5: Collapsible Accordion Toolbar (`.collapsible-toolbar`)**: "Expand All" / "Collapse All" button controls.
    * **Card 6: Program Educational Objectives (`#peos`, `.collapsible-card`)**: Collapsible header with PEO-1, PEO-2, PEO-3, PEO-4 cards.
    * **Card 7: Program Outcomes (`#pos`, `.collapsible-card`)**: Collapsible list covering PO-1 to PO-12 (Engineering Knowledge to Lifelong Learning).
    * **Card 8: Program Specific Outcomes (`#psos`, `.collapsible-card`)**: Collapsible list covering PSO-1 and PSO-2.
    * **Card 9: Board of Studies Preview (`#bos-preview`, `.collapsible-card`)**: Quick summary and button link to `bos.html`.

---

### D. HOD Desk (`hod-desk.html`)
*Dedicated leadership profile and official address by Dr. Sonali D. Patil.*

#### Specific Sections & Elements:
* **Section: Breadcrumb & Title Banner (`.page-header-banner`)**
  * `.breadcrumbs-nav`: `Home > About us > HOD Desk`.
  * `.page-title`: `HOD Desk`.
* **Section: Internal 2-Column Grid (`.internal-page-grid`)**
  * `.internal-sidebar`: Sidebar menu with active link on HOD Desk + Video Tour card.
  * `.page-article`:
    * **HOD Profile Header Card (`.hod-bio-card`)**:
      * `.hod-avatar-wrap` > `img`: Verified official photograph of Dr. Sonali D. Patil.
      * `.hod-details`: Full name, Designation (Professor & Head), Qualifications, Email link (`sonali.patil@pccoepune.org`).
    * **HOD Address Card (`.content-card`)**:
      * Official welcome letter outlining academic vision, industry-aligned autonomous syllabi, holistic student development, and hackathon achievements.
    * **Strategic Focus Pillars (`.hod-pillars-grid`)**:
      * Four cards highlighting Academic Rigor, Research & Innovation, Industry Immersion, and Value-Based Education.

---

### E. Board of Studies (`bos.html`)
*Curriculum governance body and autonomous academic meeting archive.*

#### Specific Sections & Elements:
* **Section: Breadcrumb & Title Banner (`.page-header-banner`)**
  * `.breadcrumbs-nav`: `Home > About us > Board Of Studies`.
  * `.page-title`: `Board of Studies (BOS)`.
* **Section: Internal 2-Column Grid (`.internal-page-grid`)**
  * `.internal-sidebar`: Sidebar menu with active state on Board Of Studies + Video Tour card.
  * `.page-article`:
    * **Section: BOS Committee Directory (`.content-card`)**:
      * **Live Search Filter Box (`#bosMemberSearch`, `.bos-search-box`)**: Instant member filter.
      * **Committee Table (`.bos-table-wrap` > `#bosCommitteeTable.bos-table`)**:
        * Columns: Sr. No., Category, Name of the Member, Designation.
        * Complete 12 executive members across Chairman, Academic Experts (COEP, VJTI), Industry Representatives, Alumni, and Faculty.
    * **Section: Minutes of Meeting Archive (`#bos-mom`, `.content-card`)**:
      * **MoM Grid (`.mom-grid`)**: 11 interactive download cards (`.mom-card`):
        * Meeting 1 to Meeting 11 with PDF download badges (`.mom-icon` with `fa-file-pdf`), meeting date, and download icon (`fa-download`).

---

### F. Department Advisory Board (`dab.html`)
*Official 16-member advisory council for academic, research, and industrial alignment.*

#### Specific Sections & Elements:
* **Section: Breadcrumb & Title Banner (`.page-header-banner`)**
  * `.breadcrumbs-nav`: `Home > About us > Department of Advisory Board (DAB)`.
  * `.page-title`: `Department of Advisory Board (DAB)`.
* **Section: Internal 2-Column Grid (`.internal-page-grid`)**
  * `.internal-sidebar`: Sidebar menu with active state on Department of Advisory Board (DAB) + Video Tour card.
  * `.page-article`:
    * **Content Card (`.content-card`)**:
      * `.content-card-header`: Header `fa-users` and title `Department of Advisory Board (DAB)`.
      * **Live Search Filter Box (`#dabMemberSearch`, `.bos-search-box`)**: Instant search by member name, role, or institution.
      * **DAB Table (`.dab-table-wrap` > `#dabCommitteeTable.dab-table`)**:
        * Column 1: Role (`.role-cell`, 240px width with automatic `rowspan` handling).
        * Column 2: Member Name, Designation, and Organization.
        * Complete 16 authentic members (Chairman, Secretary, Academics, Industry, Research, Professional Body ACM, Parents, Alumni, Students, Faculty).
      * **No Results Container (`#dabNoResults`)**: Dynamic message displayed when no search matches exist.

---

## 3. SEPARATELY HIGHLIGHTED: Newly Added & Enhanced Elements
*(Features and elements that did not exist in the original site, implemented to elevate user experience, accessibility, and modern web standards)*

| Enhanced Component | Files Present | Description & Mechanics |
| :--- | :--- | :--- |
| **View Transitions & Animated Page Engine** | All pages (`assets/css/style.css`, `assets/js/main.js`) | Native CSS `@view-transition { navigation: auto; }` paired with programmatic `initPageTransitions()` for silky fade-in/slide transitions between pages without jarring flashes. |
| **Animated Collapsible Accordions** | `about.html` | `.collapsible-card`, `.collapsible-trigger`, `.collapsible-content`, and rotating chevron animations for long sections (PEOs, POs, PSOs, BOS preview) ensuring a compact, readable layout. |
| **Accordion Toolbar (Expand / Collapse All)** | `about.html` | `.collapsible-toolbar` with `.accordion-toggle-all-btn` allowing users to expand or collapse all cards simultaneously. |
| **Real-Time Dynamic Member Search Filter** | `bos.html` & `dab.html` | Instant search input (`.bos-search-box`) filtering committee rows in real-time as the user types, with smart `rowspan` adjustment on `dab.html` so rows never break layout. |
| **Modern Minutes of Meeting (MoM) Grid** | `bos.html` | `.mom-grid` with 11 cards (`.mom-card`), red PDF badge icons (`.mom-icon`), hover elevation, and direct download links replacing old unformatted anchor tags. |
| **Dedicated HOD Desk Page** | `hod-desk.html` | Dedicated leadership profile page highlighting Dr. Sonali D. Patil with verified credentials, institutional address, and 4 strategic pillar cards. |
| **Interactive Modal Search Bar** | All pages (`#searchModal`) | Global search popup triggered via the header magnifying glass button or `Ctrl + K` keyboard shortcut for rapid site-wide navigation. |
| **Accessibility Switcher Suite** | All pages (`.top-strip`) | Font size adjustment buttons (`A-`, `A`, `A+`) and a High-Contrast mode toggle (`#contrastToggle`) storing user preferences in `sessionStorage`. |
| **Harmonized 4-Column Compact Footer** | All pages (`.site-master-footer`) | Standardized ~180px height academic footer featuring live hit counter, direct contact details, SPPU/AICTE links, 90px Google Map embed, and PCET credits across all sub-pages. |
| **Accreditation Ribbon** | All pages (`.brand-header`) | Prominent single-row badge strip displaying NBA Tier-1, NAAC 'A++' (CGPA 3.55), Autonomous Institute, AICTE Approved, and SPPU Affiliated. |

---

## 4. Summary for Daily Task Sheet / Work Log

### One-Liner Summary:
> **"Modernized PCCOE Computer Department portal with canonical base architecture, dedicated About Us suite (About, HOD Desk, BOS with live search & 11 MoMs, DAB with dynamic table filtering), page transitions, and responsive GitHub release."**

### Daily Task Sheet Bullet Points:
- Built canonical master layout template (`base.html`) standardizing top utility strip, institutional brand header, cerulean navy navigation bar, and compact 4-column footer.
- Developed dedicated `about.html` featuring animated collapsible accordions for PEOs, POs, and PSOs with an "Expand/Collapse All" toolbar.
- Created `hod-desk.html` updating leadership details to current HOD Dr. Sonali D. Patil with official welcome address, profile credentials, and virtual tour player.
- Developed `bos.html` featuring a 12-member Board of Studies committee with real-time search filtering and an 11-meeting Minutes of Meeting (MoM) PDF archive grid.
- Developed `dab.html` featuring the authentic 16-member Department Advisory Board table with intelligent real-time search and dynamic rowspan adaptation.
- Implemented smooth page transitions using CSS `@view-transition` and JavaScript keyframe animations across all navigation routes.
- Fully verified visual responsiveness, typography, and search filters on local development server; pushed complete source code to GitHub repository.
