'use strict';

//Использование "this" в литерале объекта
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// заменил alert на console.log

console.log(user.ref.name); // Каким будет результат?

// Результат будет ошибкой -  TypeError: Cannot read properties of undefined (reading 'name')
// this не важен момент определения объекта, важен момент вызова.
// Если ref прератить метод объекта и вернуть через него this то всё получится:

let makeUser_1 = () => {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}
let user_1 = makeUser_1()
console.log(user_1.ref().name)
