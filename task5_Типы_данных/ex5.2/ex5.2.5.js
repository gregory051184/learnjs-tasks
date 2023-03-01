'use strict';

//Случайное число от min до max

//Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

//Пример работы функции:

let random = (min, max) => {
    return min + Math.random() * (max - min);
};

// Заменил alert на console.log
console.log(random(1, 5));
