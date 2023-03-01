'use strict';

//Случайное целое число от min до max

//Напишите функцию randomInteger(min, max), которая генерирует случайное
// целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

let randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// заменил alert на console.log
console.log(randomInteger(1, 5));

//Можно использовать решение из предыдущей задачи.