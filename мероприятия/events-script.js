document.addEventListener('DOMContentLoaded', () => {

    // Плавное появление (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => scrollObserver.observe(el));
});