import { strNum } from "../general";
import {  Employee} from "./employeeData";

export interface employeeDb {
    getEmployees(): Promise<Employee[]>
    loadingError(): Promise<Boolean>
    saveEmployee(employee: Partial<Employee>): Promise<void>
    editEmployee(employee: Partial<Employee>): Promise<void>
    deleteEmployee(id: string | number): Promise<void>
}
export interface employee {
    employees: Employee[]
    find(emp_id: string):Employee
    fullName(emp_id: string): string
    thumbnail(emp_id: string): string
    name(emp_id: string): string
    position(emp_id: strNum): string
    manager(emp_id: strNum): string
    department(emp_id: strNum): string
    search(index: string | number): Employee[]

}