
/* ==========================================
   SECTION 3 - SIGNATURE GIFTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll(
        ".products-signature-filter"
    );

    const cards = document.querySelectorAll(
        ".products-signature-card"
    );

    const emptyMessage = document.querySelector(
        ".products-signature-empty"
    );

    /* CATEGORY FILTERING */

    filters.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedCategory = button.dataset.filter;
            let visibleCount = 0;

            filters.forEach((filter) => {
                filter.classList.remove("active");
                filter.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            cards.forEach((card) => {

                const category = card.dataset.category;

                const shouldShow =
                    selectedCategory === "all" ||
                    category === selectedCategory;

                card.hidden = !shouldShow;

                if (shouldShow) visibleCount++;

            });

            if (emptyMessage) {
                emptyMessage.hidden = visibleCount > 0;
            }

        });

    });

    /* WISHLIST TOGGLE */

    const wishlistButtons = document.querySelectorAll(
        ".products-signature-wishlist"
    );

    wishlistButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const isActive = button.classList.toggle("active");

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

            const icon = button.querySelector("i");

            if (icon) {
                icon.className = isActive
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart";
            }

            const currentLabel =
                button.getAttribute("aria-label") || "";

            if (isActive) {
                button.setAttribute(
                    "aria-label",
                    currentLabel.replace(
                        "Add ", "Remove "
                    ).replace(
                        " to wishlist", " from wishlist"
                    )
                );
            } else {
                button.setAttribute(
                    "aria-label",
                    currentLabel.replace(
                        "Remove ", "Add "
                    ).replace(
                        " from wishlist", " to wishlist"
                    )
                );
            }

        });

    });

});























/* ==========================================
   SECTION 4 - INTERACTIVE GIFT FINDER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const occasionButtons = document.querySelectorAll(
        "#giftOccasions .gift-finder-option"
    );

    const recipientButtons = document.querySelectorAll(
        "#giftRecipients .gift-finder-option"
    );

    const findButton = document.getElementById("findMyGift");

    const resultImage = document.getElementById("giftFinderImage");
    const resultTitle = document.getElementById("giftFinderTitle");
    const resultDescription = document.getElementById("giftFinderDescription");
    const resultCategory = document.getElementById("giftFinderCategory");
    const resultLink = document.getElementById("giftFinderLink");

    if (!findButton || !resultTitle) return;

    let selectedOccasion = "birthday";
    let selectedRecipient = "partner";

    function setActive(buttons, clickedButton) {
        buttons.forEach(button => {
            const active = button === clickedButton;

            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }

    occasionButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectedOccasion = button.dataset.occasion;
            setActive(occasionButtons, button);
        });
    });

    recipientButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectedRecipient = button.dataset.recipient;
            setActive(recipientButtons, button);
        });
    });

    const gifts = {
        birthday: {
            partner: {
                title: "The Romantic Keepsake",
                description: "A beautiful personalized gift that celebrates the special connection you share.",
                category: "PERSONALIZED GIFTS",
                image: "images/gift-finder-romance.jpg",
                link: "customization.html"
            },
            family: {
                title: "The Birthday Bliss Box",
                description: "A delightful collection of thoughtful surprises for someone who means the world to you.",
                category: "BIRTHDAY GIFTS",
                image: "images/product-4.jpg",
                link: "#products-signature"
            },
            friend: {
                title: "The Sweet Indulgence Hamper",
                description: "A charming assortment of treats made for laughter, friendship, and happy celebrations.",
                category: "GIFT HAMPERS",
                image: "images/product-5.jpg",
                link: "#products-signature"
            },
            colleague: {
                title: "The Signature Celebration Hamper",
                description: "A beautifully presented gift to celebrate their special day with warmth and elegance.",
                category: "GIFT HAMPERS",
                image: "images/product-1.jpg",
                link: "#products-signature"
            }
        },

        anniversary: {
            partner: {
                title: "The Anniversary Romance Box",
                description: "An elegant expression of love, created to honor your favorite memories together.",
                category: "ANNIVERSARY GIFTS",
                image: "images/product-8.jpg",
                link: "#products-signature"
            },
            family: {
                title: "The Memory Keepsake Box",
                description: "A meaningful place to treasure beautiful memories and unforgettable family moments.",
                category: "PERSONALIZED GIFTS",
                image: "images/product-2.jpg",
                link: "customization.html"
            },
            friend: {
                title: "The Golden Moments Box",
                description: "A sophisticated gift for celebrating a beautiful milestone in their journey.",
                category: "LUXURY GIFT BOXES",
                image: "images/product-7.jpg",
                link: "#products-signature"
            },
            colleague: {
                title: "The Velmora Luxe Collection",
                description: "A refined gesture to recognize a meaningful milestone with timeless elegance.",
                category: "LUXURY GIFT BOXES",
                image: "images/product-3.jpg",
                link: "#products-signature"
            }
        },

        thankyou: {
            partner: {
                title: "The Forever Yours Gift",
                description: "A personal and heartfelt way to say thank you for all the little things that matter.",
                category: "PERSONALIZED GIFTS",
                image: "images/product-6.jpg",
                link: "customization.html"
            },
            family: {
                title: "The Sweet Indulgence Hamper",
                description: "A comforting assortment of delightful treats to show how much you appreciate them.",
                category: "GIFT HAMPERS",
                image: "images/product-5.jpg",
                link: "#products-signature"
            },
            friend: {
                title: "The Memory Keepsake Box",
                description: "A thoughtful keepsake that celebrates a friendship filled with meaningful memories.",
                category: "PERSONALIZED GIFTS",
                image: "images/product-2.jpg",
                link: "customization.html"
            },
            colleague: {
                title: "The Golden Moments Box",
                description: "A polished expression of gratitude, perfect for a professional thank-you.",
                category: "LUXURY GIFT BOXES",
                image: "images/product-7.jpg",
                link: "#products-signature"
            }
        },

        celebration: {
            partner: {
                title: "The Velmora Luxe Collection",
                description: "An extraordinary collection for celebrating the moments you will always remember.",
                category: "LUXURY GIFT BOXES",
                image: "images/product-3.jpg",
                link: "#products-signature"
            },
            family: {
                title: "The Signature Celebration Hamper",
                description: "A joyful assortment of beautiful gifts to bring everyone together.",
                category: "GIFT HAMPERS",
                image: "images/product-1.jpg",
                link: "#products-signature"
            },
            friend: {
                title: "The Birthday Bliss Box",
                description: "A cheerful surprise for celebrating achievements, new beginnings, and happy moments.",
                category: "SPECIAL OCCASIONS",
                image: "images/product-4.jpg",
                link: "#products-signature"
            },
            colleague: {
                title: "The Velmora Luxe Collection",
                description: "A premium gift designed to mark professional achievements with distinction.",
                category: "LUXURY GIFT BOXES",
                image: "images/product-3.jpg",
                link: "#products-signature"
            }
        }
    };

    findButton.addEventListener("click", () => {

        const gift = gifts[selectedOccasion]?.[selectedRecipient];

        if (!gift) return;

        resultImage.src = gift.image;
        resultImage.alt = gift.title;

        resultTitle.textContent = gift.title;
        resultDescription.textContent = gift.description;
        resultCategory.textContent = gift.category;
        resultLink.href = gift.link;

        const result = document.getElementById("giftFinderResult");

        if (window.innerWidth <= 900 && result) {
            result.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        }

    });

});

















/* ==========================================
   SECTION 5 - VELMORA FAVORITES SLIDER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const favorites = [
        {
            category: "CURATED GIFT HAMPERS",
            title: "The Signature Celebration Hamper",
            description:
                "An exquisite collection of carefully selected treasures, beautifully presented to celebrate life's most meaningful occasions.",
            price: "₹2,499",
            image: "images/favorite-featured-1.jpg",
            link: "#products-signature"
        },
        {
            category: "PERSONALIZED KEEPSAKES",
            title: "The Memory Keepsake Box",
            description:
                "A heartfelt collection of memories and personal touches, designed to create a gift that feels truly one of a kind.",
            price: "₹1,899",
            image: "images/favorite-featured-2.jpg",
            link: "customization.html"
        },
        {
            category: "LUXURY GIFT COLLECTIONS",
            title: "The Velmora Luxe Collection",
            description:
                "A beautifully refined gifting experience, bringing together timeless details, premium presentation, and thoughtful elegance.",
            price: "₹3,999",
            image: "images/favorite-featured-3.jpg",
            link: "#products-signature"
        }
    ];

    const image = document.getElementById("favoriteMainImage");
    const category = document.getElementById("favoriteCategory");
    const title = document.getElementById("favoriteTitle");
    const description = document.getElementById("favoriteDescription");
    const price = document.getElementById("favoritePrice");
    const link = document.getElementById("favoriteLink");
    const counter = document.getElementById("favoriteCurrent");

    const previous = document.getElementById("favoritePrev");
    const next = document.getElementById("favoriteNext");

    if (!image || !previous || !next) return;

    let currentIndex = 0;

    function updateFavorite(index) {

        currentIndex = (index + favorites.length) % favorites.length;

        const item = favorites[currentIndex];

        image.src = item.image;
        image.alt = item.title;

        category.textContent = item.category;
        title.textContent = item.title;
        description.textContent = item.description;
        price.textContent = item.price;
        link.href = item.link;

        counter.textContent = String(currentIndex + 1).padStart(2, "0");

    }

    previous.addEventListener("click", () => {
        updateFavorite(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        updateFavorite(currentIndex + 1);
    });

});
