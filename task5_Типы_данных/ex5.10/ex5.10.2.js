'use strict';

//Максимальная зарплата
// У нас есть объект salaries с зарплатами:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let topSalary = arr => {
    let rich_name;
    let maxMoney = 0;
    for (let [name, value] of Object.entries(arr)) {
        maxMoney = Math.max(maxMoney, value);
        if (salaries[name] === maxMoney) {
            rich_name = name;
        }
    }
    return rich_name ? rich_name : null;
};

console.log(topSalary(salaries))