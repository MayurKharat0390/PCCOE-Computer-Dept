/**
 * PCCOE Department of Computer Engineering
 * Modern Frontend Logic & Interactivity
 * Author: Senior Web Developer & Frontend Architect
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNav();
  initHeroSlider();
  initTestimonialSlider();
  initCounters();
  initMobileNav();
  initBackToTop();
  initSearchModal();
  initAccessibility();
  initImageFallbacks();
  initPageTransitions();
});

/* ==========================================================================
   1. STICKY NAV ELEVATION
   ========================================================================== */
function initStickyNav() {
  const nav = document.querySelector('.site-navigation');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   2. HERO INTERACTIVE SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide-item');
  const dots = document.querySelectorAll('.indicator-dot');
  const prevBtn = document.querySelector('.slider-arrow-btn.prev, .slider-clean-arrow.prev, .slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow-btn.next, .slider-clean-arrow.next, .slider-arrow.next');
  const sliderContainer = document.querySelector('.hero-slider');
  const captionEl = document.getElementById('slideCaptionText');

  const slideCaptions = [
    "Team Computer Engineering Faculty & Academic Mentors",
    "PCCOE Signs MoU with Big Zero Technology LLP",
    "Distinguished Global Expert Lecture: Dr. Ashutosh Kotwal",
    "Algix Technology Patent Grant & Innovation Milestones",
    "Record Placements & Top Marquee Recruiter Offers"
  ];

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 5500;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    if (captionEl && slideCaptions[index]) {
      captionEl.textContent = slideCaptions[index];
    }
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
      startAutoplay();
    }, { passive: true });
  }

  startAutoplay();
}

/* ==========================================================================
   3. TESTIMONIAL SLIDER
   ========================================================================== */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const pages = document.querySelectorAll('.testimonial-slide-page');
  const prevBtn = document.querySelector('.testi-nav-btn.prev');
  const nextBtn = document.querySelector('.testi-nav-btn.next');
  const bullets = document.querySelectorAll('.testi-bullet');

  if (!track || !pages.length) return;

  let currentPage = 0;

  function updateTestimonials(pageIndex) {
    track.style.transform = `translateX(-${pageIndex * 100}%)`;
    bullets.forEach((b, i) => b.classList.toggle('active', i === pageIndex));
    currentPage = pageIndex;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let next = (currentPage + 1) % pages.length;
      updateTestimonials(next);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let prev = (currentPage - 1 + pages.length) % pages.length;
      updateTestimonials(prev);
    });
  }

  bullets.forEach((bullet, idx) => {
    bullet.addEventListener('click', () => updateTestimonials(idx));
  });
}

/* ==========================================================================
   4. ANIMATED KPI COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.metric-number');
  if (!counters.length) return;

  let animated = false;

  function countUp(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => countUp(counter));
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* ==========================================================================
   5. MOBILE NAVIGATION & SUBMENUS
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navDrawer = document.querySelector('.nav-links-wrapper');
  const navItems = document.querySelectorAll('.nav-item');

  if (!toggleBtn || !navDrawer) return;

  // Backdrop overlay for mobile drawer
  let backdrop = document.querySelector('.mobile-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1040;display:none;';
    document.body.appendChild(backdrop);
  }

  function openDrawer() {
    navDrawer.classList.add('open');
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('open');
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navDrawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop.addEventListener('click', closeDrawer);

  // Accordion for mobile submenus
  navItems.forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    const trigger = item.querySelector('.nav-link-btn');

    if (dropdown && trigger && window.innerWidth <= 992) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });
}

/* ==========================================================================
   6. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   7. QUICK SEARCH MODAL
   ========================================================================== */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.trigger-search-modal');
  const modal = document.getElementById('searchModal');
  const closeBtn = document.querySelector('#searchModal .modal-close-btn');
  const searchInput = document.getElementById('siteSearchInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!modal) return;

  const searchableData = [
    { title: 'Faculty Directory & Academic Mentors', cat: 'People', url: 'faculty.html', desc: 'Distinguished doctorates, professors & researchers in Computer Engineering at PCCOE.' },
    { title: "HOD's Desk - Dr. Sonali Patil", cat: 'About Us', url: 'hod-desk.html', desc: 'Message from Head of the Department on academic excellence & research vision.' },
    { title: 'About Department of Computer Engineering', cat: 'About Us', url: 'about.html', desc: 'Department overview, Vision, Mission, PEOs, POs, and PSOs.' },
    { title: 'Board of Studies (BOS)', cat: 'About Us', url: 'bos.html', desc: 'Curriculum governance committee and Minutes of Meeting (MoM) records.' },
    { title: 'Department Advisory Board (DAB)', cat: 'About Us', url: 'dab.html', desc: '16-member advisory council shaping strategic direction and industry alignment.' },
    { title: 'B.Tech in Computer Engineering', cat: 'Academics', url: 'https://computer.pccoepune.com/B-tech-comp', desc: '4-Year Undergraduate Program with intake of 240 students, NBA Tier-1 accredited.' },
    { title: 'M.Tech in Computer Engineering', cat: 'Academics', url: 'https://computer.pccoepune.com/m-tech-about', desc: '2-Year PG Program with intake of 18, specializing in AI, Data Science & Advanced Computing.' },
    { title: 'Ph.D. Research Center', cat: 'Research', url: 'https://computer.pccoepune.com/phd-Coordinators-desk', desc: 'Recognized Research Center under Savitribai Phule Pune University.' },
    { title: 'Placements & Highest Package', cat: 'Industry', url: 'https://computer.pccoepune.com/placements', desc: 'Over 90% placement rate, ₹61 LPA top package, Tier-1 MNC recruiters.' },
    { title: 'ACM & ACM-W Student Chapters', cat: 'Student Corner', url: 'https://computer.pccoepune.com/sdw-chapters', desc: 'Best Outstanding Website & Community Service award-winning chapters.' },
    { title: 'Syllabus & Course Structure', cat: 'Student Corner', url: 'https://computer.pccoepune.com/syllabus', desc: 'Updated Autonomous SPPU Curriculum for FY, SY, TY, Final Year B.Tech.' },
    { title: 'Admission Enquiry 2026-27', cat: 'Admissions', url: 'https://forms.zohopublic.in/dmteampcco1/form/PCETForm/formperma/tYvqjs2MVyQV3phz1vyaomCABN2zsmOV12BKDcKD3ck', desc: 'Apply online for B.Tech, M.Tech and International admissions.' },
    { title: 'Virtual Campus Tour', cat: 'Campus', url: 'https://youtu.be/FKXRu9yoPh4?si=AE0EdyGJeF9-SLi-', desc: 'Take a virtual 360 walk through PCCOE campus, labs, library & computing facilities.' }
  ];

  function openSearch() {
    modal.classList.add('active');
    setTimeout(() => searchInput && searchInput.focus(), 100);
    renderResults(searchableData.slice(0, 5));
  }

  function closeSearch() {
    modal.classList.remove('active');
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderResults(searchableData.slice(0, 5));
        return;
      }
      const filtered = searchableData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.cat.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q)
      );
      renderResults(filtered);
    });
  }

  function renderResults(list) {
    if (!resultsContainer) return;
    if (!list.length) {
      resultsContainer.innerHTML = '<p style="text-align:center;color:#64748b;padding:20px;">No matching results found. Try another query.</p>';
      return;
    }
    resultsContainer.innerHTML = list.map(item => `
      <div style="padding:12px;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center;transition:background 0.2s;" onmouseover="this.style.background='#fdfaf0'" onmouseout="this.style.background='transparent'">
        <div>
          <span style="font-size:0.7rem;font-weight:800;color:#071c33;background:#fef7e7;border:1px solid #d4af37;padding:2px 8px;border-radius:4px;text-transform:uppercase;">${item.cat}</span>
          <h5 style="margin:4px 0 2px;font-size:0.95rem;font-weight:700;"><a href="${item.url}" target="_blank" style="color:#071c33;">${item.title}</a></h5>
          <p style="font-size:0.785rem;color:#64748b;margin:0;">${item.desc}</p>
        </div>
        <a href="${item.url}" target="_blank" style="font-size:0.8rem;color:#071c33;font-weight:700;white-space:nowrap;padding:4px 12px;background:#fef7e7;border:1px solid #d4af37;border-radius:4px;">Visit &rarr;</a>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   8. ACCESSIBILITY CONTROLS
   ========================================================================== */
function initAccessibility() {
  const fontInc = document.getElementById('fontIncrease');
  const fontDec = document.getElementById('fontDecrease');
  const fontReset = document.getElementById('fontReset');
  const contrastToggle = document.getElementById('contrastToggle');

  if (fontInc) {
    fontInc.addEventListener('click', () => {
      document.body.classList.add('text-large');
    });
  }

  if (fontDec) {
    fontDec.addEventListener('click', () => {
      document.body.classList.remove('text-large');
    });
  }

  if (fontReset) {
    fontReset.addEventListener('click', () => {
      document.body.classList.remove('text-large', 'contrast-high');
    });
  }

  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      document.body.classList.toggle('contrast-high');
    });
  }
}

/* ==========================================================================
   9. IMAGE FALLBACKS
   ========================================================================== */
function initImageFallbacks() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = 'true';
      // If an image fails to load, gracefully provide a styled SVG placeholder
      const altText = this.alt || 'PCCOE Computer Dept';
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23092540" width="100%" height="100%"/><text fill="%23ffffff" x="50%" y="45%" font-family="sans-serif" font-weight="bold" font-size="18" text-anchor="middle">PCCOE Computer Engg</text><text fill="%230098db" x="50%" y="60%" font-family="sans-serif" font-size="13" text-anchor="middle">${encodeURIComponent(altText)}</text></svg>`;
    });
  });
}

/* ==========================================================================
   10. SEAMLESS PAGE TRANSITIONS
   ========================================================================== */
function initPageTransitions() {
  const content = document.querySelector('main') || document.querySelector('.page-content-wrapper') || document.querySelector('.homepage-content-wrapper');

  // Intercept internal page link clicks for silky smooth transition
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    const target = link.getAttribute('target');

    // Skip if hash link on same page, tel, mailto, javascript, external, or target blank
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || target === '_blank') {
      return;
    }

    // Only handle internal relative links (e.g. 'index.html', 'about.html', 'hod-desk.html', './')
    const isInternal = !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('//');
    if (!isInternal) return;

    // Avoid transitions on same-page clicks with hashes
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const targetPath = href.split('#')[0].split('?')[0].split('/').pop() || 'index.html';
    if (currentPath === targetPath && href.includes('#')) {
      return; // Handled by hash scroll
    }

    // Native view transition
    if (document.startViewTransition) {
      // Modern Chromium supports navigation: auto view-transitions natively
      return;
    }

    // Fallback animation
    e.preventDefault();
    if (content) {
      content.classList.add('page-transitioning');
    }
    setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
}
