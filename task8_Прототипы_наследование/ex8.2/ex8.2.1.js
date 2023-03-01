'use strict';

//Изменяем "prototype"

//В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

//console.log(rabbit.eats); // true
//Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?

function Rabbit_1() {}

Rabbit_1.prototype = {
    eats: true
};
let rabbit_1 = new Rabbit_1();

Rabbit_1.prototype = {};

console.log(rabbit_1.eats); // true не влияет на прототип уже существующих объектов
//…А если код такой (заменили одну строчку)?

function Rabbit_2() {}

Rabbit_2.prototype = {
    eats: true
};

let rabbit_2 = new Rabbit_2();

Rabbit_2.prototype.eats = false;

console.log(rabbit_2.eats); // false, т.к. мы изменили eat в Rabbit_2
//Или такой (заменили одну строчку)?

function Rabbit_3() {}

Rabbit_3.prototype = {
    eats: true
};

let rabbit_3 = new Rabbit_3();

delete rabbit_3.eats;

console.log(rabbit_3.eats); // true, т.к мы пытаемся удалить eats из объекта rabbit_3, но его там нет
//Или, наконец, такой:

function Rabbit_4() {}

Rabbit_4.prototype = {
    eats: true
};

let rabbit_4 = new Rabbit_4();

delete Rabbit_4.prototype.eats;

console.log(rabbit_4.eats); // undefined, eats удалено из прототипа, оно больше не существует
