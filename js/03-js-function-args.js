// 03-js-function-args.js

// const myFun = (arg) => {
//     let output = arg - 2;
//     console.log(output);
// };

// myFun('abc');


// const myFun = (arg) => {
//     let output = arg.city;
//     console.log(output);
// };

// myFun({abc: 'Bengaluru'});


// const myFun = (arg) => {
//     console.log('myFun invoked.');
//     let output = arg + 2;
//     console.log(output);
// };

// myFun(10);

// let num = 12;
// myFun(num);


// main funciton 
const myFun = (arg) => {
    console.log('myFun invoked.');
    arg(); // function call 
};

// callback function 
const anotherFun = () => {
    console.log('anotherFun named invoked');
};

myFun(anotherFun);

// myFun(() => { });

myFun(() => {
    console.log('another anonymous function invoked');
 });
