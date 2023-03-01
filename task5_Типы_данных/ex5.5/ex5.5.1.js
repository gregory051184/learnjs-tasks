'use strict';

//Переведите текст вида border-left-width в borderLeftWidth

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//Примеры:

// способ с join и map
let camelize_1 = some_str => {
    let camelStr = some_str.split('-')
        .map((item, idx) => idx === 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');
    console.log(camelStr);
    return camelStr;
};

// способ без использования join и map
let camelize_2 = some_str => {
    let new_str = '';
    let list = some_str.split('-');

    for (let item in list) {
        if (list[item] === list[0]) {
            new_str += list[item];
        } else {
            let new_item = list[item][0].toUpperCase() + list[item].slice(1);
            new_str += new_item;
        }
    }
    console.log(new_str)
    return new_str
};

camelize_1("background-color"); // == 'backgroundColor';
camelize_1("list-style-image"); // == 'listStyleImage';
camelize_1("-webkit-transition"); // == 'WebkitTransition';

//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.