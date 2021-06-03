export type departmentData = {
    name: string,
    phone: string,
    office_number: string,
    created_date: Date
}
export type saveDepartment = {
    name: string,
    phone: string,
    office_number: string
}
export type editDepartment = {
    name?: string,
    phone?: string,
    office_number?: string
}
export type delDepartment = {
    id?: string,
    name: string,
    phone: string,
    office_number: string
}
export interface departmentDb {
    getDepartment(): Promise<[departmentData]>
    departmentLoaded(): Promise<boolean>
    departmentError(): Promise<boolean>
    saveDepartment(dep: saveDepartment, id: string): Promise<void>
    editDepartment(dep: editDepartment, id: string): Promise<void>
    delDepartment(dep: delDepartment, id: string): Promise<void>
}