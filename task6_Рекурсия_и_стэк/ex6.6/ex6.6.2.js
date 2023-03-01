'use strict';

//Сумма с произвольным количеством скобок.
// Напишите функцию sum, которая бы работала следующим образом:

//sum(1)(2) == 3; // 1 + 2
//sum(1)(2)(3) == 6; // 1 + 2 + 3
//sum(5)(-1)(2) == 6
//sum(6)(-1)(-2)(-3) == 0
//sum(0)(1)(2)(3)(4)(5) == 15
//P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

let sum = num => {
    let some_sum = num;

    function sumCreator(nextNum) {
        some_sum += nextNum;
        return sumCreator;
    }

    sumCreator.valueOf = function () {
        return some_sum;
    }
    return sumCreator;
};


console.log(sum(1)(2)(3)(5).valueOf())