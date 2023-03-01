'use strict';

//Странный instanceof

//Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {
}

function B() {
}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true, т.к. instanceof учитывает только prototype,
// который проверяется на совпадения в прототипной цепочке, а  A.prototype = B.prototype = {};