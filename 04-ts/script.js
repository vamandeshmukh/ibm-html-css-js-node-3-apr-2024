console.log('TypeScript Intro');
// // typescript - superscript of javascript
// // Java 
// // double salary = 10.50;
// // JS 
// // let salary = 10.50;
// // TS 
// let salary: number = 10.50;
// console.log(salary);
// salary = 12.50;
// console.log(salary);
// // salary = 'abc';
// // console.log(salary);
// const addNums = (a, b) => { return a + b };
// let sum = addNums(10, 20);
// console.log(sum);
// const addNums = (a: number, b: number): number => { 
//     // return 10; 
//     return 'abc'; 
// };
// let sum: number = addNums(10, 20);
// console.log(sum);
// let anotherSum: boolean = addNums('abc', 'def');
// console.log(anotherSum);
// const addNums = (a: number, b: number): void => {
//     console.log(a + b);
//     return undefined;
// };
var Employee = /** @class */ (function () {
    function Employee(num) {
        var _this = this;
        this.num = 10;
        this.print = function () { console.log('value: ', _this.num); };
        this.num = num;
    }
    return Employee;
}());
var emp = new Employee();
emp.print();
