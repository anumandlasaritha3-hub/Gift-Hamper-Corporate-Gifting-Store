
/* ==========================================
   SECTION 3 - CUSTOMIZATION SHOWCASE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector(".custom-options");

    if (!section) return;

    const buttons = section.querySelectorAll(
        ".custom-options-item"
    );

    const image = document.getElementById("customOptionsImage");
    const imageName = document.getElementById(
        "customOptionsImageName"
    );
    const counter = document.getElementById(
        "customOptionsCurrent"
    );

    const options = {
        packaging: {
            number: "01",
            title: "Signature Packaging",
            image: "images/custom-packaging.jpg",
            alt: "Elegant personalized gift packaging"
        },
        messages: {
            number: "02",
            title: "Personalized Messages",
            image: "images/custom-messages.jpg",
            alt: "Handwritten personalized gift message"
        },
        colors: {
            number: "03",
            title: "Custom Color Themes",
            image: "images/custom-colors.jpg",
            alt: "Gift wrapping in coordinated custom colors"
        },
        contents: {
            number: "04",
            title: "Curated Gift Contents",
            image: "images/custom-contents.jpg",
            alt: "Beautifully curated personalized gift collection"
        },
        names: {
            number: "05",
            title: "Names & Initials",
            image: "images/custom-names.jpg",
            alt: "Personalized gift featuring custom initials"
        },
        finishing: {
            number: "06",
            title: "Finishing Touches",
            image: "images/custom-finishing.jpg",
            alt: "Luxury ribbon and finishing details"
        }
    };

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let changeTimer;

    Object.values(options).forEach(item => {
        const preload = new Image();
        preload.src = item.image;
    });

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const key = button.dataset.option;
            const item = options[key];

            if (!item) return;

            buttons.forEach(btn => {
                const isActive = btn === button;
                btn.classList.toggle("active", isActive);
                btn.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );
            });

            imageName.textContent = item.title;
            counter.textContent = item.number;

            clearTimeout(changeTimer);

            if (reducedMotion) {
                image.src = item.image;
                image.alt = item.alt;
                return;
            }

            image.classList.add("is-changing");

            changeTimer = setTimeout(() => {
                image.src = item.image;
                image.alt = item.alt;
                image.classList.remove("is-changing");
            }, 200);

        });

    });

});



















/* ==========================================
   SECTION 4 - PERSONALIZATION STUDIO
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const studio = document.querySelector(".custom-studio");

    if (!studio) return;

    const gift = document.getElementById("studioGift");
    const boxGroup = document.getElementById("studioBoxColors");
    const ribbonGroup = document.getElementById("studioRibbonColors");
    const boxName = document.getElementById("studioBoxName");
    const ribbonName = document.getElementById("studioRibbonName");
    const messageInput = document.getElementById("studioMessage");
    const messagePreview = document.getElementById(
        "studioMessagePreview"
    );
    const charCount = document.getElementById("studioCharCount");
    const resetButton = document.getElementById("studioReset");
    const enquiryLink = document.getElementById("studioEnquiryLink");

    const defaults = {
        box: "#505B43",
        ribbon: "#E7B9A4",
        message: "Wishing you beautiful moments."
    };

    let selection = {
        box: "Olive Green",
        ribbon: "Soft Rose"
    };

    function updateEnquiryLink() {

        const params = new URLSearchParams({
            packaging: selection.box,
            ribbon: selection.ribbon,
            message: messageInput.value.trim()
        });

        enquiryLink.href = "contact.html?" + params.toString();
    }

    function setupSwatches(group, property, output, key) {

        const buttons = group.querySelectorAll(
            ".custom-studio-swatch"
        );

        buttons.forEach(button => {

            button.addEventListener("click", function () {

                buttons.forEach(btn => {
                    const active = btn === button;

                    btn.classList.toggle("active", active);
                    btn.setAttribute(
                        "aria-pressed",
                        String(active)
                    );
                });

                gift.style.setProperty(
                    property,
                    button.dataset.color
                );

                selection[key] = button.dataset.name;
                output.textContent =
                    "Selected: " + button.dataset.name;

                updateEnquiryLink();

            });

        });

    }

    setupSwatches(
        boxGroup,
        "--studio-box",
        boxName,
        "box"
    );

    setupSwatches(
        ribbonGroup,
        "--studio-ribbon",
        ribbonName,
        "ribbon"
    );

    function updateMessage() {

        const value = messageInput.value;

        messagePreview.textContent =
            value.trim() || "Your personal message here.";

        charCount.textContent =
            value.length + " / 100";

        updateEnquiryLink();
    }

    messageInput.addEventListener("input", updateMessage);

    resetButton.addEventListener("click", function () {

        gift.style.setProperty("--studio-box", defaults.box);
        gift.style.setProperty("--studio-ribbon", defaults.ribbon);

        selection.box = "Olive Green";
        selection.ribbon = "Soft Rose";

        boxName.textContent = "Selected: Olive Green";
        ribbonName.textContent = "Selected: Soft Rose";

        messageInput.value = defaults.message;

        [boxGroup, ribbonGroup].forEach(group => {

            group.querySelectorAll(
                ".custom-studio-swatch"
            ).forEach((button, index) => {

                const active = index === 0;
                button.classList.toggle("active", active);
                button.setAttribute(
                    "aria-pressed",
                    String(active)
                );

            });

        });

        updateMessage();

    });

    updateMessage();

});





/* ==========================================
   SECTION 5 - OCCASION SELECTOR
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const tabs = Array.from(
        document.querySelectorAll(".custom-moments-tab")
    );

    const image = document.getElementById("customMomentImage");
    const imageLabel = document.getElementById("customMomentImageLabel");
    const eyebrow = document.getElementById("customMomentEyebrow");
    const title = document.getElementById("customMomentTitle");
    const description = document.getElementById("customMomentDescription");
    const accent = document.getElementById("customMomentAccent");

    if (!tabs.length || !image || !imageLabel ||
        !eyebrow || !title || !description || !accent) {
        return;
    }

    const occasions = {

        birthday: {
            image: "images/moment-birthday.jpg",
            alt: "Personalized birthday gift",
            label: "A CELEBRATION OF YOU",
            eyebrow: "01 / CELEBRATE THEIR DAY",
            title: "Make Their Day",
            highlight: "Truly Theirs.",
            description:
                "Celebrate their personality, passions, and everything " +
                "that makes them special. Create a birthday gift filled " +
                "with thoughtful surprises and meaningful personal details.",
            accent: "A little more thought. A lot more joy."
        },

        anniversary: {
            image: "images/moment-anniversary.jpg",
            alt: "Romantic personalized anniversary gift",
            label: "A CELEBRATION OF TOGETHERNESS",
            eyebrow: "02 / CELEBRATE YOUR STORY",
            title: "For Every Chapter",
            highlight: "You've Shared.",
            description:
                "Honor beautiful memories and the journey you've built " +
                "together with a personalized anniversary gift that " +
                "celebrates your one-of-a-kind love story.",
            accent: "Some stories deserve to be treasured."
        },

        wedding: {
            image: "images/moment-wedding.jpg",
            alt: "Elegant personalized wedding gift",
            label: "A BEAUTIFUL NEW BEGINNING",
            eyebrow: "03 / CELEBRATE LOVE",
            title: "A Beautiful Beginning",
            highlight: "Worth Remembering.",
            description:
                "Mark the beginning of a wonderful new chapter with " +
                "thoughtful wedding gifts, refined presentation, " +
                "and meaningful details designed to be cherished.",
            accent: "For a love that lasts a lifetime."
        },

        thankyou: {
            image: "images/moment-thankyou.jpg",
            alt: "Thoughtful personalized thank you gift",
            label: "A GESTURE OF GRATITUDE",
            eyebrow: "04 / EXPRESS YOUR GRATITUDE",
            title: "Say Thank You",
            highlight: "Beautifully.",
            description:
                "Show someone how much their kindness means to you. " +
                "Turn a simple expression of gratitude into a " +
                "beautifully personal gesture they'll remember.",
            accent: "Gratitude is always worth sharing."
        },

        justbecause: {
            image: "images/moment-justbecause.jpg",
            alt: "Surprise personalized gift",
            label: "THE JOY OF UNEXPECTED GIVING",
            eyebrow: "05 / CELEBRATE THE EVERYDAY",
            title: "No Occasion Needed.",
            highlight: "Just Because.",
            description:
                "Sometimes the most meaningful gifts arrive without " +
                "a reason. Surprise someone special with a thoughtful " +
                "creation simply because they matter to you.",
            accent: "The sweetest surprises need no occasion."
        }

    };

    function activateMoment(tab, moveFocus = false) {

        const data = occasions[tab.dataset.moment];

        if (!data) return;

        tabs.forEach(function (item) {
            const active = item === tab;

            item.classList.toggle("active", active);
            item.setAttribute("aria-selected", String(active));
            item.tabIndex = active ? 0 : -1;
        });

        image.src = data.image;
        image.alt = data.alt;

        imageLabel.textContent = data.label;
        eyebrow.textContent = data.eyebrow;
        description.textContent = data.description;
        accent.textContent = data.accent;

        title.replaceChildren(
            document.createTextNode(data.title + " "),
            Object.assign(document.createElement("em"), {
                textContent: data.highlight
            })
        );

        if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, index) {

        tab.addEventListener("click", function () {
            activateMoment(tab);
        });

        tab.addEventListener("keydown", function (event) {

            let nextIndex;

            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            activateMoment(tabs[nextIndex], true);

        });

    });

});
