"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(l, f, salary, role) {
        this.lname = l;
        this.fname = f;
        this.salary = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n        ------Employee Details-----------\n        First name  ::" + this.fname + "\n        Last Name   ::" + this.lname + "\n        Salary  ::    " + this.salary + "\n        Role    ::    " + this.dept.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
