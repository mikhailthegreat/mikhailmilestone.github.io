document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal");
    
    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});