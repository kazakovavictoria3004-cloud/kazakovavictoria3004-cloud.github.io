document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // СКРОЛЛ-АНИМАЦИИ (SCROLL REVEAL EFFECT)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScrollOptions = {
        threshold: 0.08, // Срабатывает, когда элемент чуть показывается
        rootMargin: "0px 0px -20px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOnScrollOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- ИСПРАВЛЕНИЕ ДЛЯ СТРАНИЦЫ ИСТОРИИ (ЯВНЫЙ ПЕРЕХОД ПО КНОПКАМ) ---
    // Находим большие блочные кнопки перехода по ID или классам
    const navLinks = document.querySelectorAll('.nav-block-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const destination = this.getAttribute('href');
            if(destination && destination !== '#') {
                window.location.href = destination;
            }
        });
    })
});