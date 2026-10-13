/**
 * SUSEE TRUCKS PRIVATE LIMITED — OFFICIAL JAVASCRIPT
 * Authorized Tata Motors Commercial Vehicles Dealer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Constants
  const WHATSAPP_PHONE = '919344721689'; // International format without spaces or symbols

  /* -------------------------------------------------------------------------
     1. Sticky Header & Elevation on Scroll
     ------------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  /* -------------------------------------------------------------------------
     2. Mobile Navigation Toggle & Drawer
     ------------------------------------------------------------------------- */
  const navToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNav');
  const navClose = document.getElementById('mobileNavClose');
  const navBackdrop = document.getElementById('navDrawerBackdrop');

  function openMobileNav() {
    navMenu?.classList.add('open');
    navBackdrop?.classList.add('active');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navMenu?.classList.remove('open');
    navBackdrop?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    navClose?.addEventListener('click', closeMobileNav);
    navBackdrop?.addEventListener('click', closeMobileNav);

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  /* -------------------------------------------------------------------------
     3. Tata Motors Campaign Banners Carousel & Gallery
     ------------------------------------------------------------------------- */
  const slides = document.querySelectorAll('.banner-slide');
  const indicators = document.querySelectorAll('.indicator-dot');
  const thumbBtns = document.querySelectorAll('.banner-thumb-btn');
  const prevBtn = document.getElementById('bannerPrevBtn');
  const nextBtn = document.getElementById('bannerNextBtn');
  const carouselContainer = document.querySelector('.banner-carousel-container');

  let currentSlide = 0;
  let autoSlideTimer = null;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (totalSlides === 0) return;
    currentSlide = (index + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === currentSlide);
      ind.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
    });

    thumbBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  if (prevBtn && nextBtn && totalSlides > 0) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => {
        showSlide(i);
        resetAutoSlide();
      });
    });

    thumbBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        showSlide(i);
        resetAutoSlide();
      });
    });

    // Touch Swipe Gesture Support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselContainer?.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });

    function handleGesture() {
      const threshold = 40;
      if (touchEndX < touchStartX - threshold) {
        nextSlide();
        resetAutoSlide();
      } else if (touchEndX > touchStartX + threshold) {
        prevSlide();
        resetAutoSlide();
      }
    }

    // Keyboard navigation when focusing inside carousel
    carouselContainer?.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoSlide();
      }
    });

    // Autoplay with pause on hover
    function startAutoSlide() {
      // Respect user's reduced-motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        autoSlideTimer = setInterval(nextSlide, 6500);
      }
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    carouselContainer?.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer?.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }

  /* -------------------------------------------------------------------------
     4. Interactive Customer Enquiry Form with WhatsApp Integration
     ------------------------------------------------------------------------- */
  const enquiryForm = document.getElementById('enquiryForm');
  const modalOverlay = document.getElementById('enquiryModalOverlay');
  const modalProceedBtn = document.getElementById('modalProceedBtn');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  let preparedWhatsAppUrl = '';

  if (enquiryForm) {
    const fullNameInput = document.getElementById('fullName');
    const mobileInput = document.getElementById('mobileNumber');
    const businessNameInput = document.getElementById('businessName');
    const vehicleCategorySelect = document.getElementById('vehicleCategory');
    const locationSelect = document.getElementById('preferredLocation');
    const messageInput = document.getElementById('userMessage');

    const fullNameError = document.getElementById('fullNameError');
    const mobileError = document.getElementById('mobileError');
    const categoryError = document.getElementById('categoryError');

    // Real-time error cleanups
    fullNameInput?.addEventListener('input', () => {
      fullNameInput.classList.remove('error');
      fullNameError?.classList.remove('visible');
    });

    mobileInput?.addEventListener('input', () => {
      mobileInput.classList.remove('error');
      mobileError?.classList.remove('visible');
    });

    vehicleCategorySelect?.addEventListener('change', () => {
      vehicleCategorySelect.classList.remove('error');
      categoryError?.classList.remove('visible');
    });

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Full Name
      const nameVal = fullNameInput?.value.trim() || '';
      if (!nameVal || nameVal.length < 2) {
        fullNameInput?.classList.add('error');
        fullNameError?.classList.add('visible');
        isValid = false;
      }

      // Validate 10-digit Indian mobile number
      const mobileVal = mobileInput?.value.trim() || '';
      const mobilePattern = /^[6-9]\d{9}$/;
      if (!mobilePattern.test(mobileVal)) {
        mobileInput?.classList.add('error');
        mobileError?.classList.add('visible');
        isValid = false;
      }

      // Validate Category
      const categoryVal = vehicleCategorySelect?.value || '';
      if (!categoryVal) {
        vehicleCategorySelect?.classList.add('error');
        categoryError?.classList.add('visible');
        isValid = false;
      }

      if (!isValid) {
        const firstError = enquiryForm.querySelector('.form-control.error');
        firstError?.focus();
        return;
      }

      const businessVal = businessNameInput?.value.trim() || 'Not specified';
      const locationVal = locationSelect?.value || 'Vellore (Head Office)';
      const userMsgVal = messageInput?.value.trim() || 'Please share available vehicle models, catalog, and dealership details.';

      // Construct clean, readable WhatsApp message
      const formattedMessage = 
`Hello Susee Trucks Team,

I would like to enquire about Tata Motors Commercial Vehicles at Susee Trucks.

*Customer Name:* ${nameVal}
*Mobile Number:* ${mobileVal}
*Business Name:* ${businessVal}
*Vehicle Category:* ${categoryVal}
*Preferred Location:* ${locationVal}
*Enquiry Details:* ${userMsgVal}

Please connect with me regarding current models, specifications, and dealership consultation.`;

      // Official WhatsApp Click-to-Chat URL
      preparedWhatsAppUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(formattedMessage)}`;

      // Show confirmation modal before opening
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
      } else {
        // Direct fallback
        window.open(preparedWhatsAppUrl, '_blank', 'noopener,noreferrer');
      }
    });
  }

  // Confirmation Modal actions
  if (modalProceedBtn && modalOverlay) {
    modalProceedBtn.addEventListener('click', () => {
      if (preparedWhatsAppUrl) {
        window.open(preparedWhatsAppUrl, '_blank', 'noopener,noreferrer');
      }
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
      enquiryForm?.reset();
    });
  }

  if (modalCancelBtn && modalOverlay) {
    modalCancelBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
    });
  }

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  });

  /* -------------------------------------------------------------------------
     5. Category Specific WhatsApp Enquiry Buttons
     ------------------------------------------------------------------------- */
  document.querySelectorAll('[data-category-enquiry]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryName = button.getAttribute('data-category-enquiry') || 'Commercial Vehicles';
      const msg = `Hello Susee Trucks Team, I am interested in Tata Motors ${categoryName}. Please share the available models, specifications, pricing, and financing details.`;
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  /* -------------------------------------------------------------------------
     6. Location Specific WhatsApp Enquiry Buttons
     ------------------------------------------------------------------------- */
  document.querySelectorAll('[data-location-enquiry]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const locName = button.getAttribute('data-location-enquiry') || 'Tamil Nadu';
      const msg = `Hello Susee Trucks Team, I would like to enquire about Tata Motors Commercial Vehicle sales and service at your ${locName} location. Please share the branch contact and representative details.`;
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
