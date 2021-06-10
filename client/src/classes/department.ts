import { delData } from "../connection/delData";
import { editData } from "../connection/editData";
import { fetchData } from "../connection/fetchData";
import { saveData } from "../connection/saveData";
import { renderLoading, renderOutput } from "../Dom/render";
import { delDepartment, departmentData, departmentDb, editDepartment, saveDepartment } from "../Interfaces/department";

export class DepartmentDb implements departmentDb {
    getDepartment = async () => (await fetchData('department')).data as [departmentData]
    departmentLoaded = async () => !(await fetchData('department')).loading
    departmentError = async () => (await fetchData('department')).error
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
    editDepartment = async (dep: editDepartment, id: string) => {
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
    delDepartment = async (dep: delDepartment, id: string) => {
        const save = await delData(dep, 'department')
        if (!save.error) {
            if (save.deleted) {
                renderOutput("success", "department deleted successfully", id)
            }
            else if (!save.deleted) {
                renderOutput("error", "internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", id)
        }
    }
}