'use strict';

//Фильтрация по диапазону "на месте"

//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать.

//Например:

let arr = [5, 3, 8, 1];

let filterRangeInPlace = (arr, a, b) => {
    for (let item in arr ) {
        if(a > arr[item] || arr[item] > b) {
            arr.splice(item, 1)
        }
    }
};

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]