// Инициализация Яндекс.Карты
function initYandexMap() {
    if (typeof ymaps === 'undefined' || !document.getElementById('yandexMap')) return;

    ymaps.ready(function () {
        var map = new ymaps.Map('yandexMap', {
            center: [46.349, 48.035],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        var placemark = new ymaps.Placemark(
            [46.349, 48.035],
            {
                balloonContent: '<div style="font-family: Alice, serif; padding: 8px;"><strong>Улица Кирова, Астрахань</strong><br>Центральная историческая улица,<br>сердце города</div>',
                hintContent: 'Улица Кирова'
            },
            { preset: 'islands#blueIcon' }
        );

        map.geoObjects.add(placemark);
    });
}

initYandexMap();

// Кастомный курсор
function initCustomCursor() {
    var cursor = document.querySelector('.custom-cursor');
    if (!cursor || window.innerWidth <= 768) return;

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    var hoverElements = document.querySelectorAll('a, button, .btn-primary, .vote-btn, .btn-outline-white');
    hoverElements.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            cursor.style.width = '48px';
            cursor.style.height = '48px';
            cursor.style.background = 'rgba(0, 128, 155, 0.2)';
        });
        el.addEventListener('mouseleave', function () {
            cursor.style.width = '32px';
            cursor.style.height = '32px';
            cursor.style.background = 'rgba(0, 128, 155, 0.1)';
        });
    });
}

// Бургер-меню
function initBurgerMenu() {
    var burger = document.getElementById('burgerBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    var overlay = document.getElementById('mobileOverlay');

    if (!burger || !mobileMenu || !overlay) return;

    function toggleMenu() {
        var isActive = mobileMenu.classList.contains('active');
        if (isActive) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    burger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-menu a').forEach(function (link) {
        link.addEventListener('click', toggleMenu);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
}

// Плавная прокрутка по якорям
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var headerOffset = 80;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

// Тёмная тема
function initThemeToggle() {
    var themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    function updateButton() {
        var isDark = document.body.classList.contains('dark');
        themeToggle.textContent = isDark ? 'Светлая тема' : 'Темная тема';
    }

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
    updateButton();

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        var isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateButton();
    });
}

// Параллакс для Hero
function initParallax() {
    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                var bg = document.querySelector('.hero-parallax-bg');
                if (bg) {
                    bg.style.transform = 'translateY(' + (window.pageYOffset * 0.4) + 'px)';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Анимации при скролле
function initScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            } else {
                entry.target.classList.remove('animate-visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        observer.observe(el);
    });
}

// Слайдер отзывов
function initReviewsSwiper() {
    var swiperElement = document.querySelector('.reviews-swiper');
    if (!swiperElement) return;

    new Swiper('.reviews-swiper', {
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
        }
    });
}

// Валидация формы
function initFormValidation() {
    var form = document.getElementById('bookingForm');
    if (!form) return;

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var successDiv = document.getElementById('formSuccess');

    nameInput.addEventListener('input', function () {
        if (nameInput.value.trim().length >= 2) nameError.textContent = '';
    });

    emailInput.addEventListener('input', function () {
        if (/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(emailInput.value.trim())) emailError.textContent = '';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        nameError.textContent = '';
        emailError.textContent = '';
        successDiv.textContent = '';

        var valid = true;

        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Имя должно содержать не менее 2 символов';
            valid = false;
        }

        if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(emailInput.value.trim())) {
            emailError.textContent = 'Введите корректный email (например, example@mail.ru)';
            valid = false;
        }

        if (valid) {
            successDiv.textContent = 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
            form.reset();
            setTimeout(function () { successDiv.textContent = ''; }, 5000);
        }
    });
}

// Голосование
function initVoting() {
    var defaultVotes = { bratskiy: 0, skver: 0, sharlau: 0, pochta: 0, arbat: 0 };
    var votes = JSON.parse(localStorage.getItem('streetVotes'));

    if (!votes || typeof votes !== 'object') {
        votes = {};
        Object.keys(defaultVotes).forEach(function (key) { votes[key] = 0; });
    }

    Object.keys(defaultVotes).forEach(function (key) {
        if (!(key in votes) || typeof votes[key] !== 'number' || isNaN(votes[key])) votes[key] = 0;
    });

    localStorage.setItem('streetVotes', JSON.stringify(votes));

    function updateResults() {
        var div = document.getElementById('voteResults');
        if (div) {
            div.innerHTML =
                '<span>Братский сад: <strong>' + votes.bratskiy + '</strong></span> | ' +
                '<span>Сквер Кирова: <strong>' + votes.skver + '</strong></span> | ' +
                '<span>Кондитерская Шарлау: <strong>' + votes.sharlau + '</strong></span> | ' +
                '<span>Почтамт: <strong>' + votes.pochta + '</strong></span> | ' +
                '<span>Арбат: <strong>' + votes.arbat + '</strong></span>';
        }
    }
    updateResults();

    document.querySelectorAll('.vote-card').forEach(function (card) {
        var btn = card.querySelector('.vote-btn');
        var key = card.dataset.vote;

        if (btn && key && votes.hasOwnProperty(key)) {
            btn.addEventListener('click', function () {
                votes[key]++;
                localStorage.setItem('streetVotes', JSON.stringify(votes));
                updateResults();

                btn.style.transform = 'scale(0.92)';
                btn.style.backgroundColor = 'var(--primary-blue)';
                btn.style.color = 'white';
                setTimeout(function () {
                    btn.style.transform = '';
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 200);
            });
        }
    });
}

// Запуск всего после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    initCustomCursor();
    initBurgerMenu();
    initSmoothScroll();
    initThemeToggle();
    initParallax();
    initScrollAnimations();
    initReviewsSwiper();
    initFormValidation();
    initVoting();
});