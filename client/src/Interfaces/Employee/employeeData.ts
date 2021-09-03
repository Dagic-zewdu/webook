export type employee = {
    _id: string | number,
    emp_id: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    sex: 'M' | 'F',
    position: string,
    department: string,
    salary: number,
    type: 'Manager'|'Employee',
    manager: string,
    created_date?: Date
}

