// tsc 03-ts-advanced-types.ts

// optional paremeters 

// const myFun = (firstName: string, salary?: number): void => {
//     console.log(`First Name: ${firstName}`);
//     if (salary)
//         console.log(`Salary: ${salary}`);
// };

// // myFun();
// myFun('Sonu');
// myFun(10.50);
// myFun('Sonu', 10.50);
// myFun('Sonu', 10.50, false);


// rest parameters 


// const myFun = (...names: string[]): void => {
//     for (let name of names)
//         console.log(name);
// };


// myFun('Sonu', 'Monu', 'Tonu');


// type Employee = { id: number, name: String, salary: number };

// let emp: Employee = { id: 101, name: 'Sonu', salary: 10.50 };
// let emp2: Employee = { id: 102, name: 'Monu', salary: 12.50 };

// console.log(emp);
// console.log(emp2);


// REST Parameters
// REST Parameters + spread operator 

