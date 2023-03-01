'use strict';

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

let checkSpam = some_str => {
    if (some_str.toLowerCase().includes('viagra') || some_str.toUpperCase().includes('XXX')) {
        console.log('Есть спам(true)')
        return true
    } else {
        console.log('Спама нет(false)')
        return false
    }
};


checkSpam('buy ViAgRA now') // true
checkSpam('free xxxxx') // true
checkSpam("innocent rabbit") // false