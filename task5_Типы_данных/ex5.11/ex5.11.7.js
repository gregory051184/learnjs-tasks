'use strict';

//Сколько секунд осталось до завтра?
//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//Например, если сейчас 23:00, то:

//getSecondsToTomorrow() == 3600
//P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

let getSecondsToTomorrow = () => {
    let rightNow = new Date();
    let tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    return Math.round((tomorrow - rightNow) / 1000);
};


console.log(getSecondsToTomorrow());