'use strict';

//Сумма свойств объекта

//У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//Если объект salaries пуст, то результат должен быть 0.

// Написал функцию
let count_sum = some_object => {
    let sum = 0

    for (let i in some_object) {
        sum += salaries[i];
    }
    console.log(sum);
    return sum
};

// без функции
let sum = 0;

for (let i in salaries) {
    sum += salaries[i];
}
console.log(sum);

