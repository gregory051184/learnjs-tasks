'use strict';

//Преобразуйте объект в JSON, а затем обратно в обычный объект.

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
};

let new_user = JSON.parse(JSON.stringify(user))
