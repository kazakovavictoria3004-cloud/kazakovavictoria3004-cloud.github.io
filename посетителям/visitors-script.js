document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ru: {
            topBar: "информация", vTitle: "ПОСЕТИТЕЛЯМ", buyTicket: "Купить билет",
            vSubtitle: "Всё, что необходимо знать перед погружением в историю вычислительной техники. Планируйте свой визит комфортно.",
            c1_t: "Режим работы", c1_tx: "Понедельник — Пятница: 10:00 – 20:00\nСуббота — Воскресенье: 11:00 – 21:00\n\nКасса закрывается за 45 минут.",
            c2_t: "Как добраться", c2_tx: "Наш адрес: Технологический проспект, д. 404.\n\nМетро: Станция «Цифровая».\nАвтобусы: № 80, № 256.",
            c3_t: "Правила музея", l1: "Любительская фотосъемка — бесплатно", l2: "Не прикасайтесь к историческим платам", l3: "Интерактивные ЭВМ открыты для кликов"
        },
        en: {
            topBar: "visitor info", vTitle: "FOR VISITORS", buyTicket: "Buy Ticket",
            vSubtitle: "Everything you need to know before diving into computing history. Plan your visit with ease.",
            c1_t: "Opening Hours", c1_tx: "Monday — Friday: 10:00 AM – 8:00 PM\nSaturday — Sunday: 11:00 AM – 9:00 PM\n\nTicket office closes 45m prior.",
            c2_t: "How to Find Us", c2_tx: "Address: 404 Technology Avenue.\n\nSubway: 'Digital' Station.\nBuses: Route 80, Route 256.",
            c3_t: "Museum Rules", l1: "Amateur photography is free of charge", l2: "Do not touch non-interactive components", l3: "Live retro computing stands are open to test"
        }
    };

    const langBtn = document.getElementById('langBtn');
    let currentLang = localStorage.getItem('siteLang') || 'ru';

    const applyLang = (lang) => {
        const t = translations[lang];
        document.getElementById('topBarText').textContent = t.topBar;
        document.getElementById('vTitle').textContent = t.vTitle;
        document.getElementById('vSubtitle').textContent = t.vSubtitle;
        document.querySelector('.btn-ticket').textContent = t.buyTicket;

        // Карточки
        const card1 = document.querySelector('[data-card="1"]');
        card1.querySelector('.c-title').textContent = t.c1_t;
        card1.querySelector('.c-text').innerHTML = t.c1_tx.replace(/\n/g, '<br>');

        const card2 = document.querySelector('[data-card="2"]');
        card2.querySelector('.c-title').textContent = t.c2_t;
        card2.querySelector('.c-text').innerHTML = t.c2_tx.replace(/\n/g, '<br>');

        const card3 = document.querySelector('[data-card="3"]');
        card3.querySelector('.c-title').textContent = t.c3_t;
        card3.querySelector('.li-1').textContent = t.l1;
        card3.querySelector('.li-2').textContent = t.l2;
        card3.querySelector('.li-3').textContent = t.l3;

        langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
        localStorage.setItem('siteLang', lang);
    };

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        applyLang(currentLang);
    });
    applyLang(currentLang);

    // ЭФФЕКТ СДВИГА КАРТЫ (Интерактивный наклон по мыши)
    const mapSection = document.getElementById('mapSection');
    mapSection.addEventListener('mousemove', (e) => {
        const rect = mapSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mapSection.style.transform = `rotateX(${ y * - 8}deg) rotateY(${ x * 8}deg)`;
});
mapSection.addEventListener('mouseleave', () => {
    mapSection.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Базовый Reveal
const reveals = document.querySelectorAll('.reveal');
const scan = () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('active');
    });
};
window.addEventListener('scroll', scan);
scan();
        });