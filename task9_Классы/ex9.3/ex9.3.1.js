'use strict';

//Класс расширяет объект?
// Как мы уже знаем, все объекты наследуют от Object.prototype
// и имеют доступ к «общим» методам объекта, например hasOwnProperty.
// Пример:

class Rabbit {
    constructor(name) {
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
console.log(rabbit.hasOwnProperty('name')); // true
//Но что если мы явно напишем "class Rabbit extends Object" – тогда
// результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit_1 extends Object {
    constructor(name) {
        super() // нужно добавить, без него this будет не определён
        this.name = name;
    }
}

let rabbit_1 = new Rabbit_1("Кроль");

console.log(rabbit_1.hasOwnProperty('name')); // true