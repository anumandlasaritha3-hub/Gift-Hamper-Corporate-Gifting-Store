
/* ==========================================
   VELMORA ABOUT - OUR STORY ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const storySection = document.querySelector(".vm-about-story");

  if (!storySection) return;

  const revealElements = [
    storySection.querySelector(".vm-about-story-visual"),
    storySection.querySelector(".vm-about-story-kicker"),
    storySection.querySelector(".vm-about-story-content h2"),
    storySection.querySelector(".vm-about-story-lead"),
    ...storySection.querySelectorAll(".vm-about-story-description"),
    ...storySection.querySelectorAll(".vm-about-story-feature"),
    storySection.querySelector(".vm-about-story-btn")
  ].filter(Boolean);

  // Respect reduced-motion preferences
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  // Prepare elements before revealing
  revealElements.forEach((element, index) => {
    element.classList.add("vm-story-reveal");
    element.style.setProperty(
      "--story-delay",
      `${Math.min(index * 80, 480)}ms`
    );
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vm-story-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

});
















/* ==========================================
   VELMORA ABOUT - OUR PHILOSOPHY
   SCROLL REVEAL ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  const philosophySection = document.querySelector(
    ".vm-about-philosophy"
  );

  if (!philosophySection) return;

  const revealElements = [
    philosophySection.querySelector(
      ".vm-about-philosophy-heading"
    ),

    philosophySection.querySelector(
      ".vm-about-philosophy-intro"
    ),

    ...philosophySection.querySelectorAll(
      ".vm-about-philosophy-card"
    ),

    philosophySection.querySelector(
      ".vm-about-philosophy-footer"
    )
  ].filter(Boolean);

  /* REDUCED MOTION */
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    reducedMotion ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  /* SET INITIAL ANIMATION */
  revealElements.forEach((element, index) => {

    element.classList.add("vm-ph-reveal");

    element.style.setProperty(
      "--ph-delay",
      `${Math.min(index * 90, 450)}ms`
    );

  });

  /* SCROLL OBSERVER */
  const philosophyObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "vm-ph-visible"
          );

          philosophyObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  /* OBSERVE ELEMENTS */
  revealElements.forEach((element) => {
    philosophyObserver.observe(element);
  });

});




















/* ==========================================
   VELMORA EXPERIENCE - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-experience");

  if (!section) return;

  const elements = [
    section.querySelector(".vm-experience-kicker"),
    section.querySelector(".vm-experience-content h2"),
    section.querySelector(".vm-experience-intro"),
    ...section.querySelectorAll(".vm-experience-step"),
    section.querySelector(".vm-experience-btn"),
    section.querySelector(".vm-experience-visual")
  ].filter(Boolean);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add("vm-exp-reveal");

    element.style.setProperty(
      "--exp-delay",
      `${Math.min(index * 75, 400)}ms`
    );
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-exp-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -20px 0px"
  });

  elements.forEach(element => observer.observe(element));

});




















/* ==========================================
   MISSION & VISION - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-purpose");

  if (!section) return;

  const elements = [
    section.querySelector(".vm-purpose-heading"),
    ...section.querySelectorAll(".vm-purpose-panel"),
    section.querySelector(".vm-purpose-statement")
  ].filter(Boolean);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    reducedMotion ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add("vm-purpose-reveal");

    element.style.setProperty(
      "--purpose-delay",
      `${index * 110}ms`
    );
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vm-purpose-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  elements.forEach(element => observer.observe(element));

});














/* ==========================================
   WHY CHOOSE VELMORA - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-why");
  if (!section) return;

  const elements = [
    section.querySelector(".vm-why-heading"),
    ...section.querySelectorAll(".vm-why-item"),
    section.querySelector(".vm-why-visual"),
    section.querySelector(".vm-why-bottom")
  ].filter(Boolean);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add("vm-why-reveal");
    element.style.setProperty(
      "--why-delay",
      `${Math.min(index * 80, 400)}ms`
    );
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-why-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -20px 0px"
  });

  elements.forEach(element => observer.observe(element));

});













/* ==========================================
   ABOUT CTA - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm-about-cta");
  if (!section) return;

  const elements = [
    section.querySelector(".vm-about-cta-kicker"),
    section.querySelector("h2"),
    section.querySelector(".vm-about-cta-container > p"),
    section.querySelector(".vm-about-cta-actions"),
    section.querySelector(".vm-about-cta-signature")
  ].filter(Boolean);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add("vm-cta-reveal");
    element.style.setProperty(
      "--cta-delay",
      `${index * 100}ms`
    );
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-cta-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -20px 0px"
  });

  elements.forEach(element => observer.observe(element));

});
