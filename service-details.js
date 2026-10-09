document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       READING PROGRESS BAR
    ========================================== */
    const progress = document.getElementById("sdProgress");

    function updateProgress() {
        if (!progress) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = percent + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();


    /* ==========================================
       FAQ ACCORDION
    ========================================== */
    const faqItems = document.querySelectorAll(".sd-faq-item");

    function setItem(item, open) {
        const button = item.querySelector(".sd-faq-question");
        const answer = item.querySelector(".sd-faq-answer");

        item.classList.toggle("active", open);
        button.setAttribute("aria-expanded", String(open));
        answer.style.maxHeight = open ? answer.scrollHeight + "px" : "0px";
    }

    faqItems.forEach(item => setItem(item, item.classList.contains("active")));

    faqItems.forEach(item => {
        item.querySelector(".sd-faq-question").addEventListener("click", () => {
            const willOpen = !item.classList.contains("active");

            faqItems.forEach(other => {
                if (other !== item) setItem(other, false);
            });

            setItem(item, willOpen);
        });
    });

    window.addEventListener("resize", () => {
        faqItems.forEach(item => {
            if (item.classList.contains("active")) {
                const answer = item.querySelector(".sd-faq-answer");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});