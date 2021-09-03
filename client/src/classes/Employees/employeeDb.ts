import { delData } from "../../connection/delData";
import { editData } from "../../connection/editData";
import { fetchData } from "../../connection/fetchData";
import { saveData } from "../../connection/saveData";
import { renderLoading, renderOutput } from "../../Dom/render";
import { employeeDb } from "../../Interfaces/Employee/employee";
import { employee } from "../../Interfaces/Employee/employeeData";
import { setDisabled } from "../../layout/button";

export class EmployeesDb implements employeeDb {
    getEmployees = async () => (await fetchData('employee')).data as employee[]
    loadingError = async () => (await fetchData('employee')).error
    saveEmployee = async (data: Partial<employee>, id?: string) => {
        renderLoading(id)
        const save = await saveData(data, 'employee')
        if (!save.error) {
            if (save.created) {
                renderOutput("success", "Employee saved successfully", id)
            }
            else if (!save.created) {

                renderOutput("error", "unable to save " + save.message, id)
            }
        }
        else {
            renderOutput("error", "unable to save please try again letter" + save.message._message, id)
        }
    }
    editEmployee = async (data: Partial<employee>, id?: string) => {
        const save = await editData(data, 'employee')
        if (!save.error) {
            if (save.updated) {
                renderOutput("success", "Employee data edited successfull", id)
            }
            else if (!save.updated) {
                renderOutput("error", "internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", id)
        }
    }
    deleteEmployee = async (id: string | number, did?: string) => {
        renderLoading('#delMessage')
        const del = await delData({ _id: id }, 'employee')
        if (!del.error) {
            if (del.deleted) {
                renderOutput("success", "Employee deleted successfully", did)
            }
            else if (!del.deleted) {
                renderOutput("error", "internal server error", did)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", did)
        }
    }
}