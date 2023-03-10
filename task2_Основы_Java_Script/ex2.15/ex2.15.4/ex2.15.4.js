'use strict';

//Функция pow(x,n)

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...* 1 = 1
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow(x, n) {
    return x ** n;
}

let x = +prompt('Введите число');
if (x % 1 === 0) {
    let n = +prompt('Введите степень')
    if (n % 1 === 0) {
        alert(pow(x, n));
    } else alert(`Степень ${n} не натуральное число!`)
} else alert(`${x} не натуральное число!`)

