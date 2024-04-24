// console.log('02-js-functions.js');

// class MyClass {

// }

// function myFun() {
//     console.log('myFun invoked.');
// }

// myFun();

// const myFun2 = () => {
//     console.log('myFun2 invoked.');
//  };

//  myFun2();


// const myFun = (a, b) => {
// console.log(a + b);
// };

// myFun(); // NaN
// myFun(10); // 10, NaN 
// myFun(10, 20); // 30 
// myFun(10, 20, 30); // 30 

const myFun = (a = 2, b = 3) => {
    console.log(a + b);
};

// myFun(); // 5
// myFun(10); // 13  
// myFun(10, 20); // 30 
// myFun(10, 20, 30); // 30 

// console.log(myFun());
console.log(myFun);


(function () {
    console.log('iife function invoked');
})();


