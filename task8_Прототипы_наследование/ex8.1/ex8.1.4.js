'use strict';

//Почему наедаются оба хомяка?

//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
//Ответ:
// Оба хомяка наедаются, т.е. получают доступ к массиву stomach, т.к. оба наследуются от объекта
// hamster, в котором и содержится этот массив. Когда один хомяк пополняет этот массив, другой также имеет доступ
// к уже заполненному массиву.
// Чтобы это исправить, нужно, чтобы у каждого хомяка был свой массив, т.е. свой живот
// => правильный код для хомяков внизу
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};
//
//let speedy = {
//    __proto__: hamster
//};
//
//let lazy = {
//    __proto__: hamster
//};
// Этот хомяк нашёл еду
//speedy.eat("apple");
//console.log(speedy.stomach); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
//console.log(lazy.stomach); // apple
//Правильный код
let speedy_2 = {
    stomach: [],
    __proto__: hamster
};

let lazy_2 = {
    stomach: [],
    __proto__: hamster
};
speedy_2.eat('cucumber');
console.log(speedy_2.stomach);
lazy_2.eat('nuts')
console.log(lazy_2.stomach);
