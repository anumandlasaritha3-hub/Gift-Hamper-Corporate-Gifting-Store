document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       READING PROGRESS BAR
    ========================================== */
    const progress = document.getElementById("bdProgress");

    function updateProgress() {
        if (!progress) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = percent + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();


    /* ==========================================
       SIDEBAR - HIGHLIGHT CURRENT SECTION
    ========================================== */
    const tocLinks = document.querySelectorAll(".bd-toc a[data-spy]");
    const spySections = [];

    tocLinks.forEach(link => {
        const target = document.getElementById(link.dataset.spy);
        if (target) spySections.push({ link, target });
    });

    if (spySections.length && "IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                tocLinks.forEach(l => l.classList.remove("active"));

                const match = spySections.find(item => item.target === entry.target);
                if (match) match.link.classList.add("active");
            });
        }, { rootMargin: "-30% 0px -60% 0px" });

        spySections.forEach(item => observer.observe(item.target));
    }


    /* ==========================================
       SECTION 5 - INTERACTIVE GIFTING TIPS
    ========================================== */
    const tips = document.querySelectorAll(".bd-art-tip");
    const image = document.getElementById("bdArtImage");
    const imageNumber = document.getElementById("bdArtNumber");

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

    if (tips.length && image && imageNumber) {
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
    }

});