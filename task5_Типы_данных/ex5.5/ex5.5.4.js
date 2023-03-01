'use strict';

//Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((first, second) => second - first);

console.log( arr ); // 8, 5, 2, 1, -10