'use strict';

//Перепишите 'if' в '?'

// Перепишите конструкцию if с использованием условного оператора '?'
//let result;

//if (a + b < 4) {
//    result = 'Мало';
//} else {
//    result = 'Много';
//}

// Переписываем через тернарный оператор. Но сначала определим переменные a и b
let a = +prompt('Введите а', '');
let b = +prompt('Введите b', '');

let result = (a + b) < 4 ? 'Мало' : 'Много';

alert(`${result}`);
