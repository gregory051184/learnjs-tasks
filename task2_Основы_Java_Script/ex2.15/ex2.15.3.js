'use strict';

//Функция min(a, b)

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

//Пример вызовов:
//min(2, 5) == 2
//min(3, -1) == -1
//min(1, 1) == 1

function min(a, b) {
    if (a < b) {
        console.log(`a = ${a}`)
        return a;
    } else if (a === b) {
        console.log(`a = b = ${b}`)
        return a || b
    } else {
        console.log(`b = ${b}`)
        return b;
    }
}
