'use strict';

//Перепишите с использованием функции-стрелки
//Замените код Function Expression стрелочной функцией:
//function ask(question, yes, no) {
//    if (window.confirm(question)) yes()
//    else no();
//}

//ask(
//    "Вы согласны?",
//    function () {
//        alert("Вы согласились.");
//    },
//    function () {
//        alert("Вы отменили выполнение.");
//    }
//);

// Записываем виде стрелочной функции:
const ask_1 = (question, yes, no) => {
    if (window.confirm(question)) yes()
    else no();
}

ask_1(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
