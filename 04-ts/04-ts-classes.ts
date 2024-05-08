// 04-ts-classes.ts
class Person {

    firstName: string;

    printName = () => {
        console.log(`Person's name is ${this.firstName}.`);
    };
}
class Employee extends Person {

    id: number;
    firstName: string;
    salary: number;
    constructor(id: number, firstName: string, salary: number) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.salary = salary;
    }
    printEmpData = (): void => {
        console.log(this.id, this.firstName, this.salary);
    };
}

const emp = new Employee(101, 'Sonu', 10.50);
emp.printEmpData();
emp.printName();
















