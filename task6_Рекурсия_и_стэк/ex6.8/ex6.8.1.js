'use strict';

//Вывод каждую секунду.

//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

//функция с использованием setInterval
let printNumbers_I = (from, to) => {
    let num = from;
    let interval = setInterval(() => {
        console.log(num)
        if (num === to) {
            clearInterval(interval)
        }
        num++
    }, 1000)
};

//printNumbers_I(1, 5)

//функция с использованием setTimeout
let printNumbers_T = (from, to) => {
    let num = from;
    setTimeout(function start() {
        console.log(num);
        if (num <= to) {
            setTimeout(start, 1000);
        }
        num++;
    }, 1000)
};

printNumbers_T(7, 12)