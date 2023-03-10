'use strict';

//Создайте новый объект с помощью уже существующего
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором –
// мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?
// Да, можем, если уверены, что  свойство "constructor" существующего объекта имеет корректное значение.

//Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
//Работает корректно
function Pet_1(animal) {
    this.animal = animal
}

let pet_1 = new Pet_1('cat');

let pet_2 = new pet_1.constructor('dog');

console.log(pet_1.animal);
console.log(pet_2.animal);
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.
//Работает неправильно
function Pet_2(animal) {
    this.animal = animal
}

Pet_2.prototype = {}

let pet_3 = new Pet_2('cat');

let pet_4 = new pet_3.constructor('dog');

console.log(pet_4.animal);
