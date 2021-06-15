import { employee } from "../../Interfaces/Employee/employee";
import { employeeData } from "../../Interfaces/Employee/employeeData";
import { strNum } from "../../Interfaces/general";
import { search as Search } from "../../Utility/searchObject";
import { EmployeesDb } from "./employeeDb";
const empDb = new EmployeesDb()
export class Employee implements employee {
    public employees: employeeData[]
    /**
     * @param employees=>data of employees object array 
     */
    constructor(employees: employeeData[]) {
        this.employees = employees
    }
    /**finds employee with given employee id
     * @param emp_id=> string of employee _id
     * @returns object of employee information
     */
    find = (emp_id: string | number) => this.employees.find(e => emp_id === emp_id)!
    /**finds employee name with given employee id
     * @param emp_id=> string of employee _id
     * @returns firstname and middle name of the given employee id
     */
    name = (emp_id: string | number) => this.find(emp_id) ? this.find(emp_id).first_name +
        ' ' + this.find(emp_id).middle_name : ''
    /**finds employee full name with given employee id
     * @param emp_id=> string of employee _id
     * @returns firstname and middle name and last name and  of the given employee id
     */
    fullName = (emp_id: string | number) => this.name(emp_id) + ' ' + this.find(emp_id).last_name
    /**finds employee thumbnail with given employee id
     * @param emp_id=> string of employee _id
     * @returns firstname and last name firt letter 
     */
    thumbnail = (emp_id: string | number) => {
        let first_name = this.find(emp_id) ? this.find(emp_id).first_name : ''
        let last_name = this.find(emp_id) ? this.find(emp_id).last_name : ''
        return first_name.slice(0, 1) + last_name.slice(0, 1)
    }
    /**finds employee position with given employee id
     * @param emp_id=> string of employee _id
     * @returns position of the given employee id
     */
    position = (emp_id: strNum) => this.find(emp_id) ? this.find(emp_id).position : ''
    /**finds employee manager with given employee id
     * @param emp_id=> string of employee _id
     * @returns manager of the given employee id
     */
    manager = (emp_id: strNum) => this.find(emp_id) ? this.find(emp_id).manager : ''
    /**finds employee department with given employee id
     * @param emp_id=> string of employee _id
     * @returns department of the given employee id
     */
    department = (emp_id: strNum) => this.find(emp_id) ? this.find(emp_id).position : ''
    /**search employee with the given index string 
     * @param index=> text string to search
     * @param data=> optional employeeData parameter if not set it will use the entire employee data
     * @returns employee data of object array
     */
    search = (index: strNum, data?: employeeData[]) =>
        Search(index, ['emp_id', 'first_name', 'middle_name', 'last_name', 'department', 'manager', 'position', 'type'],
            data ? data : this.employees) as employeeData[]

}
