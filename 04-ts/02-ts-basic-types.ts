// tsc 02-ts-basic-types.ts
// node 02-ts-basic-types.js

// Example #3: Type annotation with object properties

// let employee: {
//     id: number;
//     name: string;
// };

// employee = {
//     id: 100,
//     name: "John"
// };

// console.log(employee);


// const fun = (): void => { 
//     // code 
//     return 0;
// };



// generic type to array 



// let list = [1, 2, 3, 'abc'];
// let list2: number[] = [1, 2, 3, 'abc'];
// let list3: Array<number> = [1, 2, 3, 4, 'abc'];


// tuple 

let employee: [number, string] = [1, "Steve"];
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string]; // declare tuple variable

user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

// user = [1, false, true, 20, "Admin"]; // initialize tuple variable





// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

// let myFavColor: Color = Color.Yellow; 



// let initialValue: string = 'abc';
// console.log(initialValue);

// initialValue = 20;
// console.log(initialValue);


// let initialValue: any = 'abc';
// console.log(initialValue);

// initialValue = 20;
// console.log(initialValue);

// initialValue = false;
// console.log(initialValue);



// let initialValue: string | number = '';

// console.log(initialValue);

// initialValue = 20;
// console.log(initialValue);

// initialValue = 'abc';
// console.log(initialValue);

// initialValue = false;
// console.log(initialValue);


// console.log('start');

// function error(message: string): never {
//     console.log(message);
//     throw new Error(message);
// }

// error('abc');

// console.log('end');



// let num = 10;

// let num2: number = 20;

// console.log(typeof (num));
// console.log(typeof (num2));


let code: any = 123; 
let employeeCode = <number> code; 










