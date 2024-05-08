var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 04-ts-classes.ts
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.printName = function () {
            console.log("Person's name is ".concat(_this.firstName, "."));
        };
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, salary) {
        var _this = _super.call(this) || this;
        _this.printEmpData = function () {
            console.log(_this.id, _this.firstName, _this.salary);
        };
        _this.id = id;
        _this.firstName = firstName;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(101, 'Sonu', 10.50);
emp.printEmpData();
emp.printName();
