'use strict';

/*
    В этом файле содержатся функции расчёта времени анимаций
*/

// Параболическая кривая анимации
// Чем выше степень, тем быстрее анимация
function quad(timeFraction, pow = 2) {
    return Math.pow(timeFraction, pow)
}

// Дуга
function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}

// Обратно: выстрел из лука
// x – «коэффициента эластичности». Он определяет силу «натяжения тетивы».
function back(timeFraction, x = 1.5) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

// Отскоки
function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
}

// Эластичная анимация
function elastic(timeFraction, x = 1.5) {
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}

// Реверсивные функции -----------------------------------------------------------------
// принимает функцию расчёта времени и возрващает преобразованный вариант где анимация будет происходить наоборот
function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
}

// easeInOut
function makeEaseInOut(timing) {
    return function(timeFraction) {
      if (timeFraction < .5)
        return timing(2 * timeFraction) / 2;
      else
        return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
}








