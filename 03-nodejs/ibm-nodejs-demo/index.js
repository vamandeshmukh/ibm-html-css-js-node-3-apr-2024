import axios from "axios";
import express from "express";

const app = express();
let port = 3000;
const url = 'https://jsonplaceholder.typicode.com/users/2';
const args = process.argv;
const portN = args.find(arg => arg.startsWith('port='));

if (portN) {
    port = portN.split('=').at(1); 

}
else {
    console.log('running on default port number')
}

// const port = process.argv ? process.argv.find(arg => arg.startsWith('port=')) : 3000;

// app.listen( port, () => {});

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}.`);
    console.log(process);
});

app.get('/', (request, response) => {
    axios.get(url)
        .then((res) => {
            console.log(res.data.username);
            response.send(res.data.name);
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
