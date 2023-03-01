'use strict';

//Куда будет произведена запись?

//Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

//Это свойство получит rabbit, т.к. this будет относиться к объекту, который вызывает метод eat (this=rabbit).
// Проверим:

console.log(rabbit.full); // => true
console.log(animal.full); // => undefined

