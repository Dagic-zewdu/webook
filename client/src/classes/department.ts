import { delData } from "../connection/delData";
import { editData } from "../connection/editData";
import { fetchData } from "../connection/fetchData";
import { saveData } from "../connection/saveData";
import { renderLoading, renderOutput } from "../Dom/render";
import { delDepartment, department, departmentData, departmentDb, editDepartment, saveDepartment } from "../Interfaces/department";
import { removeDuplicates } from "../Utility/array";
import { matchString } from "../Utility/search";

export class DepartmentDb implements departmentDb {
    getDepartment = async () => (await fetchData('department')).data as departmentData[]
    departmentError = async (): Promise<boolean> => (await fetchData('department')).error
    saveDepartment = async (dep: saveDepartment, id?: string) => {
        renderLoading(id)
        const save = await saveData(dep, 'department')
        if (!save.error) {
            if (save.created) {
                renderOutput("success", "department save successfully", id)
            }
            else if (!save.created) {

                renderOutput("error", "unable to save " + save.message, id)
            }
        }
        else {
            renderOutput("error", "unable to save please try again letter" + save.message._message, id)
        }

    }
    editDepartment = async (dep: editDepartment, id?: string) => {
        const save = await editData(dep, 'department')
        if (!save.error) {
            if (save.updated) {
                renderOutput("success", "department edited successfull", id)
            }
            else if (!save.updated) {
                renderOutput("error", "internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", id)
        }
    }
    delDepartment = async (dep: delDepartment, id?: string) => {
        renderLoading('#delMessage')
        const del = await delData(dep, 'department')
        if (!del.error) {
            if (del.deleted) {
                renderOutput("success", "department deleted successfully", id)
            }
            else if (!del.deleted) {
                renderOutput("error", "internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", id)
        }
    }
}

export class Department implements department {
    public Departments: departmentData[]
    constructor(deparments: departmentData[]) {
        this.Departments = deparments
    }
    searchDepartment = (index: string | number) => {
        const name = this.Departments.filter(d => matchString(index, d.name))
        const office_number = this.Departments.filter(d => matchString(index, d.office_number))
        const phone = this.Departments.filter(d => matchString(index, d.phone))
        return removeDuplicates([...name, ...office_number, ...phone], '_id') as departmentData[]
    }
    getDepartment = (id: string | number) => this.Departments.find(d => d._id === id)!
    name = (id: string | number) => this.getDepartment(id) ? this.getDepartment(id).name : ''
}