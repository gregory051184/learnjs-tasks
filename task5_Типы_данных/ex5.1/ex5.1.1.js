'use strict';

//Можно ли добавить свойство строке?

//Взгляните на следующий код:
//заменил alert на console.log
let str = "Привет";

str.test = 5;

console.log(str.test);
//Как вы думаете, это сработает? Что выведется на экран?

// В данном режиме (use strict) будет ошибка => TypeError: Cannot create property 'test' on string 'Привет'
// str - это примитив, а не объект, а примитивы не могут хранить доп. свойств.