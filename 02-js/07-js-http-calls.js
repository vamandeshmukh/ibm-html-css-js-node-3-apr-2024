// node 07-js-http-calls.js

const url = 'https://jsonplaceholder.typicode.com/users/2';

// fetch(url).then().catch();
// fetch(url).then(() => {}).then(() => {}).catch(() => {});

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     }).then((resp) => {
//         console.log(resp);
//     })
//     .catch((error) => { console.log(error); });

// fetch(url)
//     .then(res => res.json())
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

const springBootUrl = 'http://localhost:8090/emp/get-all-emps';
const springBootUrlPost = 'http://localhost:8090/emp/add-emp';

// fetch(springBootUrl)
//     .then(res => res.json())
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

const empDataToAdd = {
    firstName: 'Dinu',
    email: 'dinu@gmail.com',
    aadhaar: 222222222222,
    salary: 2222
};

fetch(springBootUrlPost, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(empDataToAdd)
})
    .then(res => res.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err));


// axios()


