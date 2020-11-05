'use strict';


const ball1 = document.querySelector('.animation1__ball');
ball1.addEventListener('click', function() {
    animate({
        duration: 2000,
        // временная функция исполнения анимации, может быть не только кривой Безье
        timing: function(timeFraction) {
            return makeEaseOut(bounce)(timeFraction);
        },
        draw(progress) { // функция отрисовки анимации, она рисует анимацию
            ball1.style.transform = `translateY(${progress * 205}px)`;
        }
    });
});

const field2 = document.querySelector('.animation2');
const ball2 = document.querySelector('.animation2__ball');
const floor2 = document.querySelector('.animation2__floor');

ball2.addEventListener('click', function () {
    let height2 = field2.clientHeight - ball2.clientHeight;
    let width2 = 200;
    // анимация top (прыжки)
    animate({
        duration: 2000,
        // временная функция исполнения анимации, может быть не только кривой Безье
        timing: function (timeFraction) {
            return makeEaseOut(bounce)(timeFraction);
        },
        draw(progress) { // функция отрисовки анимации, она рисует анимацию
            ball2.style.top = `${height2 * progress - floor2.clientHeight}px`;
        }
    });
    // анимация left (движение вправо)
    animate({
        duration: 2000,
        timing: function (timeFraction) {
            return makeEaseOut(quad)(timeFraction);
        },
        draw(progress) {
            ball2.style.left = `${width2 * progress}px`;
            ball2.style.transform = `rotate(${progress * 360}deg)`;
        }
    });

});

