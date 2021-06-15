import { strNum } from "../general";
import { editEmployeeData, employeeData, saveEmployeeData } from "./employeeData";

export interface employeeDb {
    getEmployees(): Promise<employeeData[]>
    loadingError(): Promise<Boolean>
    saveEmployee(employee: saveEmployeeData): Promise<void>
    editEmployee(employee: editEmployeeData): Promise<void>
    deleteEmployee(id: string | number): Promise<void>
}
export interface employee {
    employees: employeeData[]
    find(emp_id: string): employeeData
    fullName(emp_id: string): string
    thumbnail(emp_id: string): string
    name(emp_id: string): string
    position(emp_id: strNum): string
    manager(emp_id: strNum): string
    department(emp_id: strNum): string
    search(index: string | number): employeeData[]

}