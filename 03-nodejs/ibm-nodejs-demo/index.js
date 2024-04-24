
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const url = 'https://jsonplaceholder.typicode.com/users/2';

// app.listen( port, () => {});

app.listen(port, () => {
    console.log('app started.');
});

app.get('/', (request, response) => {
    axios.get(url)
        .then((res) => {
            console.log(res);
            response.send(res.username);
        })
        .catch(err => console.log(err));
});

app.get('/contact', (request, response) => {
    console.log('contact');
    response.send('Please contact us.');
});

app.get('/about', (request, response) => {
    console.log('about');
    response.send('About our company...');
});








// console.log('node project working...');

// const url = 'https://jsonplaceholder.typicode.com/users/2';

// import axios from 'axios';

// axios.get(url)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// // ReferenceError: axios is not defined

// /*
// // Comparison
// // Spring+Maven  -  Node+NPM
// // pom.xml - package.json
// // maven update - npm install
// // run project - npm start
// // project - package
// // mvnrepository.com - npmjs.com
// //
// */
