'use strict';

//Вывод односвязного списка в обратном порядке

//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//рекурсия
let recFunc = list => {
    if (list.next) {
        recFunc(list.next);
    }
    console.log(list.value);
};

recFunc(list);

//цикл
let loopFunc = list => {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.next
    }
    let new_arr = arr.sort((a, b) => b - a);
    for (let item in new_arr) {
        console.log(new_arr[item])
    }
};

loopFunc(list)