'use strict';

//Проверка значения из диапазона

//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//«Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = +prompt('Введите возраст');

if (age >= 14 && age <= 90) {
    alert(`${age} находится в диапазоне от 14 до 90 включительно`);
} else alert(`${age} НЕ находится в диапазоне от 14 до 90 включительно`);

