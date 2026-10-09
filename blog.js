
/* ==========================================
   BLOG JOURNAL - CATEGORY FILTER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(
        ".blog-journal-filter"
    );

    const blogCards = document.querySelectorAll(
        ".blog-journal-card"
    );

    const emptyMessage = document.querySelector(
        ".blog-journal-empty"
    );

    if (!filterButtons.length || !blogCards.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(filter => {
                filter.classList.remove("active");
                filter.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            let visibleCount = 0;

            blogCards.forEach(card => {

                const matches =
                    selectedCategory === "all" ||
                    card.dataset.category === selectedCategory;

                card.hidden = !matches;

                if (matches) visibleCount++;

            });

            if (emptyMessage) {
                emptyMessage.hidden = visibleCount > 0;
            }

        });

    });

});





















/* ==========================================
   GIFTING INSPIRATION QUIZ
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const occasionButtons = document.querySelectorAll(
        "#inspireOccasions button"
    );

    const styleButtons = document.querySelectorAll(
        "#inspireStyles button"
    );

    const result = document.getElementById("inspireResult");

    if (!occasionButtons.length || !styleButtons.length || !result) {
        return;
    }

    let occasion = "birthday";
    let style = "personal";

    const recommendations = {
        birthday: {
            personal: "A personalized keepsake with a handwritten birthday message.",
            luxury: "A curated luxury hamper with beautiful signature packaging.",
            simple: "A small, meaningful gift with their favorite treats."
        },
        anniversary: {
            personal: "A memory-inspired gift with initials and a heartfelt note.",
            luxury: "An elegant celebration hamper with premium finishing touches.",
            simple: "A thoughtful gift box with a personal love letter."
        },
        thankyou: {
            personal: "A customized thank-you box with a message of appreciation.",
            luxury: "A refined appreciation hamper with elegant wrapping.",
            simple: "A handwritten thank-you note paired with a lovely little gift."
        }
    };

    function updateResult() {
        result.textContent = recommendations[occasion][style];
    }

    function activateButton(buttons, selectedButton) {
        buttons.forEach(button => {
            const active = button === selectedButton;
            button.classList.toggle("selected", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }

    occasionButtons.forEach(button => {
        button.addEventListener("click", () => {
            occasion = button.dataset.value;
            activateButton(occasionButtons, button);
            updateResult();
        });
    });

    styleButtons.forEach(button => {
        button.addEventListener("click", () => {
            style = button.dataset.value;
            activateButton(styleButtons, button);
            updateResult();
        });
    });

});
















/* ==========================================
   SECTION 5 - INTERACTIVE GIFTING TIPS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tips = document.querySelectorAll(".blog-art-tip");
    const image = document.getElementById("blogArtImage");
    const imageNumber = document.getElementById("blogArtImageNumber");

    if (!tips.length || !image || !imageNumber) return;

    const tipImages = {
        personal: {
            src: "images/blog-art-personal.jpg",
            alt: "Thoughtfully personalized gift arrangement",
            number: "01 / 03"
        },
        presentation: {
            src: "images/blog-art-presentation.jpg",
            alt: "Elegant gift wrapping with ribbons",
            number: "02 / 03"
        },
        meaning: {
            src: "images/blog-art-meaning.jpg",
            alt: "Meaningful gift with a handwritten note",
            number: "03 / 03"
        }
    };

    tips.forEach(tip => {

        tip.addEventListener("click", () => {

            const selected = tipImages[tip.dataset.tip];

            if (!selected) return;

            tips.forEach(item => {
                const active = item === tip;

                item.classList.toggle("active", active);
                item.setAttribute("aria-expanded", String(active));
            });

            image.src = selected.src;
            image.alt = selected.alt;
            imageNumber.textContent = selected.number;

        });

    });

});
