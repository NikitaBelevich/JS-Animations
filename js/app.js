'use strict';


const ball1 = document.querySelector('.animation1__ball');
ball1.addEventListener('click', function() {
    animate({
        duration: 3000,
        // временная функция исполнения анимации, может быть не только кривой Безье
        timing: function(timeFraction) {
            return makeEaseOut(bounce)(timeFraction);
        },
        draw(progress) { // функция отрисовки анимации, она рисует анимацию
            ball1.style.marginLeft = progress * 200 + 'px';
            ball1.style.transform = `rotate(${progress * 180}deg)`;
        }
    });
});


