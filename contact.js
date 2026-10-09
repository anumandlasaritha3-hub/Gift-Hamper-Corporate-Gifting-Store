
/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("velmoraContactForm");
    const status = document.getElementById("contactFormStatus");

    if (!form || !status) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        status.textContent = "";

        if (!form.reportValidity()) return;

        status.textContent =
            "Your message is ready. Form submission will be available once the contact service is connected.";

    });

});


















/* ==========================================
   SECTION 5 - INTERACTIVE HELP OPTIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const options = document.querySelectorAll(
        ".contact-help-option"
    );

    const image = document.getElementById("contactHelpImage");
    const imageLabel = document.getElementById("contactHelpImageLabel");
    const category = document.getElementById("contactHelpCategory");
    const title = document.getElementById("contactHelpTitle");
    const description = document.getElementById("contactHelpDescription");
    const link = document.getElementById("contactHelpLink");

    if (
        !options.length ||
        !image ||
        !imageLabel ||
        !category ||
        !title ||
        !description ||
        !link
    ) return;

    const helpContent = {

        custom: {
            image: "images/contact-help-custom.jpg",
            alt: "Beautifully personalized luxury gift",
            label: "MADE PERSONAL",
            category: "PERSONALIZED EXPERIENCES",
            title: "A Gift That Feels Like You.",
            description:
                "From carefully chosen details to meaningful " +
                "personalization, we're here to help you create " +
                "a gift that tells your story.",
            linkText: "Enquire About Custom Gifting"
        },

        orders: {
            image: "images/contact-help-orders.jpg",
            alt: "Elegant wrapped gifts ready for delivery",
            label: "HERE TO ASSIST",
            category: "ORDER & DELIVERY SUPPORT",
            title: "Every Detail, Taken Care Of.",
            description:
                "Need assistance with an existing order, delivery " +
                "details, or product information? Our team is here " +
                "to help make your experience seamless.",
            linkText: "Get Order Assistance"
        },

        corporate: {
            image: "images/contact-help-corporate.jpg",
            alt: "Premium corporate gift boxes",
            label: "GIFT WITH PURPOSE",
            category: "CORPORATE GIFTING",
            title: "Meaningful Business Gestures.",
            description:
                "Celebrate partnerships, recognize your team, " +
                "and strengthen client relationships with " +
                "thoughtfully curated gifting experiences.",
            linkText: "Discuss Corporate Gifting"
        },

        collaboration: {
            image: "images/contact-help-collaboration.jpg",
            alt: "Luxury gifting collaboration and packaging",
            label: "CREATE TOGETHER",
            category: "PARTNERSHIPS & COLLABORATIONS",
            title: "Beautiful Ideas Begin Together.",
            description:
                "Have a creative partnership or collaboration " +
                "in mind? We'd love to explore opportunities " +
                "to bring meaningful ideas to life.",
            linkText: "Start a Collaboration"
        }

    };

    options.forEach((option) => {

        option.addEventListener("click", () => {

            const key = option.dataset.help;
            const content = helpContent[key];

            if (!content) return;

            options.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            option.classList.add("active");
            option.setAttribute("aria-pressed", "true");

            image.classList.add("is-changing");

            image.src = content.image;
            image.alt = content.alt;

            imageLabel.textContent = content.label;
            category.textContent = content.category;
            title.textContent = content.title;
            description.textContent = content.description;
            link.textContent = content.linkText + " ";

            const arrow = document.createElement("i");
            arrow.className = "fa-solid fa-arrow-right";
            arrow.setAttribute("aria-hidden", "true");
            link.appendChild(arrow);

            image.classList.remove("is-changing");

        });

    });

});


















/* ==========================================
   SECTION 6 - FAQ ACCORDION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(
        ".contact-faq-item"
    );

    faqItems.forEach((item) => {

        const button = item.querySelector(
            ".contact-faq-question"
        );

        const answer = item.querySelector(
            ".contact-faq-answer"
        );

        const icon = item.querySelector(
            ".contact-faq-toggle i"
        );

        if (!button || !answer || !icon) return;

        button.addEventListener("click", () => {

            const wasOpen = item.classList.contains("active");

            // Close all questions
            faqItems.forEach((faq) => {

                faq.classList.remove("active");

                const faqButton = faq.querySelector(
                    ".contact-faq-question"
                );

                const faqAnswer = faq.querySelector(
                    ".contact-faq-answer"
                );

                const faqIcon = faq.querySelector(
                    ".contact-faq-toggle i"
                );

                if (faqButton) {
                    faqButton.setAttribute(
                        "aria-expanded", "false"
                    );
                }

                if (faqAnswer) {
                    faqAnswer.hidden = true;
                }

                if (faqIcon) {
                    faqIcon.className = "fa-solid fa-plus";
                }

            });

            // Open selected question
            if (!wasOpen) {

                item.classList.add("active");

                button.setAttribute(
                    "aria-expanded", "true"
                );

                answer.hidden = false;

                icon.className = "fa-solid fa-minus";

            }

        });

    });

});








