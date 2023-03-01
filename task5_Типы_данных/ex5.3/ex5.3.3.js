'use strict';

//Усечение строки

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//Например:

let truncate = (some_str, str_len) => {
    if (some_str.length > str_len) {
        console.log(some_str.slice(0, str_len - 1) + '...');
        return some_str.slice(0, str_len) + '...';
    }
    console.log(some_str)
    return some_str;
};

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) // "Вот, что мне хотело…"

truncate("Всем привет!", 20) // "Всем привет!"