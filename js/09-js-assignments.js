// 09-js-assignments.js

// console.log('09-js-assignments.js');

// array exercieses

// 1. Create a function that takes an array of objects containing employees
// and returns the average / max / min salaries of all the employees.

// 2. Write a function that takes an array of objects
// and sorts them based on a specified property (e.g., salary or firstName)

// 3. Write a function that takes a string and converts it to a number.
// Handle cases where the string cannot be converted to a number
// and return an error message.

// 4. Write a function that takes a string and
// and returns the number of vowels it contains.

// 5. Create a function that takes a string and
// reverses the order of words (not characters) in it.

// 6. Demonstrate your understanding of rest parameters and spread operators 

// ==========

// 1. Create a function that takes an array of objects containing employees
// and returns the average / max / min salaries of all the employees.

function findAvgSal(employees) {
    if (employees.length === 0) {
        return 0;
    }
    const salaries = employees.map(employee => employee.salary);
    const totalSalary = salaries.reduce((sum, cur) => sum + cur);
    const avgSal = totalSalary / employees.length;
    return avgSal;
}

const emps = [
    { eid: 101, firstName: 'Sonu', salary: 20 },
    { eid: 102, firstName: 'Monu', salary: 30 },
    { eid: 103, firstName: 'Tonu', salary: 40 },
    { eid: 104, firstName: 'Ponu', salary: 50 },
];

// console.log(findAvgSal(emps));


// spread operators 


const arr = [10, 20, 30, 40];

// arr.forEach(a => console.log(a));

const [a, b, c, d] = [...arr];

// console.log(b);

// const addNums = (a, b) => a + b;
const addNums = (...args) => args.reduce((sum, elem) => sum + elem);

const sum = addNums(10, 20, 30, 40, 50);

console.log(sum);