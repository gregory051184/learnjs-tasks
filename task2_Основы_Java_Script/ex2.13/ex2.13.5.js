'use strict';

//Замените for на while
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// Заменил alert на console.log
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let i = 0;
while (i < 3) {
    console.log(`number ${++i}!`);
}

