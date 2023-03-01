'use strict';

//Перебираемые ключи
//Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys(); // в данном получаем мы не массив, а итератор

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
let keys_2 = Array.from(map.keys()); // Здесь преобразуем итератор в массив и всё получится

keys_2.push("more");
console.log(keys_2);
//Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?