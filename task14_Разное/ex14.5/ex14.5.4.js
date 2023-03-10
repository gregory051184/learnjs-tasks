'use strict';

//Почему результат разный?
// Почему результат второго console.log'а такой странный?

console.log(123456789 ^ 0); // 123456789
console.log(12345678912345 ^ 0); // 1942903641

// Побитовые операции преобразуют число в 32-битное целое.
// Обычно число в JavaScript имеет 64-битный формат с плавающей точкой.
// При этом часть битов (52) отведены под цифры,
// часть (11) отведены под хранение номера позиции, на которой стоит десятичная точка, и один бит – знак числа.
// Это означает, что максимальное целое число, которое можно хранить, занимает 52 бита.
// Число 12345678912345 в двоичном виде: 10110011101001110011110011100101101101011001 (44 цифры).
//Побитовый оператор ^ преобразует его в 32-битное путём отбрасывания десятичной точки и «лишних» старших цифр.