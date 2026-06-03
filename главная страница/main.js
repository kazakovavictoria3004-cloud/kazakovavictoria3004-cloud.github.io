document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ (Scroll Reveal)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScrollOptions = {
        threshold: 0.1, // Блок начинает появляться, когда 10% его площади видны на экране
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Отключаем слежку после активации
            }
        });
    }, revealOnScrollOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==========================================
    // СИМУЛЯЦИЯ ПОИСКА В МАКЕТЕ
    // ==========================================
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                console.log(`Запрос отправлен: ${searchInput.value}`);
                searchInput.value = '';
            }
        });
    }

    // ==========================================
    // ВАЛИДАЦИЯ ФОРМЫ ПОДПИСКИ
    // ==========================================
    const footerForm = document.getElementById('footerForm');
    if (footerForm) {
        footerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Успешно подписано на обновления!');
            footerForm.reset();
        });
    }
});