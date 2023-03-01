'use strict';

//Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// функция
let multiplyNumeric = some_object => {
    for (let i in some_object) {
        if (typeof some_object[i] === "number") {
            some_object[i] *= 2;
        }
    }console.log(some_object)
}

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

//P.S. Используйте typeof для проверки, что значение свойства числовое.