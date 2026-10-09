
/* ==========================================
   VELMORA HOME 1 - HERO ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".vm-hero");

  if (!hero) return;

  /* LEFT SIDE CONTENT ANIMATIONS */

  const animatedElements = [
    {
      selector: ".vm-hero-kicker",
      animation: "fadeRight",
      delay: 100
    },
    {
      selector: ".vm-hero h1",
      animation: "fadeUp",
      delay: 250
    },
    {
      selector: ".vm-hero-description",
      animation: "fadeUp",
      delay: 400
    },
    {
      selector: ".vm-hero-buttons",
      animation: "fadeUp",
      delay: 550
    },
    {
      selector: ".vm-hero-bottom",
      animation: "fadeUp",
      delay: 700
    }
  ];

  /* APPLY LEFT SIDE ANIMATIONS */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  animatedElements.forEach(({ selector, animation, delay }) => {

    const element = hero.querySelector(selector);

    if (!element) return;

    element.style.animation =
      `${animation} 0.9s ease ${delay}ms both`;

  });

  /* RIGHT SIDE PREMIUM ANIMATIONS
     Handled automatically by home.css:

     .vm-hero-visual
     .vm-hero-image-wrap
     .vm-hero-image-wrap img
     .vm-hero-floating-note
     .vm-hero-image-caption
  */

});

















/* ==========================================
   VELMORA - INTRO SECTION SCROLL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const introElements = document.querySelectorAll(
    ".vm-intro-visual, .vm-intro-content"
  );

  if (!introElements.length) return;

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    introElements.forEach(element => {
      element.classList.add("vm-intro-visible");
    });
    return;
  }

  const introObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vm-intro-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  introElements.forEach(element => {
    introObserver.observe(element);
  });

});





















/* ==========================================
   VELMORA HOME 1 - OCCASION ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-occasions");

  if (!section) return;

  const cards = section.querySelectorAll(".vm-occasion-card");

  if (!cards.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* Show cards without animations when needed */

  if (reduceMotion || !("IntersectionObserver" in window)) {
    cards.forEach(card => {
      card.classList.add("vm-occasion-visible");
    });
    return;
  }

  /* Enable scroll animation */

  section.classList.add("vm-animate-ready");

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const card = entry.target;
        const index = Array.from(cards).indexOf(card);

        /* Stagger each card */
        card.style.transitionDelay = `${index * 110}ms`;

        card.classList.add("vm-occasion-visible");

        obs.unobserve(card);

      });

    },
    {
      threshold: 0.12
    }
  );

  cards.forEach(card => observer.observe(card));

});














/* ==========================================
   PERSONALIZED GIFTING - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-personal");
  if (!section) return;

  const elements = section.querySelectorAll(
    ".vm-personal-content, .vm-personal-visual"
  );

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(element => observer.observe(element));
  section.classList.add("js-personal-ready");

});
















/* ==========================================
   HOME 1 - WHY CHOOSE VELMORA ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-promise");

  if (!section) return;

  const cards = section.querySelectorAll(".vm-promise-card");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const card = entry.target;
      const index = Array.from(cards).indexOf(card);

      card.style.transitionDelay = `${index * 100}ms`;

      card.classList.add("vm-promise-visible");

      obs.unobserve(card);

    });

  }, {
    threshold: 0.12
  });

  cards.forEach(card => observer.observe(card));

  section.classList.add("vm-promise-ready");

});





















/* ==========================================
   HOME 1 - CORPORATE GIFTING ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-corporate");

  if (!section) return;

  const elements = section.querySelectorAll(
    ".vm-corporate-visual, .vm-corporate-content"
  );

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("vm-corporate-visible");
      obs.unobserve(entry.target);
    });

  }, {
    threshold: 0.12
  });

  elements.forEach(element => observer.observe(element));
  section.classList.add("vm-corporate-ready");

});















/* ==========================================
   HOME 1 - GALLERY SCROLL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-gallery");
  if (!section) return;

  const items = section.querySelectorAll(".vm-gallery-item");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const item = entry.target;
      const index = Array.from(items).indexOf(item);

      item.style.transitionDelay = `${index * 120}ms`;
      item.classList.add("vm-gallery-visible");

      obs.unobserve(item);

    });

  }, {
    threshold: 0.12
  });

  items.forEach(item => observer.observe(item));

  section.classList.add("vm-gallery-ready");

});












/* ==========================================
   HOME 1 - FINAL CTA ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-final-cta");
  if (!section) return;

  const content = section.querySelector(".vm-final-cta-content");
  if (!content) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      content.classList.add("vm-final-cta-visible");
      obs.unobserve(entry.target);

    });

  }, {
    threshold: 0.15
  });

  observer.observe(section);
  section.classList.add("vm-final-cta-ready");

});
