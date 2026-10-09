
/* ==========================================
   VELMORA - CORPORATE GIFTING PAGE JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* 1. SMOOTH SCROLL */

    const scrollLinks = document.querySelectorAll(
        '.cg-banner a[href^="#"]'
    );

    scrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.getElementById(
                targetId.substring(1)
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

        });
    });


    /* 2. BUTTON CLICK EFFECT */

    const bannerButtons = document.querySelectorAll(
        ".cg-banner-buttons a"
    );

    bannerButtons.forEach(button => {

        button.addEventListener("click", () => {
            button.classList.add("cg-btn-clicked");

            setTimeout(() => {
                button.classList.remove("cg-btn-clicked");
            }, 250);
        });

    });


    /* 3. SCROLL REVEAL ANIMATION
       For upcoming corporate sections */

    const revealElements = document.querySelectorAll(
        ".cg-reveal"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("cg-visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(element => {
            element.classList.add("cg-visible");
        });
    }

});














/* ==========================================
   SECTION 3 - CORPORATE COLLECTION JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const collection = document.querySelector(".cg-collection");

    if (!collection) return;

    const heading = collection.querySelector(".cg-collection-heading");
    const cards = collection.querySelectorAll(".cg-collection-card");
    const bottom = collection.querySelector(".cg-collection-bottom");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        return;
    }

    /* SCROLL REVEAL */

    const revealItems = [
        heading,
        ...cards,
        bottom
    ].filter(Boolean);

    revealItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(35px)";
        item.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        if (cards.length && item.classList.contains("cg-collection-card")) {
            item.style.transitionDelay =
                `${(Array.from(cards).indexOf(item) % 4) * 0.12}s`;
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item) => {
        observer.observe(item);
    });

});














/* ==========================================
   SECTION 4 - VELMORA GIFT ATELIER
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const atelier = document.querySelector(".cg-atelier");

    if (!atelier) return;

    const tabs = Array.from(
        atelier.querySelectorAll(".cg-atelier-tab")
    );

    const image = atelier.querySelector("#cg-atelier-image");
    const current = atelier.querySelector("#cg-atelier-current");
    const eyebrow = atelier.querySelector("#cg-atelier-eyebrow");
    const title = atelier.querySelector("#cg-atelier-title");
    const description = atelier.querySelector(
        "#cg-atelier-description"
    );
    const highlights = atelier.querySelector(
        "#cg-atelier-highlights"
    );
    const panel = atelier.querySelector("#cg-atelier-panel");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* TAB CONTENT */

    const atelierData = {

        packaging: {
            number: "01",
            eyebrow: "THE PRESENTATION",
            title: "Wrapped in <em>Elegance.</em>",
            description:
                "Before a gift is opened, its presentation " +
                "speaks volumes. Discover thoughtfully designed " +
                "packaging that reflects the care and intention " +
                "behind every gesture.",
            image: "images/atelier-packaging.jpg",
            alt: "Luxury corporate gift box with elegant packaging",
            highlights: [
                "Elegant premium gift boxes",
                "Refined textures and finishes",
                "Beautifully considered presentation"
            ]
        },

        personal: {
            number: "02",
            eyebrow: "THE PERSONAL CONNECTION",
            title: "Made Meaningfully <em>Yours.</em>",
            description:
                "Give every gesture a personal identity. " +
                "From beautifully placed brand details to " +
                "thoughtful messages, create a gifting experience " +
                "that feels unmistakably yours.",
            image: "images/atelier-personal.jpg",
            alt: "Personalized corporate gift with branded stationery",
            highlights: [
                "Custom branding and monograms",
                "Personalized message cards",
                "Thoughtful recipient details"
            ]
        },

        finishing: {
            number: "03",
            eyebrow: "THE FINAL FLOURISH",
            title: "Perfected in <em>Every Detail.</em>",
            description:
                "The smallest details often leave the greatest " +
                "impression. Elegant ribbons, considered " +
                "arrangements, and refined finishing touches " +
                "bring each gifting experience together.",
            image: "images/atelier-finishing.jpg",
            alt: "Luxury gift wrapping with ribbon and elegant finishing",
            highlights: [
                "Beautiful ribbon and wrapping details",
                "Carefully arranged gift contents",
                "Refined finishing touches"
            ]
        }

    };

    let activeKey = "packaging";
    let changeTimer = null;

    /* PRELOAD IMAGES */

    Object.values(atelierData).forEach(data => {
        const preload = new Image();
        preload.src = data.image;
    });

    /* UPDATE CONTENT */

    function updateAtelier(key, moveFocus = false) {

        const data = atelierData[key];

        if (!data) return;

        activeKey = key;

        tabs.forEach(tab => {

            const isActive = tab.dataset.atelier === key;

            tab.classList.toggle("active", isActive);

            tab.setAttribute(
                "aria-selected",
                String(isActive)
            );

            tab.tabIndex = isActive ? 0 : -1;

            if (isActive) {
                panel.setAttribute(
                    "aria-labelledby",
                    tab.id
                );

                if (moveFocus) tab.focus();
            }

        });

        eyebrow.textContent = data.eyebrow;

        // Trusted, locally defined heading markup
        title.innerHTML = data.title;

        description.textContent = data.description;
        current.textContent = data.number;

        /* UPDATE HIGHLIGHTS */

        highlights.replaceChildren();

        data.highlights.forEach(text => {

            const item = document.createElement("div");
            item.className = "cg-atelier-highlight";

            const icon = document.createElement("i");
            icon.className = "fa-solid fa-check";
            icon.setAttribute("aria-hidden", "true");

            const label = document.createElement("span");
            label.textContent = text;

            item.append(icon, label);
            highlights.appendChild(item);

        });

        /* IMAGE TRANSITION */

        if (changeTimer !== null) {
            clearTimeout(changeTimer);
            changeTimer = null;
        }

        if (reduceMotion) {
            image.src = data.image;
            image.alt = data.alt;
            image.classList.remove("cg-atelier-image-changing");
            return;
        }

        image.classList.add("cg-atelier-image-changing");

        changeTimer = setTimeout(() => {

            image.src = data.image;
            image.alt = data.alt;

            image.classList.remove("cg-atelier-image-changing");
            changeTimer = null;

        }, 180);

    }

    /* CLICK EVENTS */

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", function () {
            updateAtelier(tab.dataset.atelier);
        });

        /* KEYBOARD NAVIGATION */

        tab.addEventListener("keydown", function (event) {

            let nextIndex = index;

            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % tabs.length;
            }

            else if (event.key === "ArrowLeft") {
                nextIndex =
                    (index - 1 + tabs.length) % tabs.length;
            }

            else if (event.key === "Home") {
                nextIndex = 0;
            }

            else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            }

            else {
                return;
            }

            event.preventDefault();

            updateAtelier(
                tabs[nextIndex].dataset.atelier,
                true
            );

        });

    });

});




















/* ==========================================
   SECTION 5 - SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".cg-scale");

    if (!section) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const items = section.querySelectorAll(
        ".cg-scale-intro, .cg-scale-feature, " +
        ".cg-scale-service, .cg-scale-bottom"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("cg-scale-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        item.classList.add("cg-scale-animate");
        observer.observe(item);
    });

});















/* ==========================================
   SECTION 6 - TIMELINE ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const journey = document.querySelector(".cg-journey");

    if (!journey) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        journey.classList.add("is-visible");
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    journey.classList.add("is-visible");
                    observer.unobserve(journey);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    observer.observe(journey);

});
