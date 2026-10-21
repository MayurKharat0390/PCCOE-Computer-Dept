# PCCOE Department of Computer Engineering Portal

An institutional web portal for the **Department of Computer Engineering**, Pimpri Chinchwad College of Engineering (PCCOE), Pune (An Autonomous Institute Permanently Affiliated to SPPU, Approved by AICTE, Accredited with 'A++' Grade by NAAC, NBA Accredited).

---

## 🌟 Overview & Highlights

This project revitalizes and modernizes the Computer Engineering Department website while strictly adhering to the official PCCOE emblem brand identity, high readability standards, and responsive accessibility.

### Key Features
- **Authentic Brand Identity**: Curated institutional color palette based directly on the PCCOE crest (Cerulean Cyan `#1eafe7`, Deep Ocean Navy `#035a91` / `#073860`, Warm Amber Gold `#f59e0b`, and Crisp White `#ffffff`).
- **Institutional Header**: Clean top accreditation strip (NBA, NAAC A++, Autonomous status), official PCCOE & PCET bilingual logos, dynamic department title banner, and desktop + mobile navigation drawers.
- **Hero Slider & Live Announcements**: Responsive banner carousel showcasing department achievements, research milestones, accompanied by a dynamic live notices ticker.
- **Academic Highlights & Metrics**: Modern metric cards displaying intake, accredited status, research publications, and placement stats.
- **Programs & Faculty**: Clear overview of B.Tech & M.Tech Computer Engineering programs, faculty leadership profiles, and department vision/mission.
- **Student Achievements & Research**: Showcases student project innovations, patents, MoUs, and hackathon wins.
- **Authentic Compact Footer**: Faithful 4-column compact footer (~180px height) matching the original site specifications:
  - Column 1: Live visitor counter widget and direct contact info (address, official email, phone).
  - Column 2: Quick links (`Home`, `About PCCOE`, `About PCET`, `Contact us`).
  - Column 3: Regulatory links (`Important Links`, `SPPU`, `AICTE`, `NBA Documents`).
  - Column 4: Location pin title with compact Google Maps embed.
  - Slim dark copyright bar (`#092138`) with PCCOE and Digital Marketing Team credits.

---

## 📁 Project Structure

```
PCCOE-Computer-Dept/
├── index.html                           # Main portal homepage
├── base.html                            # Master canonical layout template (Header & Footer)
├── about.html                           # About Department & PEOs/POs/PSOs with collapsible accordions
├── hod-desk.html                        # HOD Desk & Dr. Sonali D. Patil address
├── bos.html                             # Board of Studies (BOS) with search & 11 MoM PDF cards
├── dab.html                             # Department Advisory Board (DAB) with dynamic search
├── assets/
│   ├── css/
│   │   └── style.css                    # Modular design system, transitions & responsive tokens
│   ├── js/
│   │   └── main.js                      # Slider, transitions, search filters, and handlers
│   └── images/                          # Badges, faculty photos, slides, logos
├── SITE_ELEMENTS_PAGEWISE_DIRECTORY.md  # Comprehensive page-wise elements & classes directory
├── DEVELOPER_HANDOVER_GUIDE.md          # Architectural handover guide
├── README.md                            # Project documentation
└── .gitignore                           # Git ignore rules
```

---

## 🚀 Getting Started

No build step or external runtime dependencies are required. Simply serve using any standard static file server:

### Python 3
```bash
python -m http.server 3000
```
Then navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Node.js (via serve or npx)
```bash
npx serve .
```

---

## 🛠️ Tech Stack
- **HTML5**: Semantic tags, ARIA attributes, SEO meta tags.
- **CSS3**: Custom design tokens (CSS Variables), Flexbox, CSS Grid, media queries for all viewports.
- **Vanilla JavaScript**: Lightweight, dependency-free interactive logic (slider, ticker, modal dialogs, mobile drawer, smooth scroll).
- **Font Awesome 6**: Vector icons for crisp UI elements.

---

## 📝 License & Credits
- **Institution**: Pimpri Chinchwad College of Engineering (PCCOE), Pune.
- **Trust**: Pimpri Chinchwad Education Trust (PCET).
- **Developed by**: Digital Marketing Team, PCET.
