'use strict';

//Улучшенные часы

//У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// новый класс ExtendedClock, не создавать 2 отдельных файла js
class ExtendedClock extends Clock {
    constructor({template}) {
        super({template});
        this.precision = 1000;
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    };
}

let exClock = new ExtendedClock({template: 'h:m:s'})
console.log(exClock.start())
//Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision
// – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.