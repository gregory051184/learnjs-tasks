'use strict';

//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

let ucFirst = some_str => {
    let capitalized_first_letter = some_str[0].toUpperCase()
    console.log(some_str.replace(some_str[0], capitalized_first_letter)) // здесь можно применить slice c
    // capitalized_first_letter + some_str.slice(1)
    return some_str.replace(some_str[0], capitalized_first_letter)
};


ucFirst("вася"); // Вася