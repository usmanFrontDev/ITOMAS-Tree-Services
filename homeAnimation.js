// ============================================
// HOME PAGE - NEXT LEVEL ANIMATIONS
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HEADER ANIMATIONS - Modern & Advanced
// ============================================
function initHeaderAnimations() {
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
function initSection1Animations() {
  const tl = gsap.timeline();

  // a) Heading - Top se fade
  tl.from('.homeSection1Heading', {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, 0.3);

  // b) Para - Bottom se fade
  tl.from('.homeSection1Para', {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  }, 0.6);

  // c) Buttons - Top se stagger
  tl.from('.homeSection1Btn', {
    y: -60,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  }, 0.9);

  // d) Social circle balls - Right se rotate fade stagger
  tl.from('.socialCircleBall', {
    x: 150,
    opacity: 0,
    rotation: 360,
    scale: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'back.out(2)'
  }, 1.2);

  // e) Tree image - Scroll trigger se bottom se ayegi
  ScrollTrigger.create({
    trigger: '#homeSection1Trigger',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 1,
    onEnter: () => {
      gsap.from('.homeSection1TreeImage', {
        y: 200,
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out'
      });
    }
  });

  // f) Chips - Tree ke baad bounce popup
  gsap.from('.homeSectionChip', {
    scrollTrigger: {
      trigger: '.homeSection1TreeImage',
      start: 'top 60%',
      toggleActions: 'play none none none'
    },
    scale: 0,
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'bounce.out'
  });

  // g) Scratch image - Left se fast slide (page phartey wala effect)
  gsap.from('.homeSection1ScratchImage', {
    scrollTrigger: {
      trigger: '.homeSection1TreeImage',
      start: 'top 50%',
      toggleActions: 'play none none none'
    },
    x: -1000,
    opacity: 0,
    duration: 0.6,
    ease: 'power4.out'
  });
}

// ============================================
// SECTION 2 ANIMATIONS
// ============================================
function initSection2Animations() {
  // a) Heading - Top se fade
  gsap.from('.topheading', {
    scrollTrigger: {
      trigger: '#homesection2Trigger',
      start: 'top 75%',
      end: 'top 25%',
      scrub: 1
    },
    y: -80,
    opacity: 0,
    ease: 'power2.out'
  });

  // b) Para - Left se fade
  gsap.from('.topleftpara', {
    scrollTrigger: {
      trigger: '#homesection2Trigger',
      start: 'top 75%',
      end: 'top 25%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    ease: 'power2.out'
  });

  // c) Cards - Flip animation
  const cards = ['.card1', '.card2', '.card3'];
  cards.forEach((card, index) => {
    gsap.from(`.homesection2bottomcards ${card}`, {
      scrollTrigger: {
        trigger: '#homesection2Trigger',
        start: 'top 30%',
        end: 'top 5%',
        scrub: 1
      },
      rotationY: 180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: 'center',
      delay: index * 0.1,
      ease: 'power3.out'
    });
  });

  // d) Background image - Left se scale 0 opacity 0
  gsap.from('.homesection2rightbgimg', {
    scrollTrigger: {
      trigger: '#homesection2Trigger',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 1
    },
    x: 200,
    opacity: 0,
    ease: 'power3.out'
  });

  // e) Right image - Clip path circular reveal
gsap.fromTo(
  '.homesection2right',
  {
    clipPath: 'circle(0% at center)'
  },
  {
    clipPath: 'circle(100% at center)',
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '#homesection2Trigger',
      start: 'top 45%',
      end: 'top 10%',
      scrub: 1
    }
  }
)

//   gsap.to('.homesection2right', {
//     scrollTrigger: {
//       trigger: '#homesection2Trigger',
//       start: 'top 65%',
//       end: 'top 15%',
//       scrub: 1
//     },
//     clipPath: 'circle(100% at center)',
//     duration: 1.5,
//     ease: 'power2.inOut'
//   });
}

// ============================================
// SECTION 3 ANIMATIONS
// ============================================
function initSection3Animations() {
  // a) Heading - Left fade
  gsap.from('.section3topheading', {
    scrollTrigger: {
      trigger: '#homesection3Trigger',
      start: 'top 70%',
      end: 'top 25%',
      scrub: 1
    },
    x: -120,
    opacity: 0,
    ease: 'power2.out'
  });

  // b) Para - Right se fade
  gsap.from('.section3toppara', {
    scrollTrigger: {
      trigger: '#homesection3Trigger',
      start: 'top 70%',
      end: 'top 25%',
      scrub: 1
    },
    x: 120,
    opacity: 0,
    ease: 'power2.out'
  });

  // c) Cards - Modern animations (transition conflict fix)
  const serviceCards = document.querySelectorAll('.homesection3bottomcards > div');
  
  serviceCards.forEach((card, index) => {
    // Remove CSS transitions
    card.style.transition = 'none';
    
    // Main card animation - 3D rotate + slide
    gsap.from(card, {
      scrollTrigger: {
        trigger: '#homesection3Trigger',
        start: 'top 60%',
        end: 'top 15%',
        scrub: 1
      },
      y: 100,
      rotationX: 45,
      opacity: 0,
      scale: 0.9,
      transformOrigin: 'bottom',
      delay: index * 0.08,
      ease: 'power3.out'
    });

    // Content animations
    const heading = card.querySelector('h2');
    const para = card.querySelector('p');
    const button = card.querySelector('button');

    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'top 30%',
          scrub: 1
        },
        y: 40,
        opacity: 0,
        ease: 'power2.out'
      });
    }

    if (para) {
      gsap.from(para, {
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'top 25%',
          scrub: 1
        },
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      });
    }

    if (button) {
      gsap.from(button, {
        scrollTrigger: {
          trigger: card,
          start: 'top 65%',
          end: 'top 20%',
          scrub: 1
        },
        y: 20,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out(1.7)'
      });
    }
  });
}

// ============================================
// SECTION 4 ANIMATIONS
// ============================================
function initSection4Animations() {
  // a) Heading - Left fade
  gsap.from('.section4heading', {
    scrollTrigger: {
      trigger: '#homesection4Trigger',
      start: 'top 70%',
      end: 'top 25%',
      scrub: 1
    },
    x: -120,
    opacity: 0,
    ease: 'power2.out'
  });

  // b) Para - Right se fade
  gsap.from('.section4para', {
    scrollTrigger: {
      trigger: '#homesection4Trigger',
      start: 'top 70%',
      end: 'top 25%',
      scrub: 1
    },
    x: 120,
    opacity: 0,
    ease: 'power2.out'
  });

  // c) Cards - Modern animations (transition conflict fix)
  const hardscapeCards = document.querySelectorAll('.homesection4bottomcards > div');
  
  hardscapeCards.forEach((card, index) => {
    // Remove CSS transitions
    card.style.transition = 'none';
    
    // Main card animation - Perspective tilt
    gsap.from(card, {
      scrollTrigger: {
        trigger: '#homesection4Trigger',
        start: 'top 60%',
        end: 'top 15%',
        scrub: 1
      },
      y: 100,
      rotationY: -30,
      opacity: 0,
      scale: 0.85,
      transformOrigin: 'center',
      delay: index * 0.08,
      ease: 'power3.out'
    });

    // Content animations
    const heading = card.querySelector('h2');
    const para = card.querySelector('p');
    const button = card.querySelector('button');

    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'top 30%',
          scrub: 1
        },
        y: 40,
        opacity: 0,
        ease: 'power2.out'
      });
    }

    if (para) {
      gsap.from(para, {
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'top 25%',
          scrub: 1
        },
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      });
    }

    if (button) {
      gsap.from(button, {
        scrollTrigger: {
          trigger: card,
          start: 'top 65%',
          end: 'top 20%',
          scrub: 1
        },
        y: 20,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out(1.7)'
      });
    }
  });
}

// ============================================
// OUR WORKS SECTION - NEXT LEVEL ANIMATIONS
// ============================================
function initOurWorksAnimations() {
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
// REVIEWS SECTION ANIMATIONS
// ============================================
function initReviewsAnimations() {
  // a) Heading - Left fade
  gsap.from('.reviwstopheading', {
    scrollTrigger: {
      trigger: '#reviewsTrigger',
      start: 'top 70%',
      end: 'top 25%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    ease: 'power2.out'
  });

  // b) Para - Right fade
  gsap.from('.reviwstoppara', {
    scrollTrigger: {
      trigger: '#reviewsTrigger',
      start: 'top 68%',
      end: 'top 23%',
      scrub: 1
    },
    x: 100,
    opacity: 0,
    ease: 'power2.out'
  });

  // c) Cards - Flip animation
  const reviewCards = document.querySelectorAll('.reviewsbottom > div');
  
  reviewCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: '#reviewsTrigger',
        start: 'top 60%',
        end: 'top 15%',
        scrub: 1
      },
      rotationY: 180,
      opacity: 0,
      y: 80,
      scale: 0.8,
      transformOrigin: 'center',
      delay: index * 0.1,
      ease: 'power3.out'
    });
  });
}

// ============================================
// FOOTER ANIMATIONS
// ============================================
function initFooterAnimations() {
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
function initAllHomeAnimations() {
  initHeaderAnimations();
  initSection1Animations();
  initSection2Animations();
  initSection3Animations();
  initSection4Animations();
  initOurWorksAnimations();
  initReviewsAnimations();
  initFooterAnimations();

  ScrollTrigger.refresh();
}

// Run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllHomeAnimations);
} else {
  initAllHomeAnimations();
}

// Responsive refresh
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});
