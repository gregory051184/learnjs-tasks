'use strict';

//Проверка синтаксиса
// Каким будет результат выполнения этого кода?

let user = {
    name: "John",
    go: function () {
        console.log(this.name)
    }
}; // здесь нужно поставить ";", она была пропущена.

(user.go)()
//P.S. Здесь есть подвох :)