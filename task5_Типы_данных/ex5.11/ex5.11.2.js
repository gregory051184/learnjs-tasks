'use strict';

//Покажите день недели

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года

let getWeekDay = date => {
    let day = date.getDay();
    let weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return weekdays[day];
};

console.log(getWeekDay(date));