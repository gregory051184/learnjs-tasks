'use strict';

//Отфильтруйте анаграммы
//Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//Например:

//nap - pan
//ear - are - era
//cheaters - hectares - teachers

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = arr => {
    let words = new Map();
    for (let word of arr) {
        words.set(word.toLowerCase().split('').sort().join(''), word)
    }
    return Array.from(words.values())
};

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
//Из каждой группы анаграмм должно остаться только одно слово, не важно какое.