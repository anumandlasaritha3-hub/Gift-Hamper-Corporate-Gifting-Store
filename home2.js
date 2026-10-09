
/* ==========================================
   VELMORA HOME 2 - HERO JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const scrollButton = document.querySelector(".vm2-hero-scroll");

  if (!scrollButton) return;

  scrollButton.addEventListener("click", (event) => {

    const target = document.querySelector("#vm2-next");

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth",
      block: "start"
    });

  });

});
















/* ==========================================
   HOME 2 - COLLECTION REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(
    ".vm2-collection-reveal"
  );

  if (!items.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(item => {
      item.classList.add("vm2-collection-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("vm2-collection-visible");
        obs.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.1
  });

  items.forEach(item => observer.observe(item));

});


















/* ==========================================
   HOME 2 - FINISHING TOUCH ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm2-finish");
  if (!section) return;

  const revealItems = section.querySelectorAll(".vm2-finish-reveal");
  const detailRows = section.querySelectorAll(".vm2-finish-detail");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Set initial row states only when animations are enabled
  if (!reducedMotion && "IntersectionObserver" in window) {
    detailRows.forEach((row, index) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(15px)";
      row.style.transition =
        `opacity .55s ease ${index * 120}ms, transform .55s ease ${index * 120}ms`;
    });
  }

  const showSection = () => {
    revealItems.forEach(item => {
      item.classList.add("vm2-finish-visible");
    });

    detailRows.forEach(row => {
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    });
  };

  if (reducedMotion || !("IntersectionObserver" in window)) {
    showSection();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showSection();
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  observer.observe(section);

});











/* ==========================================
   HOME 2 - EXECUTIVE EDIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm2-executive");
  if (!section) return;

  const tabs = section.querySelectorAll(".vm2-executive-tab");
  const images = section.querySelectorAll(".vm2-executive-image");
  const title = section.querySelector(".vm2-executive-title");
  const description = section.querySelector(".vm2-executive-description");
  const cta = section.querySelector(".vm2-executive-cta");
  const current = section.querySelector(".vm2-executive-current");

  const collections = [
    {
      title: "A Gesture of <em>Distinction.</em>",
      description:
        "Celebrate partnerships and professional milestones with gifts that leave a lasting impression.",
      button: "Explore Corporate Gifting",
      link: "corporate.html"
    },
    {
      title: "Client <em>Appreciation.</em>",
      description:
        "Show your clients how much they matter with thoughtfully curated gifts that strengthen every connection.",
      button: "Discover Client Gifts",
      link: "corporate.html"
    },
    {
      title: "Celebrate Every <em>Achievement.</em>",
      description:
        "Mark important milestones with refined gifting experiences created for extraordinary moments.",
      button: "Explore Celebration Gifts",
      link: "products.html"
    }
  ];

  let activeIndex = 0;

  function changeCollection(index) {
    if (index === activeIndex) return;

    activeIndex = index;
    const collection = collections[index];

    images.forEach((img, i) => {
      img.classList.toggle("is-active", i === index);
    });

    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-pressed", String(active));
    });

    title.innerHTML = collection.title;
    description.textContent = collection.description;
    cta.href = collection.link;
    cta.innerHTML =
      collection.button +
      ' <i class="fa-solid fa-arrow-up-right-from-square"></i>';

    current.textContent = String(index + 1).padStart(2, "0");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      changeCollection(Number(tab.dataset.index));
    });
  });

  /* SCROLL REVEAL */

  const revealElements = section.querySelectorAll(
    ".vm2-executive-reveal"
  );

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealElements.forEach(el => {
      el.classList.add("vm2-executive-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm2-executive-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));

});









/* ==========================================
   HOME 2 - ART OF GIVING ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm2-art");
  if (!section) return;

  const items = section.querySelectorAll(".vm2-art-reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach(item => item.classList.add("vm2-art-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm2-art-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  items.forEach(item => observer.observe(item));

});



















/* ==========================================
   HOME 2 - VELMORA PRIVILEGE ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".vm2-privilege");
  if (!section) return;

  const items = section.querySelectorAll(".vm2-privilege-reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach(item => {
      item.classList.add("vm2-privilege-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm2-privilege-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  items.forEach(item => observer.observe(item));

});

















/* ==========================================
   HOME 2 - GIFTING CONCIERGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".vm2-concierge");
  if (!section) return;

  const tabs = section.querySelectorAll(".vm2-concierge-tab");
  const image = document.getElementById("vm2ConciergeImage");
  const label = document.getElementById("vm2ConciergeLabel");
  const title = document.getElementById("vm2ConciergeTitle");
  const description = document.getElementById("vm2ConciergeDescription");
  const index = document.getElementById("vm2ConciergeIndex");
  const link = document.getElementById("vm2ConciergeLink");

  const gifts = {
    birthday: {
      image: "images/home2-gift-birthday.jpg",
      alt: "Luxury birthday gift hamper",
    
      title: "A Birthday <em>to Remember.</em>",
      description:
        "Make their special day unforgettable with a thoughtfully curated selection of delightful surprises. Celebrate their happiness with beautiful gifts that bring smiles, warmth, and joy to every moment. From charming keepsakes to elegant gift hampers, make every birthday a cherished memory filled with love and excitement.",
      index: "01 / 04",
      link: "products.html#occasions"
    },
    anniversary: {
      image: "images/home2-gift-anniversary.jpg",
      alt: "Romantic anniversary gift hamper",
    
      title: "Celebrate <em>Your Story.</em>",
      description:
        "Honor the moments you've shared with a gift that expresses love, warmth, and lasting affection. Celebrate your beautiful journey together with thoughtful surprises that create cherished memories and make every moment even more special.",
      index: "02 / 04",
      link: "products.html#occasions"
    },
    corporate: {
      image: "images/home2-gift-corporate.jpg",
      alt: "Premium corporate gift hamper",
   
      title: "Gift with <em>Distinction.</em>",
      description:
        "Express appreciation and strengthen professional relationships through beautifully curated gifts. Celebrate meaningful partnerships and recognize valuable contributions with elegant gifting collections designed to leave a lasting impression. From thoughtful corporate hampers to sophisticated personalized presents, every gift reflects gratitude, care, and professionalism. Make every business milestone memorable with timeless gestures that inspire trust and build stronger connections.",
      index: "03 / 04",
      link: "corporate.html"
    },
    festive: {
      image: "images/home2-gift-festive.jpg",
      alt: "Festive luxury gift hamper",
      
      title: "Celebrate <em>Beautifully.</em>",
      description:
        "Share the warmth of the season with memorable gifts designed to spread happiness and delight. Celebrate every special moment with thoughtfully curated collections that bring joy to your loved ones. From elegant gift hampers to charming surprises, every detail is crafted to make your celebrations truly unforgettable. Create beautiful memories and make this season even more meaningful with gifts that come straight from the heart.",
      index: "04 / 04",
      link: "products.html#festive"
    }
  };

  let activeGift = "birthday";

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.gift;
      if (!gifts[key] || key === activeGift) return;

      activeGift = key;
      const gift = gifts[key];

      tabs.forEach(button => {
        const active = button.dataset.gift === key;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      image.classList.add("is-changing");

      const nextImage = new Image();
      nextImage.onload = () => {
        if (activeGift !== key) return;
        image.src = gift.image;
        image.alt = gift.alt;
        image.classList.remove("is-changing");
      };
      nextImage.onerror = () => {
        image.classList.remove("is-changing");
      };
      nextImage.src = gift.image;

      label.textContent = gift.label;
      title.innerHTML = gift.title;
      description.textContent = gift.description;
      index.textContent = gift.index;
      link.href = gift.link;
    });
  });

  /* SCROLL REVEAL */

  const revealItems = section.querySelectorAll(".vm2-concierge-reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealItems.forEach(item => {
      item.classList.add("vm2-concierge-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm2-concierge-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
});
