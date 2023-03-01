'use strict';

//Получить средний возраст

//Напишите функцию getAverageAge(users), которая принимает массив объектов
// со свойством age и возвращает средний возраст.
//Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

//Например:


let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

function getAverageAge_1(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0) / arr.length
}

// более трудоёмкий способ без reduce
let getAverageAge_2 = arr => {
    let sum = 0;
    arr.map(user => user.age).forEach(age => sum += age);
    return sum / arr.length;
}

console.log(getAverageAge_1(arr)); // (25 + 30 + 29) / 3 = 28