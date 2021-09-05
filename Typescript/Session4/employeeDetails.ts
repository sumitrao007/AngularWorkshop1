
import {Employee} from "./employee";
import { Department } from "./department";

export class EmployeeDetails implements Employee
{
    lname: string;
    fname: string;
    salary:number;
    dept:Department;

    constructor(l:string,f:string,
        salary:number,role:string){
        this.lname=l;
        this.fname=f;
        this.salary=salary;
        this.dept=new Department(role);
    }

    display() {
        console.log(`
        ------Employee Details-----------
        First name  ::${this.fname}
        Last Name   ::${this.lname}
        Salary  ::    ${this.salary}
        Role    ::    ${this.dept.getRole()}
        `);
    }

}