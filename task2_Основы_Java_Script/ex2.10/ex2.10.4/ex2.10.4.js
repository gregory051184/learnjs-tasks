'use strict';

// Перепишите 'if..else' в '?'

//Перепишите if..else с использованием нескольких операторов '?'.
//Для читаемости рекомендуется разбить код на несколько строк.
//let message;
//if (login == 'Сотрудник') {
//    message = 'Привет';
//} else if (login == 'Директор') {
//    message = 'Здравствуйте';
//} else if (login == '') {
//    message = 'Нет логина';
//} else {
//    message = '';
//}

// Переписываем через тернарный оператор. Будем водить login через prompt

let login = prompt('Введите логин', '');
let message;
login === 'Сотрудник' ? message = 'Привет' :
    login === 'Директор' ? message = 'Здравствуйте' :
        login === '' ? message = 'Нет логина' :
            message = 'Такого логина не существует';
alert(message);