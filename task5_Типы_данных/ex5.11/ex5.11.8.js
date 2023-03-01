'use strict';

//Форматирование относительной даты.
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек назад".
// В противном случае, если меньше часа, вывести "m мин. назад"
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
// всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

let formatDate = date => {
    let rightNow = new Date()
    let difference = (rightNow - date) / 1000
    if (difference <= 1) return "прямо сейчас";
    else if (difference < 60) return `${difference} сек. назад`;
    else if (difference > 60 && difference < 1200) return `${Math.floor(difference / 60)} мин. назад`
    else {
        let past = date;
        past = ['0' + past.getDate(), '0' + (past.getMonth() + 1), '' + past.getFullYear(), '0' + past.getHours(), '0'
        + past.getMinutes()].map(component => component.slice(-2));
        return past.slice(0, 3).join('.') + ' ' + past.slice(3).join(':');
    }
};

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));// вчерашняя дата вроде 31.12.2016, 20:00