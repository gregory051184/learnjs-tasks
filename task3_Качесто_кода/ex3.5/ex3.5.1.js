'use strict';

import * as assert from "assert";

// Функция pow взята из учебника
function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) !== n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

//Что не так в нижеприведённом тесте функции pow?
it("Возводит x в степень n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});
//P.S. Тест не содержит синтаксических ошибок и успешно проходит.


// Переписанный тест
describe("Возводит x в степень n", function () {
    it("5 ** 1 = 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("5 ** 2 = 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 ** 3 = 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});

// Такая реалиация теста лучше, т.к.
// 1. Будут более понятны входные и ожидаемый результат

// 2. Принципиальная разница в том, что когда один из assert выбрасывает ошибку (в первом варианте),
// то выполнение it блока тут же прекращается. Таким образом,
// если второй assert выбросит ошибку, результат работы третьего assert мы уже не узнаем,
// а во торой реализации теста мы проходим се блоки it и получаем полную информацию по тестированию

// 3. Также можно изолироать один конкретный тест и получать информацию только от него

