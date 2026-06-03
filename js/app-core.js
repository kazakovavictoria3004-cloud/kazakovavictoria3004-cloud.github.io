document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. ПОЛНЫЙ СЛОВАРЬ ПЕРЕВОДА ДЛЯ ВСЕХ СТРАНИЦ САЙТА
    // ==========================================================================
    const translations = {
        ru: {
            // Общие элементы (Шапка и Подвал)
            navHome: "Главная", navVisitors: "Посетителям", navMuseum: "Музей", navEvents: "Мероприятия", navContacts: "Контакты",
            buyTicket: "Купить билет", searchPlh: "Поиск по сайту...", footerSubscribe: "ПОДПИШИТЕСЬ НА ОБНОВЛЕНИЯ",
            footerFormPlh: "Введите вашу почту", footerRules: "Я согласен на обработку персональных данных, я прочитал политику конфиденциальности",
            footerContacts: "КОНТАКТЫ", footerPolicy: "ПРАВИЛА И ПОЛИТИКА", footerAbout: "О НАС", footerSubTitle: "ПОДПИСКА", footerMore: "БОЛЬШЕ",

            // Главная страница (index.html)
            topHome: "главная страница", mainTitleHome: "МУЗЕЙ КОМПЬЮТЕРНЫХ ТЕХНОЛОГИЙ", subTitleHome: "От ламповых вычислителей до квантовых систем будущего.",
            exhibitsTitle: "ГАЛЕРЕЯ ЭКСПОНАТОВ", btnMore: "Узнать больше",

            // Страница "Посетителям" (visitors.html)
            topVisitors: "информация", mainTitleVisitors: "ПОСЕТИТЕЛЯМ", subTitleVisitors: "Всё, что необходимо знать перед погружением в историю вычислительной техники. Планируйте визит с комфортом.",
            c1_t: "Режим работы", c1_tx: "Понедельник — Пятница: 10:00 – 20:00<br>Суббота — Воскресенье: 11:00 – 21:00<br><br><b>Касса закрывается за 45 минут до окончания работы.</b>",
            c2_t: "Как добраться", c2_tx: "Наш адрес: Технологический проспект, д. 404.<br><br><b>Метро:</b> Станция «Цифровая» (3 мин. пешком).<br><b>Автобусы:</b> № 80, № 256.",
            c3_t: "Правила музея", l1: "Любительская фотосъемка — бесплатно", l2: "Не прикасайтесь к нерабочим экспонатам", l3: "Интерактивные стенды открыты для тестов",
            mapLoad: "Интерактивная карта загружается...",

            // Страница "О музее" (history.html)
            topHistory: "О музее", mainTitleHistory: "ИСТОРИЯ И МИССИЯ", hText1: "Мы собираем, реставрируем и сохраняем вехи цифровой революции. В нашей коллекции находятся редчайшие образцы вычислительной техники, начиная с советских мейнфреймов и заканчивая культовыми персональными компьютерами эпохи 80-х.",
            hText2: "Музей — это не просто статичная выставка. Это интерактивное пространство, где каждый компьютер находится в рабочем состоянии. Вы можете написать свой первый код на БК-0010 или запустить легендарные игры на оригинальном железе.",

            // Страница "Мероприятия" (events.html)
            topEvents: "мероприятия", mainTitleEvents: "ПРЕДСТОЯЩИЕ СОБЫТИЯ",
            ev1_t: "Воркшоп: Программирование на перфокартах", ev1_d: "Попробуйте себя в роли инженера 1960-х годов. Напишем и перфорируем первую программу.",
            ev2_t: "Лекция: Архитектура ретро-консолей", ev2_d: "Разбор аппаратных хитростей NES, Sega Mega Drive и того, как выжимали максимум из килобайтов памяти.",
            ev3_t: "Турнир по DOOM (1993) на ЭЛТ-мониторах", ev3_d: "Настоящий LAN-party. Прочувствуйте атмосферу первых сетевых баталий на аутентичном железе.",

            // Страница билетов (tickets.html)
            topTickets: "покупка", mainTitleTickets: "СТОИМОСТЬ БИЛЕТОВ", btnOrder: "Оформить",
            tAdult: "Взрослый", tChild: "Детский", tFamily: "Семейный", tDiscount: "Льготный",
            mAdult: "От 18 лет", mChild: "От 7 до 18 лет включительно", mFamily: "Для семей от 4-ех человек", mFamilySub: "Двое взрослых, двое детей", mDiscount: "Для инвалидов, пенсионеров",
            bannerTitle: "Выставка «Цифровой горизонт»", bannerMore: "Подробнее", alertText: "Вы выбрали билет: "
        },
        en: {
            // Общие элементы
            navHome: "Home", navVisitors: "For Visitors", navMuseum: "Museum", navEvents: "Events", navContacts: "Contacts",
            buyTicket: "Buy Ticket", searchPlh: "Search site...", footerSubscribe: "SUBSCRIBE TO UPDATES",
            footerFormPlh: "Enter your email", footerRules: "I agree to the processing of personal data, I have read the privacy policy",
            footerContacts: "CONTACTS", footerPolicy: "TERMS & POLICY", footerAbout: "ABOUT US", footerSubTitle: "SUBSCRIPTION", footerMore: "MORE",

            // Главная страница
            topHome: "main page", mainTitleHome: "COMPUTER TECHNOLOGY MUSEUM", subTitleHome: "From vacuum tube calculators to quantum systems of the future.",
            exhibitsTitle: "EXHIBITS GALLERY", btnMore: "Learn more",

            // Страница "Посетителям"
            topVisitors: "visitor info", mainTitleVisitors: "FOR VISITORS", subTitleVisitors: "Everything you need to know before diving into computing history. Plan your visit with ease.",
            c1_t: "Opening Hours", c1_tx: "Monday — Friday: 10:00 AM – 8:00 PM<br>Saturday — Sunday: 11:00 AM – 9:00 PM<br><br><b>The ticket office closes 45 minutes before closing time.</b>",
            c2_t: "How to Find Us", c2_tx: "Our Address: 404 Technology Avenue.<br><br><b>Subway:</b> 'Digital' Station (3 min. walk).<br><b>Buses:</b> Route 80, Route 256.",
            c3_t: "Museum Rules", l1: "Amateur photography is free of charge", l2: "Do not touch non-interactive components", l3: "Live retro computing stands are open to test",
            mapLoad: "Interactive map is loading...",

            // Страница "О музее"
            topHistory: "About museum", mainTitleHistory: "HISTORY & MISSION", hText1: "We collect, restore, and preserve the milestones of the digital revolution. Our collection features incredibly rare examples of computing hardware, ranging from early Soviet mainframes to iconic personal computers of the 1980s.",
            hText2: "The museum is not just a static display. It is an interactive environment where every computer is preserved in working condition. You can write your first lines of code on BC-0010 or run legendary games on original hardware.",

            // Страница "Мероприятия"
            topEvents: "events", mainTitleEvents: "UPCOMING EVENTS",
            ev1_t: "Workshop: Punch Card Programming", ev1_d: "Step into the shoes of a 1960s engineer. Write and punch your very first working program.",
            ev2_t: "Lecture: Retro Console Architecture", ev2_d: "An in-depth analysis of hardware tricks in NES and Sega Mega Drive, and how they squeezed power from kilobytes.",
            ev3_t: "DOOM (1993) Tournament on CRT Monitors", ev3_d: "A genuine old-school LAN party. Experience the atmosphere of early network battles on authentic hardware.",

            // Страница билетов
            topTickets: "checkout", mainTitleTickets: "TICKET PRICES", btnOrder: "Order",
            tAdult: "Adult Ticket", tChild: "Child Ticket", tFamily: "Family Pass", tDiscount: "Concession",
            mAdult: "Ages 18+", mChild: "From 7 to 18 years old inclusive", mFamily: "For families of 4 or more", mFamilySub: "Two adults, two children", mDiscount: "For seniors and disabled individuals",
            bannerTitle: "Exhibition 'Digital Horizon'", bannerMore: "Read More", alertText: "You selected ticket: "
        }
    };

    // Определение текущего языка из localStorage
    const langBtn = document.getElementById('langBtn');
    let currentLang = localStorage.getItem('siteLang') || 'ru';

    const translatePage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        // 1. Перевод навигационного меню (во всех файлах одинаковое)
        const navLinks = document.querySelectorAll('.main-nav ul li a');
        const navKeys = ['navHome', 'navVisitors', 'navMuseum', 'navEvents', 'navContacts'];
        navLinks.forEach((link, idx) => {
            if (navKeys[idx] && t[navKeys[idx]]) link.textContent = t[navKeys[idx]];
        });

        // 2. Перевод шапки и футера
        if (document.querySelector('.btn-ticket')) document.querySelector('.btn-ticket').textContent = t.buyTicket;
        if (document.querySelector('.search-box input')) document.querySelector('.search-box input').placeholder = t.searchPlh;
        if (document.querySelector('.footer-title')) document.querySelector('.footer-title').textContent = t.footerSubscribe;
        if (document.querySelector('.footer-form input')) document.querySelector('.footer-form input').placeholder = t.footerFormPlh;
        if (document.querySelector('.label-text')) document.querySelector('.label-text').innerHTML = t.footerRules;

        const footerTitles = document.querySelectorAll('.footer-col .footer-title');
        const footerKeys = [t.footerSubscribe, t.footerContacts, t.footerPolicy, t.footerAbout, t.footerSubTitle, t.footerMore];
        footerTitles.forEach((title, i) => { if (footerKeys[i]) title.textContent = footerKeys[i]; });

        // 3. Динамический перевод уникальных блоков страниц по их ID/классам
        const topBarContainer = document.querySelector('.top-bar .container');

        // --- Логика для ГЛАВНОЙ СТРАНИЦЫ ---
        if (document.title.includes('Главная')) {
            if (topBarContainer) topBarContainer.textContent = t.topHome;
            if (document.querySelector('.main-title')) document.querySelector('.main-title').textContent = t.mainTitleHome;
            if (document.querySelector('.hero-section p')) document.querySelector('.hero-section p').textContent = t.subTitleHome;
            if (document.querySelector('.exhibits-section h2')) document.querySelector('.exhibits-section h2').textContent = t.exhibitsTitle;
            document.querySelectorAll('.btn-more').forEach(btn => btn.textContent = t.btnMore);
        }

        // --- Логика для СТРАНИЦЫ ПОСЕТИТЕЛЯМ ---
        if (document.title.includes('Посетителям')) {
            if (topBarContainer) topBarContainer.textContent = t.topVisitors;
            if (document.getElementById('vTitle')) document.getElementById('vTitle').textContent = t.mainTitleVisitors;
            if (document.getElementById('vSubtitle')) document.getElementById('vSubtitle').textContent = t.subTitleVisitors;
            if (document.getElementById('mapPlaceholder')) document.getElementById('mapPlaceholder').innerHTML = `<i class="fa-solid fa-map-location-dot" style="margin-right:8px;"></i> ${ t.mapLoad }`;

            const card1 = document.querySelector('[data-card="1"]');
            if (card1) { card1.querySelector('.c-title').textContent = t.c1_t; card1.querySelector('.c-text').innerHTML = t.c1_tx; }
            const card2 = document.querySelector('[data-card="2"]');
            if (card2) { card2.querySelector('.c-title').textContent = t.c2_t; card2.querySelector('.c-text').innerHTML = t.c2_tx; }
            const card3 = document.querySelector('[data-card="3"]');
            if (card3) {
                card3.querySelector('.c-title').textContent = t.c3_t;
                card3.querySelector('.li-1').textContent = t.l1; card3.querySelector('.li-2').textContent = t.l2; card3.querySelector('.li-3').textContent = t.l3;
            }
        }

        // --- Логика для СТРАНИЦЫ О МУЗЕЕ ---
        if (document.title.includes('О музее')) {
            if (topBarContainer) topBarContainer.textContent = t.topHistory;
            if (document.querySelector('.main-title')) document.querySelector('.main-title').textContent = t.mainTitleHistory;
            const paragraphs = document.querySelectorAll('.history-text-block p');
            if (paragraphs[0]) paragraphs[0].textContent = t.hText1;
            if (paragraphs[1]) paragraphs[1].textContent = t.hText2;
        }
        // --- Логика для СТРАНИЦЫ МЕРОПРИЯТИЙ ---
        if (document.title.includes('Мероприятия')) {
            if (topBarContainer) topBarContainer.textContent = t.topEvents;
            if (document.querySelector('.main-title')) document.querySelector('.main-title').textContent = t.mainTitleEvents;

            const evCards = document.querySelectorAll('.event-card');
            const evTitles = ['ev1_t', 'ev2_t', 'ev3_t'];
            const evDescs = ['ev1_d', 'ev2_d', 'ev3_d'];
            evCards.forEach((card, idx) => {
                if (evTitles[idx]) card.querySelector('.event-card-title').textContent = t[evTitles[idx]];
                if (evDescs[idx]) card.querySelector('.event-card-desc').textContent = t[evDescs[idx]];
                if (card.querySelector('.btn-more')) card.querySelector('.btn-more').textContent = t.btnMore;
            });
        }

        // --- Логика для СТРАНИЦЫ БИЛЕТОВ ---
        if (document.title.includes('Стоимость билетов')) {
            if (topBarContainer) topBarContainer.textContent = t.topTickets;
            if (document.querySelector('.main-title')) document.querySelector('.main-title').textContent = t.mainTitleTickets;
            if (document.querySelector('.sidebar-more-link')) document.querySelector('.sidebar-more-link').textContent = t.bannerMore;
            if (document.querySelector('.banner-title-box h3')) document.querySelector('.banner-title-box h3').textContent = t.bannerTitle;

            const rows = document.querySelectorAll('.ticket-row');
            const names = ['tAdult', 'tChild', 'tFamily', 'tDiscount'];
            const metas = ['mAdult', 'mChild', 'mFamily', 'mDiscount'];

            rows.forEach((row, idx) => {
                if (row.querySelector('.ticket-name') && names[idx]) row.querySelector('.ticket-name').textContent = t[names[idx]];
                if (row.querySelector('.meta-label') && metas[idx]) row.querySelector('.meta-label').textContent = t[metas[idx]];
                if (row.querySelector('.btn-order')) row.querySelector('.btn-order').textContent = t.btnOrder;
            });
            if (document.querySelector('.sub-meta')) document.querySelector('.sub-meta').textContent = t.mFamilySub;
        }

        // Кнопка интерфейса языка
        langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
        localStorage.setItem('siteLang', lang);
    };

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            translatePage(currentLang);
        });
        translatePage(currentLang);
    }



    // ЭФФЕКТ А: Световой курсорный трекинг (Glow Spotlight) для карточек экспонатов и эвентов
    const interactiveCards = document.querySelectorAll('.exhibit-card, .event-card, .visitor-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${ x }px`);
            card.style.setProperty('--mouse-y', `${ y }px`);
        });
    });

    // ЭФФЕКТ Б: 3D Tilt эффект (параллакс при движении мыши) для баннеров и карт
    const tiltElements = document.querySelectorAll('#tiltCard, #mapSection');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
            const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
            el.style.transform = `rotateX(${ tiltX }deg) rotateY(${ tiltY }deg) scale3d(1.01, 1.01, 1.01)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ЭФФЕКТ В: Магнитные интерактивные кнопки при наведении (Magnetic Buttons)
    const magneticBtns = document.querySelectorAll('.btn-order, .btn-more, .btn-ticket');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = translate(`${ x * 0.3}px, ${ y * 0.3}px`);
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Действие клика по кнопке билетов на странице билетов
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const t = translations[currentLang];
            const row = e.target.closest('.ticket-row');
            const name = row ? row.querySelector('.ticket-name').textContent : '';
            alert(`${t.alertText}"${name}"`);
        });
    });

    // ЭФФЕКТ Г: Умный ступенчатый скролл-вылет (Staggered Reveal Effect)
    const revealElements = document.querySelectorAll('.reveal');
    const checkReveal = () => {
        let delayIdx = 0;
        const triggerPoint = window.innerHeight * 0.88;

        revealElements.forEach((el) => {
            if (el.getBoundingClientRect().top < triggerPoint) {
                if (!el.classList.contains('active')) {
                    if (el.classList.contains('ticket-row') || el.classList.contains('event-card') || el.classList.contains('visitor-card')) {
            el.style.transitionDelay = `${ delayIdx * 0.08 } s`;
            delayIdx++;
        }
        el.classList.add('active');
    }
}
        });
    };
window.addEventListener('scroll', checkReveal);
checkReveal();
});