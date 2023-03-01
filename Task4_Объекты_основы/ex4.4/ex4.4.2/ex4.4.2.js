'use strict';

//Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    first_num: 0,
    second_num: 0,
    read() {
        this.first_num = +prompt('Введите первое число', '0');
        this.second_num = +prompt('Введите второе число', '0');
    },
    sum() {
        return this.first_num + this.second_num;
    },
    mul() {
        return this.first_num * this.second_num;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());