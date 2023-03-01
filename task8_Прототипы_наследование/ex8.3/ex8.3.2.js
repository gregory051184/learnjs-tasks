'use strict';

//Добавьте функциям декорирующий метод "defer()"
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

function defer(ms) {
    let func = this;

    function wrapper(...args) {
        setTimeout(() => func.apply(this, args), ms);
    }

    return wrapper;
}

Function.prototype.defer = defer;

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
//Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.