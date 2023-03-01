'use strict';

//Две функции - один объект

// Возможно ли создать функции A и B, чтобы new A() == new B()?

//function A() { ...
//}
//function B() { ...
//}
//let a = new A();
//let b = new B();
//alert(a == b); // true

//Если да – приведите пример вашего кода.
//Заменил alert на console.log
// Да, возможно.

let myName = {
    name: 'Gregory'
}

function A() {
    return myName
}

function B() {
    return myName
}

let a = new A();
let b = new B();
console.log(a == b); // true