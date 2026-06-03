document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // ЭФФЕКТ 1: ПОСЛЕДОВАТЕЛЬНОЕ ПОЯВЛЕНИЕ (STAGGERED REVEAL)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const checkReveal = () => {
            const triggerBottom = window.innerHeight * 0.9;
            let delayCounter = 0;

            revealElements.forEach((el) => {
                const boxTop = el.getBoundingClientRect().top;

                if (boxTop < triggerBottom) {
                    if (!el.classList.contains('active')) {
                        // Если это строка билета, добавляем небольшую задержку шага
                        if (el.classList.contains('ticket-row')) {
                            el.style.transitionDelay = `${ delayCounter * 0.1 } s`;
                            delayCounter++;
                        }
                        el.classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', checkReveal);
        checkReveal(); // Первичная проверка при загрузке страницы
    }


    // ==========================================================================
    // ЭФФЕКТ 2: 3D ТИЛТ ДЛЯ КАРТОЧКИ ВЫСТАВКИ (3D TILT EFFECT)
    // ==========================================================================
    const tiltCard = document.getElementById('tiltCard');

    if (tiltCard) {
        tiltCard.addEventListener('mousemove', (e) => {
            const cardRect = tiltCard.getBoundingClientRect();

            // Вычисляем координаты курсора относительно центра карточки
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const mouseX = e.clientX - cardRect.left - cardWidth / 2;
            const mouseY = e.clientY - cardRect.top - cardHeight / 2;

            // Переводим в градусы наклона (максимум 10 градусов)
            const maxTilt = 10;
            const tiltX = (mouseY / (cardHeight / 2)) * -maxTilt;
            const tiltY = (mouseX / (cardWidth / 2)) * maxTilt;

            // Применяем 3D трансформацию
            tiltCard.style.transform = `rotateX(${ tiltX }deg) rotateY(${ tiltY }deg) scale3d(1.02, 1.02, 1.02)`;
        });

        // Сброс положения, когда мышь уходит с карточки
        tiltCard.addEventListener('mouseleave', () => {
            tiltCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }


    // ==========================================================================
    // ЭФФЕКТ 3: МАГНИТНЫЕ КНОПКИ "ОФОРМИТЬ" (MAGNETIC BUTTONS)
    // ==========================================================================
    const magneticButtons = document.querySelectorAll('.btn-order');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const btnRect = btn.getBoundingClientRect();

            // Расстояние от курсора до центра кнопки
            const btnWidth = btnRect.width;
            const btnHeight = btnRect.height;
            const btnX = e.clientX - btnRect.left - btnWidth / 2;
            const btnY = e.clientY - btnRect.top - btnHeight / 2;

            // Притягиваем кнопку на 35% от расстояния до курсора
            btn.style.transform = translate(`${ btnX * 0.35}px, ${ btnY * 0.35}px`);
        });

        // Возвращаем кнопку на место при уходе мыши
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });

        // Простое действие по клику (вместо сломавшейся корзины)
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('.ticket-row');
            const ticketName = row ? row.querySelector('.ticket-name').textContent : '';
            alert(`Вы выбрали билет: "${ticketName}".Перенаправление на шлюз оплаты...`);
        });
    });
});