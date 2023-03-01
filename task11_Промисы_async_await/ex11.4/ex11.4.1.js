'use strict';

//Ошибка в setTimeout
//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// Нет, не выполнится, т.к. ошибка обрабатывается по ходу выполнения кода, а здесь она происходит с опозданием,
// поэтому catch не сработает.