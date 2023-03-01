'use strict';

//Ввод числового значения

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
// пока посетитель его не введёт.

//Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

function readNumber() {
    let some_value;
    do {
        some_value = prompt("Введите число");
    } while (!isFinite(some_value));

    if (some_value === null || some_value === '') {
        alert('Отменено.');
        return null;
    }
    alert(`Введено число ${some_value}`);
    return +some_value;
}

readNumber();