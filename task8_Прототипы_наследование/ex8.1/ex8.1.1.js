'use strict';

//Работа с прототипами

//В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true берётся из rabbit

delete rabbit.jumps;

console.log(rabbit.jumps); // null, т.к. будет брать из animal

delete animal.jumps;

console.log(rabbit.jumps); // undefined, т.к. нет ни в rabbit, ни в animal

//Должно быть 3 ответа.