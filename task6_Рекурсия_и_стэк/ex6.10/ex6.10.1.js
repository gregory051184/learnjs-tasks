'use strict';

//Связанная функция как метод

//Что выведет функция?

function f() {
    console.log(this); // Данная функция выведет null, так как контекст был привязан к null
}

let user = {
    g: f.bind(null)
};

user.g();