'use strict';

//Ошибка создания экземпляра класса

//В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name) // добавили
        //this.name = name // ненужная строка
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);