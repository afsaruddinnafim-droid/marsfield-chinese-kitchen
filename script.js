/* ═══════════════════════════════════════════════════════
   MARSFIELD CHINESE KITCHEN — script.js
═══════════════════════════════════════════════════════ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     1. STICKY HEADER — shrink on scroll
  ───────────────────────────────────────── */
  const header = document.getElementById('site-header');

  const handleHeaderScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });


  /* ─────────────────────────────────────────
     2. MOBILE NAV TOGGLE
  ───────────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('open', !isOpen);
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
      }
    });
  }


  /* ─────────────────────────────────────────
     3. SMOOTH SCROLLING — for older browsers
        (modern browsers use CSS scroll-behavior)
  ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const offsetTop    = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });


  /* ─────────────────────────────────────────
     4. MENU TABS
  ───────────────────────────────────────── */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.menu-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanel = btn.getAttribute('aria-controls');

      // Update buttons
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
      });

      const activePanel = document.getElementById(targetPanel);
      if (activePanel) {
        activePanel.classList.add('active');

        // Animate items in
        activePanel.querySelectorAll('.menu-item').forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(12px)';
          item.style.transition = 'none';

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              item.style.transition = `opacity 240ms ease ${i * 40}ms, transform 240ms ease ${i * 40}ms`;
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            });
          });
        });
      }
    });
  });

  // Keyboard navigation for tabs (arrow keys)
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
      let newIndex = null;
      if (e.key === 'ArrowRight') newIndex = (index + 1) % tabButtons.length;
      if (e.key === 'ArrowLeft')  newIndex = (index - 1 + tabButtons.length) % tabButtons.length;

      if (newIndex !== null) {
        e.preventDefault();
        tabButtons[newIndex].click();
        tabButtons[newIndex].focus();
      }
    });
  });


  /* ─────────────────────────────────────────
     5. BACK TO TOP BUTTON
  ───────────────────────────────────────── */
  const backToTop = document.getElementById('back-to-top');

  const handleBackToTop = () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleBackToTop, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ─────────────────────────────────────────
     6. CONTACT FORM VALIDATION
  ───────────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    const nameInput    = document.getElementById('contact-name');
    const emailInput   = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const nameError    = document.getElementById('name-error');
    const emailError   = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const setError = (input, errorEl, message) => {
      input.classList.add('error');
      errorEl.textContent = message;
    };

    const clearError = (input, errorEl) => {
      input.classList.remove('error');
      errorEl.textContent = '';
    };

    // Real-time validation on blur
    nameInput.addEventListener('blur', () => {
      if (!nameInput.value.trim()) {
        setError(nameInput, nameError, 'Please enter your name.');
      } else {
        clearError(nameInput, nameError);
      }
    });

    emailInput.addEventListener('blur', () => {
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Please enter your email address.');
      } else if (!validateEmail(emailInput.value.trim())) {
        setError(emailInput, emailError, 'Please enter a valid email address.');
      } else {
        clearError(emailInput, emailError);
      }
    });

    messageInput.addEventListener('blur', () => {
      if (!messageInput.value.trim()) {
        setError(messageInput, messageError, 'Please enter a message.');
      } else {
        clearError(messageInput, messageError);
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        setError(nameInput, nameError, 'Please enter your name.');
        isValid = false;
      } else {
        clearError(nameInput, nameError);
      }

      // Validate email
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Please enter your email address.');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        setError(emailInput, emailError, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }

      // Validate message
      if (!messageInput.value.trim()) {
        setError(messageInput, messageError, 'Please enter a message.');
        isValid = false;
      } else {
        clearError(messageInput, messageError);
      }

      if (isValid) {
        // Simulate form submission (front-end only)
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;

        setTimeout(() => {
          contactForm.reset();
          submitBtn.style.display = 'none';
          formSuccess.hidden = false;
          formSuccess.focus();
        }, 900);
      }
    });
  }


  /* ─────────────────────────────────────────
     7. SCROLL-TRIGGERED FADE IN (light)
        Adds .in-view class when sections
        enter the viewport
  ───────────────────────────────────────── */
  const animatables = document.querySelectorAll(
    '.dish-card, .review-card, .menu-item, .about-text, .value-chip'
  );

  // Set initial state
  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 420ms ease ${(i % 6) * 60}ms, transform 420ms ease ${(i % 6) * 60}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatables.forEach(el => observer.observe(el));


  /* ─────────────────────────────────────────
     8. ACTIVE NAV LINK on scroll
  ───────────────────────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.main-nav a');

  const setActiveLink = () => {
    const scrollPos = window.scrollY + (header ? header.offsetHeight : 0) + 60;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });

});
