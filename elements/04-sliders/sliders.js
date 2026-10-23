/**
 * PCCOE Computer Engineering - Element 04: Sliders Controller
 * Self-contained logic for Hero Slider and Testimonials Carousel
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. HERO SLIDER LOGIC
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.slide-item');
    const prevBtn = heroSlider.querySelector('.slider-arrow-btn.prev');
    const nextBtn = heroSlider.querySelector('.slider-arrow-btn.next');
    const dotsContainer = heroSlider.querySelector('.broad-slider-dots');
    
    let currentSlide = 0;
    let slideInterval = null;

    // Generate indicator dots dynamically if empty
    if (dotsContainer && dotsContainer.children.length === 0) {
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.indicator-dot') : [];

    function updateSlideUI() {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlide);
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    }

    function goToSlide(index) {
      if (index < 0) {
        currentSlide = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }
      updateSlideUI();
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(slideInterval);
      startAutoSlide();
    }

    // Pause on hover
    heroSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSlider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }

  // 2. TESTIMONIALS CAROUSEL LOGIC
  const testiTrack = document.querySelector('.testimonial-track');
  const testiPages = document.querySelectorAll('.testimonial-slide-page');
  const prevTestiBtn = document.querySelector('.testi-nav-btn.prev');
  const nextTestiBtn = document.querySelector('.testi-nav-btn.next');
  const testiBullets = document.querySelectorAll('.testi-bullet');

  if (testiTrack && testiPages.length > 0) {
    let currentTestiPage = 0;

    function updateTestiUI() {
      testiTrack.style.transform = `translateX(-${currentTestiPage * 100}%)`;
      testiBullets.forEach((bullet, idx) => {
        bullet.classList.toggle('active', idx === currentTestiPage);
      });
    }

    if (nextTestiBtn) {
      nextTestiBtn.addEventListener('click', () => {
        currentTestiPage = (currentTestiPage + 1) % testiPages.length;
        updateTestiUI();
      });
    }

    if (prevTestiBtn) {
      prevTestiBtn.addEventListener('click', () => {
        currentTestiPage = (currentTestiPage - 1 + testiPages.length) % testiPages.length;
        updateTestiUI();
      });
    }

    testiBullets.forEach((bullet, idx) => {
      bullet.addEventListener('click', () => {
        currentTestiPage = idx;
        updateTestiUI();
      });
    });
  }
});
