'use strict';

//Скопировать и отсортировать массив

//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let copySorted_1 = arr => {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i]);
    }
    return new_arr.sort();
};

// Можно также сделать через slice
function copySorted_2(arr) {
    return arr.slice().sort();
}

let sorted = copySorted_1(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)