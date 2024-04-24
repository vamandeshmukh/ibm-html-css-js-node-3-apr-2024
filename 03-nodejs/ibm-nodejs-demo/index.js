
console.log('node project working...');

const url = 'https://jsonplaceholder.typicode.com/users/2';

import axios from 'axios';

axios.get(url)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// ReferenceError: axios is not defined 

/*
// Comparison 
// Spring+Maven  -  Node+NPM
// pom.xml - package.json  
// maven update - npm install 
// run project - npm start 
// project - package 
// mvnrepository.com - npmjs.com 
// 
*/
