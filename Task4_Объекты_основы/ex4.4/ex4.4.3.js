'use strict';

//Цепь вызовов

//У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// заменил alert на console.log
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
    }
};
//Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep(); // 1
//ladder.down();
//ladder.showStep(); // 0
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

//ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
//Такой подход широко используется в библиотеках JavaScript.

// Чтобы вызвать методы данного объекта по цепочке нужно, чтобы эти методы озращали сам объект
let ladder_1 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder_1.up().up().down().showStep().down().showStep()