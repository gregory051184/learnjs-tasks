'use strict';

//Операции с массивами
//Давайте произведём 5 операций с массивом.
//Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

// Массив по ходу выполнения операций:

let style = ['Джаз', 'Блюз'];
console.log(style);

style.push('Рок-н-ролл');
console.log(style);
// на мой взгляд задание по замене среднего значения в массиве на «Классика» составленно некорректно,
// т.к. длина массива может быть чётной и тогда не будет среднего значения.
// В условиях ниже я прописал, что если длина массива чётная, то по середине будет вставлено значение «Классика».
if ((style.length / 2) % 1 !== 0) {
    style.splice(Math.floor(style.length / 2), 1, 'Классика');
} else style.splice(style.length / 2, 0, 'Классика');
console.log(style);

style.shift();
console.log(style);

style.splice(0, 0, 'Рэп', 'Регги'); // можно использовать unshift
console.log(style);


//Джаз, Блюз
//Джаз, Блюз, Рок-н-ролл
//Джаз, Классика, Рок-н-ролл
//Классика, Рок-н-ролл
//Рэп, Регги, Классика, Рок-н-ролл