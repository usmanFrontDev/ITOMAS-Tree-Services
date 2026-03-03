// ============================================
// SERVICE PAGE - NEXT LEVEL ANIMATIONS
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HEADER ANIMATIONS
// ============================================
function initServiceHeaderAnimations() {
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
// SECTION 1 - HERO ANIMATIONS
// ============================================
function initServiceSection1Animations() {
  // a) Heading - Left se fade
  gsap.from('.yardSection1Heading', {
    x: -150,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3
  });

  // b) Para - Left se fade
  gsap.from('.yardSection1Para', {
    x: -120,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.6
  });
}

// ============================================
// SECTION 2 ANIMATIONS - SERVICES
// ============================================
function initServiceSection2Animations() {
  // a) SVG Line - Top se bottom clip reveal (ongoing line)
  gsap.from('.bigSvgLineGoing', {
    scrollTrigger: {
      trigger: '#yardSection2Trigger',
      start: 'top 80%',
      end: 'top -250%',
      scrub: 2,
    },
    clipPath: 'inset(0 0 100% 0)',
    ease: 'none'
  });

  gsap.to('.bigSvgLineGoing', {
    scrollTrigger: {
      trigger: '#yardSection2Trigger',
      start: 'top 100%',
      end: 'bottom 0%',
      scrub: 2
    },
    clipPath: 'inset(0 0 0 0)',
    ease: 'none'
  });

  // b) PART 1 - Tree Removal Services
  // Heading - Left fade
  gsap.from('.yardSection2Part1Heading', {
    scrollTrigger: {
      trigger: '.yardSection2Part1Heading',
      start: 'top 75%',
      end: 'top 25%',
      scrub: 1
    },
    x: -120,
    opacity: 0,
    ease: 'power2.out'
  });

  // Para - Left fade
  gsap.from('.yardSection2Part1Para', {
    scrollTrigger: {
      trigger: '.yardSection2Part1Para',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    ease: 'power2.out'
  });

  // Leaf card - Circular clip reveal from center
gsap.fromTo(
  '.yardSection2Part1LeafCard',
  {
    clipPath: 'circle(0% at center)',
    scale: 0.9
  },
  {
    clipPath: 'circle(100% at center)',
    scale: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.yardSection2Part1LeafCard',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 1
    }
  }
);


  // c) PART 2 - Tree Pruning
  // Heading - Left fade
  gsap.from('.yardSection2Part2Heading', {
    scrollTrigger: {
      trigger: '.yardSection2Part2Heading',
      start: 'top 75%',
      end: 'top 25%',
      scrub: 1
    },
    x: -120,
    opacity: 0,
    ease: 'power2.out'
  });

  // Para - Left fade
  gsap.from('.yardSection2Part2Para', {
    scrollTrigger: {
      trigger: '.yardSection2Part2Para',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    ease: 'power2.out'
  });

 gsap.fromTo(
  '.yardSection2Part2LeafCard',
  {
    clipPath: 'circle(0% at center)',
    scale: 0.9
  },
  {
    clipPath: 'circle(100% at center)',
    scale: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.yardSection2Part2LeafCard',
       start: 'top 60%',
      end: 'top 10%',
      scrub: 1
    }
  }
);


  // d) PART 3 - Stump Grinding
  // Heading - Left fade
  gsap.from('.yardSection2Part3Heading', {
    scrollTrigger: {
      trigger: '.yardSection2Part3Heading',
      start: 'top 75%',
      end: 'top 25%',
      scrub: 1
    },
    x: -120,
    opacity: 0,
    ease: 'power2.out'
  });

  // Para - Left fade
  gsap.from('.yardSection2Part3Para', {
    scrollTrigger: {
      trigger: '.yardSection2Part3Para',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    ease: 'power2.out'
  });

  // Leaf card - Circular clip reveal
gsap.fromTo(
  '.yardSection2Part3LeafCard',
  {
    clipPath: 'circle(0% at center)',
    scale: 0.9
  },
  {
    clipPath: 'circle(100% at center)',
    scale: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.yardSection2Part3LeafCard',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 1
    }
  }
);

}

// ============================================
// SECTION 3 - OWNER OPERATED SECTION
// ============================================
function initServiceSection3Animations() {
  // a) Heading - Top se fade
  gsap.from('.yardSection3Heading', {
    scrollTrigger: {
      trigger: '#yardSection3Trigger',
      start: 'top 30%',
      end: 'top 10%',
      scrub: 1
    },
    y: -80,
    opacity: 0,
    scale: 0.95,
    ease: 'power3.out'
  });

  // b) Para - Bottom se fade
  gsap.from('.yardSection3Para', {
    scrollTrigger: {
      trigger: '#yardSection3Trigger',
       start: 'top 30%',
      end: 'top 10%',
      scrub: 1
    },
    y: 60,
    opacity: 0,
    ease: 'power2.out'
  });
}

// ============================================
// OUR WORKS SECTION - NEXT LEVEL ANIMATIONS
// ============================================
function initServiceOurWorksAnimations() {
  // a) Heading - Bottom se fade
  const worksHeading = document.querySelector('.carousel-wrapper').previousElementSibling;
  
  if (worksHeading) {
    gsap.from(worksHeading, {
      scrollTrigger: {
        trigger: worksHeading,
        start: 'top 75%',
        end: 'top 30%',
        scrub: 1
      },
      y: 80,
      opacity: 0,
      scale: 0.9,
      ease: 'power3.out'
    });
  }

  // b) Cards - NEXT LEVEL animations
  const carouselCards = document.querySelectorAll('.carousel-card');
  
  carouselCards.forEach((card, index) => {
    // Multi-directional entry with rotation
    const direction = index % 2 === 0 ? -1 : 1;
    
    gsap.from(card, {
      scrollTrigger: {
        trigger: '.carousel-wrapper',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1
      },
      y: 150,
      x: direction * 80,
      rotation: direction * 15,
      opacity: 0,
      scale: 0.7,
      delay: index * 0.06,
      ease: 'power4.out'
    });

    // Image zoom effect
    const img = card.querySelector('img');
    if (img) {
      gsap.from(img, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        },
        scale: 1.3,
        opacity: 0.5,
        ease: 'power2.out'
      });
    }
  });
}

// ============================================
// FOOTER ANIMATIONS
// ============================================
function initServiceFooterAnimations() {
  // a) SVG Line - Left se clip reveal
  gsap.from('.footerBigLine', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 2
    },
    clipPath: 'inset(0 100% 0 0)',
    ease: 'power2.inOut'
  });

  gsap.to('.footerBigLine', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 2
    },
    clipPath: 'inset(0 0% 0 0)',
    ease: 'power2.inOut'
  });

  // b) Social circle balls - Right se
  gsap.from('.footersocialCircleBall', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 2
    },
    x: 150,
    opacity: 0,
    rotation: 360,
    scale: 0,
    stagger: 0.15,
    ease: 'back.out(2)'
  });

  // c) Footer left content - Stagger left se
  const footerLeftItems = [
    '.footerLogo',
    '.footerHeading',
    '.footerPara',
    ...document.querySelectorAll('.footerInfo')
  ];

  console.log(footerLeftItems)
  footerLeftItems.forEach((item, index) => {
    const element = typeof item === 'string' ? document.querySelector(item) : item;
    
    if (element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: '#footer',
          start: 'top 30%',
          end: 'top 50%',
          scrub: 2
        },
        x: -100,
        opacity: 0,
        delay: index * 0.05,
        ease: 'power2.out'
      });
    }
  });

  // d) Form - Right se fade
  gsap.from('#footer form', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 20%',
      end: 'top -45%',
      scrub: 1
    },
    x: 100,
    opacity: 0,
    scale: 0.95,
    ease: 'power2.out'
  });

  // e) Form fields - Right se stagger
  const formFields = document.querySelectorAll('.formInputField');
  formFields.forEach((field, index) => {
    gsap.from(field, {
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 20%',
        end: 'top -45%',
        scrub: 1
      },
      x: 80,
      opacity: 0,
      delay: index * 0.06,
      ease: 'power2.out'
    });
  });

  // Form button
  gsap.from('.footerFormBtn', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 55%',
      end: 'top 5%',
      scrub: 1
    },
    x: 60,
    opacity: 0,
    scale: 0.9,
    ease: 'back.out(1.7)'
  });

 // f) Bottom backdrop div - Center se clip reveal
  const footerBottomDiv = document.querySelector('.footerBottomDiv');
  
  if (footerBottomDiv) {
gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({

    // ✅ Mobile (screen < 640px)
    "(max-width: 639px)": function () {
      gsap.fromTo(
        footerBottomDiv,
        {
          clipPath: 'inset(0 50% 0 50%)'
        },
        {
          clipPath: 'inset(0 0% 0 0%)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '#footer',
            start: 'top -100%',
            end: 'top -105%', // 👈 pehle finish ho jayega
            scrub: 1
          }
        }
      );
    },

    // ✅ Desktop (640px and above)
    "(min-width: 640px)": function () {
      gsap.fromTo(
        footerBottomDiv,
        {
          clipPath: 'inset(0 50% 0 50%)'
        },
        {
          clipPath: 'inset(0 0% 0 0%)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '#footer',
            start: 'top -100%',
            end: 'top -115%', // 👈 normal desktop end
            scrub: 1
          }
        }
      );
    }

  });

  }
}

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================
function initAllServiceAnimations() {
  initServiceHeaderAnimations();
  initServiceSection1Animations();
  initServiceSection2Animations();
  initServiceSection3Animations();
  initServiceOurWorksAnimations();
  initServiceFooterAnimations();

  ScrollTrigger.refresh();
}

// Run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllServiceAnimations);
} else {
  initAllServiceAnimations();
}

// Responsive refresh
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});
