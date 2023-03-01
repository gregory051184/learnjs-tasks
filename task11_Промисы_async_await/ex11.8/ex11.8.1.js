'use strict';

//Перепишите, используя async/await
//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

//loadJson('no-such-user.json') // (3)
//   .catch(console.log); // Error: 404

async function loadJson_await(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error(response.status);
    }
}

loadJson_await('no-such-user.json') // (3)
    .catch(console.log); // Error: 404