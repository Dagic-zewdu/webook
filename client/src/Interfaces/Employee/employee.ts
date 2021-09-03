import { strNum } from "../general";
import {  employee} from "./employeeData";

export interface employeeDb {
    getEmployees(): Promise<employee[]>
    loadingError(): Promise<Boolean>
    saveEmployee(employee: Partial<employee>): Promise<void>
    editEmployee(employee: Partial<employee>): Promise<void>
    deleteEmployee(id: string | number): Promise<void>
}
export interface Employee {
    employees: employee[]
    find(emp_id: string):employee
    fullName(emp_id: string): string
    thumbnail(emp_id: string): string
    name(emp_id: string): string
    position(emp_id: strNum): string
    manager(emp_id: strNum): string
    department(emp_id: strNum): string
    search(index: string | number): employee[]

}