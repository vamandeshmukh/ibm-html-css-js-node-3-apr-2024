class Employee {

    employeeId;
    firstName;
    salary;

    constructor(employeeId, firstName, salary) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.salary = salary;
    };

    toString = () => {
return `Employee: employeeId: ${this.employeeId} firstName: ${this.firstName} salary: ${this.salary}`;
    };
}

const employee = new Employee();
console.log(employee.toString());
const employee2 = new Employee(101, 'Sonu', 10.5);
console.log(employee2.toString());
