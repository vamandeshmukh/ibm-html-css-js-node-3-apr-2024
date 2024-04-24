// node 07-js-http-calls.js

console.log('07-js-http-calls.js');

const url = 'https://jsonplaceholder.typicode.com/users/2';

// fetch(url).then().catch();
// fetch(url).then(() => {}).then(() => {}).catch(() => {});


fetch(url)
    .then((res) => {
        console.log(res);
        res.json;
    }).then((resp) => {
        console.log(resp);
    })
    .catch((error) => { console.log(error); });

