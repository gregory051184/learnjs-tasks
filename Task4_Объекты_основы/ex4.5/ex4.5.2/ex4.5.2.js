'use strict';

//Создайте калькулятор при помощи конструктора, new Calculator

//Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму этих свойств.
//mul() возвращает произведение этих свойств.
//Например:

function Calculator() {
    this.first_num = 0;
    this.second_num = 0;
    this.read = function () {
        this.first_num = +prompt('Введите перое число', '0');
        this.second_num = +prompt('Введите второе число', '0')
    };
    this.sum = function () {
        return this.first_num + this.second_num;
    };
    this.mul = function () {
        return this.first_num * this.second_num;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());