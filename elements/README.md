# PCCOE Department of Computer Engineering
## Atomic Elements & Component Architecture Catalog

This directory contains the modular, standalone elements developed for review, finalization, and approval prior to integration across the department web portal.

---

### Structure & Inventory

Each component is isolated with its own dedicated HTML structure, scoped CSS file, and JavaScript logic (where applicable).

```text
elements/
├── index.html                      # Interactive Master Element Showcase & Approval Catalog
├── README.md                       # Element architecture documentation (this file)
│
├── 01-header-navbar/
│   ├── header-navbar.html          # Top Utility Strip + Brand Header + Sticky Navigation Bar
│   └── header-navbar.css           # Modular header & navigation styles
│
├── 02-footer/
│   ├── footer.html                 # 4-Column Master Footer + Live Counter + Map + Copyright
│   └── footer.css                  # Modular footer styles
│
├── 03-image-cards/
│   ├── image-cards.html            # 5 Card Variations: Spotlight, Program, Faculty, Lab, Notice
│   └── image-cards.css             # Modular card design system styles
│
├── 04-sliders/
│   ├── sliders.html                # Hero Edge-to-Edge Slider + Recruiter Marquee + Testimonials
│   ├── sliders.css                 # Modular slider styles & animations
│   └── sliders.js                  # Standalone slider controller
│
├── 05-stats-counters/
│   ├── stats-counters.html         # Key numerical statistics with accent borders & icons
│   └── stats-counters.css          # Metric cards and typography
│
├── 06-announcements-ticker/
│   ├── ticker.html                 # Live Announcements Strip with continuous marquee
│   └── ticker.css                  # Ticker badge, track, and pause-on-hover styles
│
└── 07-accordions/
    ├── accordions.html             # Collapsible Accordions with Expand/Collapse All controls
    └── accordions.css              # Accordion header, transition, and outcome list styles
```

---

### Element Details for Approval

#### 1. Header & Navigation (`01-header-navbar/`)
* **Top Utility Strip (32px)**: Phone (`+91 8087174347`), Email (`pccoeadmin@gmail.com`), social channels (Facebook, LinkedIn, X, Instagram, YouTube), quick links (`Admission Enquiry`, `NIRF`, `AICTE`, `NBA Portal`), and font accessibility switchers (`A-`, `A`, `A+`, High Contrast).
* **Institutional Brand Header**: PCCOE Main Crest, PCET Trust emblem, and university accreditation ribbon (NBA Tier-1, NAAC 'A++', Autonomous, AICTE, SPPU).
* **Sticky Navigation Bar**: 50px slim bar with glassmorphic scroll effect, multi-level dropdowns with hover chevrons, search trigger modal button, and golden `Apply Now` CTA.

#### 2. Master Footer (`02-footer/`)
* **4-Column Layout**:
  - Col 1: Live HitWebCounter, Sector-26 campus address, queries email, and EPABX extension.
  - Col 2: Core department internal links (`About`, `HOD Desk`, `BOS`, `DAB`).
  - Col 3: Academic governance portals (`NIRF`, `AICTE`, `SPPU`, `NBA`).
  - Col 4: Responsive Google Maps campus embed.
* **Bottom Strip**: Copyright and PCET Digital Marketing Team credit badge.

#### 3. Image Card Elements (`03-image-cards/`)
* **Variant 1 — Spotlight Feature Cards**: Image container with hover zoom, category badge (`Leadership`, `Placements`, `Computing`), heading, text, and gradient button.
* **Variant 2 — Academic Program Cards**: Top gradient border, degree badge, duration and intake metadata, checkmark curriculum features, and syllabus link.
* **Variant 3 — Faculty & Leadership Profile Cards**: Circular avatar with torch gold gradient border, name, designation, qualification pills, research interest tags, and email/profile buttons.
* **Variant 4 — High-Tech Lab Showcase Cards**: Lab photo, room number badge (`Lab 402`), title, workstation/computing specs, and facility link.
* **Variant 5 — Notice & News Cards**: High-contrast date badge box (`28 OCT`), category tag, title, and summary.

#### 4. Sliders & Carousels (`04-sliders/`)
* **Full-Width Hero Slider**: Edge-to-edge layout, responsive aspect ratio (16:5), slide caption overlay, arrow navigation, and auto-slide with hover pause.
* **Recruiters Marquee Carousel**: Continuous infinite loop with top hiring partners (Microsoft, Veritas, BMC, TCS, Infosys, Capgemini, etc.).
* **Testimonials Carousel**: Student and alumni placement quotes with photo avatar, dream package role, star ratings, and dot pagination.

#### 5. Stats & Metrics Counters (`05-stats-counters/`)
* Metric cards with 4 accent indicators (Cerulean Navy, Torch Gold, Crimson Warm, Sky Cyan), icon boxes, and animated number counting.

#### 6. Announcements Ticker (`06-announcements-ticker/`)
* Golden amber "LATEST UPDATES" badge with a continuous scrolling marquee track for circulars and notices.

#### 7. Collapsible Accordions (`07-accordions/`)
* Smooth height animation, active chevron rotation, outcome code tags (`PEO-1`, `PSO-1`, `FAQ`), and global "Expand All" / "Collapse All" toolbar.

---

### Framework Integration (Bootstrap 5.3.3)

All components inside this directory are fully integrated and compatible with **Bootstrap 5.3.3**:
- **Grid Layouts**: Components utilize standard Bootstrap `container`, `row`, `col-*`, `row-cols-*`, and `g-*` gutter classes.
- **Card Architecture**: Card variants implement standard Bootstrap `.card`, `.card-header`, `.card-body`, and `.card-footer` structures.
- **Design Tokens**: Bootstrap's root CSS custom properties (`--bs-primary`, `--bs-secondary`, `--bs-info`, `--bs-warning`) are harmonized directly with PCCOE's primary institutional palette (`#035a91`, `#073860`, `#f59e0b`).
- **CDN Links**: Standalone HTML templates include the official Bootstrap 5.3.3 CSS stylesheet and JS bundle.

---

### How to Review & Approve

1. Open [`elements/index.html`](file:///d:/PROJECTS/DM%20dept/Comp%20dept/Mayur%20Kharat/elements/index.html) in any web browser.
2. Review the live visual display of each component via "Quick View" or "Open Standalone".
3. Once approved by the department committee, any element's HTML snippet and CSS rules can be added into the respective portal page directly.
