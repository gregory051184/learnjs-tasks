'use strict';

//Разница между вызовами

//Давайте создадим новый объект rabbit:

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
//Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
// Т.к. метод sayHi выводит this.name, то только в первом случае this == rabbit,
// во всех остальных this равен Rabbit.prototype
