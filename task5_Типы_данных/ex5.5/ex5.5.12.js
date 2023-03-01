'use strict';

//Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

function unique(arr) {
    let uniqueList = [];
    for (let item of arr) {
        if (!uniqueList.includes(item)) {
            uniqueList.push(item);
        }
    }
    return uniqueList;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O