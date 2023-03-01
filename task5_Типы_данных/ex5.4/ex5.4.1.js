'use strict';

//Скопирован ли массив?
//Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
// заменил alert на console.log
console.log(fruits.length); // => 4, т.к. shoppingCart и fruits это ссылки на один и тот же массив