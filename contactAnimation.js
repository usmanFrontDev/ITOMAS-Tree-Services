// ============================================
// CONTACT PAGE - FOOTER ANIMATIONS
// (NON-SCRUB BASED - TRIGGER ONCE)
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HEADER ANIMATIONS
// ============================================
function initContactHeaderAnimations() {
  // Logo - Slide down with elastic bounce
  gsap.from('.headerLogo', {
    y: -100,
    opacity: 0,
    rotation: -15,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.2
  });

  // Menu items - Wave stagger effect
  gsap.from('.headerMenuItem', {
    y: -50,
    opacity: 0,
    rotation: 5,
    duration: 0.8,
    stagger: {
      each: 0.15,
      from: 'start',
      ease: 'power2.out'
    },
    ease: 'back.out(2)',
    delay: 0.5
  });

  // Mobile menu button
  gsap.from('#menuOpenBtn', {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(2)',
    delay: 0.8
  });
}

// ============================================
// FOOTER ANIMATIONS - NON-SCRUB
// ============================================
function initContactFooterAnimations() {
  // a) SVG Line - Left se clip reveal (ONE TIME TRIGGER)
  gsap.from('.footerBigLine', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.5,
    ease: 'power2.out'
  });

  gsap.to('.footerBigLine', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    clipPath: 'inset(0 0% 0 0)',
    duration: 1.5,
    ease: 'power2.out'
  });

  // b) Social circle balls - Right se (ONE TIME)
  gsap.from('#footer .socialCircleBall', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    x: 150,
    opacity: 0,
    rotation: 360,
    scale: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'back.out(2)',
    delay: 0.3
  });

  // c) Footer left content - Stagger left se (ONE TIME)
  const footerLeftItems = [
    { selector: '.footerLogo', delay: 0 },
    { selector: '.footerHeading', delay: 0.1 },
    { selector: '.footerPara', delay: 0.2 }
  ];

  footerLeftItems.forEach(item => {
    const element = document.querySelector(item.selector);
    
    if (element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: '#footer',
          start: 'top 65%',
          toggleActions: 'play none none none'
        },
        x: -120,
        opacity: 0,
        duration: 1,
        delay: item.delay,
        ease: 'power3.out'
      });
    }
  });

  // Footer info items with stagger
  const footerInfoItems = document.querySelectorAll('.footerInfo');
  footerInfoItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 60%',
        toggleActions: 'play none none none'
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.3 + (index * 0.1),
      ease: 'power2.out'
    });

    // Icon rotation effect
    const icon = item.querySelector('img');
    if (icon) {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: '#footer',
          start: 'top 60%',
          toggleActions: 'play none none none'
        },
        rotation: -180,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3 + (index * 0.1),
        ease: 'back.out(2)'
      });
    }
  });

  // d) Form - Right se fade (ONE TIME)
  gsap.from('#footer form', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 65%',
      toggleActions: 'play none none none'
    },
    x: 120,
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2
  });

  // Form heading - Zoom in
  gsap.from('.footerFormHeading', {
    scrollTrigger: {
      trigger: '#footer form',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(2)',
    delay: 0.4
  });

  // e) Form fields - Right se stagger (ONE TIME)
  const formFields = document.querySelectorAll('.formInputField');
  formFields.forEach((field, index) => {
    // Field container
    gsap.from(field, {
      scrollTrigger: {
        trigger: '#footer form',
        start: 'top 65%',
        toggleActions: 'play none none none'
      },
      x: 80,
      opacity: 0,
      duration: 0.8,
      delay: 0.5 + (index * 0.1),
      ease: 'power2.out'
    });

    // Label animation
    const label = field.querySelector('label');
    if (label) {
      gsap.from(label, {
        scrollTrigger: {
          trigger: '#footer form',
          start: 'top 65%',
          toggleActions: 'play none none none'
        },
        x: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.6 + (index * 0.1),
        ease: 'power2.out'
      });
    }

    // Input border grow effect
    const input = field.querySelector('input, textarea');
    if (input) {
      gsap.from(input, {
        scrollTrigger: {
          trigger: '#footer form',
          start: 'top 65%',
          toggleActions: 'play none none none'
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        delay: 0.7 + (index * 0.1),
        ease: 'power2.out'
      });
    }
  });

  // Form button - Bounce effect (ONE TIME)
  gsap.from('.footerFormBtn', {
    scrollTrigger: {
      trigger: '#footer form',
      start: 'top 60%',
      toggleActions: 'play none none none'
    },
    x: 60,
    y: 40,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.8 + (formFields.length * 0.1),
    ease: 'elastic.out(1, 0.6)'
  });
}



// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================
function initAllContactAnimations() {
  initContactHeaderAnimations();
  initContactFooterAnimations();
  ScrollTrigger.refresh();
}

// Run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllContactAnimations);
} else {
  initAllContactAnimations();
}

// Responsive refresh
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});