export type employeeData = {
    _id: string | number,
    emp_id: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    sex: 'M' | 'F',
    position: string,
    department: string,
    salary: number,
    type: string,
    manager: string,
    created_date?: Date
}
export type saveEmployeeData = {
    emp_id: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    sex: 'M' | 'F',
    position: string,
    department: string,
    salary: number,
    type: string,
    manager: string,
}
export type editEmployeeData = {
    _id: string | number,
    emp_id?: string,
    first_name?: string,
    middle_name?: string,
    last_name?: string,
    sex?: 'M' | 'F',
    position?: string,
    department?: string,
    salary?: number,
    type?: string,
    manager?: string,
    created_date?: Date
}
