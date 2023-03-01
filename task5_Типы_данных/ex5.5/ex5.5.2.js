'use strict';

//Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

let filterRange = (arr, a, b) => {
    let new_arr = arr.filter(item => (a <= item && item <= b));
    console.log(`Старый массив ${arr}\n--------------------\nНовый массив ${new_arr}`);
    return new_arr;
};

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)