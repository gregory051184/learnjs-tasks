'use strict';

//Объясните значение "this"

//В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
    go: function () {
        console.log(this);
    }
};

obj.go();               // (1) [object Object] => обычный вызов метода объекта через точку .,
// и this ссылается на объект перед точкой.

(obj.go)();             // (2) [object Object] =>  то же самое, что и  первом случае

(method = obj.go)();    // (3) undefined => Здесь f() выполняется как функция, без передачи значения this.
// вызов работает, как если бы он был разделён на 2 строчки: method = obj.go и method()

(obj.go || obj.stop)(); // (4) undefined => тут также, как и третьем случае идёт потеря this