'use strict';

//Свойство функции после bind

//В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); // что выведет? почему?

// выведет undefined, т.к. результатом работы bind является другой объект. У него уже нет свойства test.