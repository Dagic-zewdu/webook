import { DepartmentDb } from "../classes/department";
import { formObject, setPlaceholder } from "../Dom/forms";
import { sample } from "../Dom/renderTable";
import { editDepartment } from "../Interfaces/department";
import { getUrlId } from "../routes/route";
import { setAdmin } from "./main";

setAdmin('edit Department', true)
const form = document.querySelector('#edit')! as HTMLFormElement
const id = getUrlId()
const dep = new DepartmentDb()
let Department: sample
const setEditField = async () => {
    const departments = await dep.getDepartment()
    const department = departments.find(d => d._id == id) as sample
    Department = department
    setPlaceholder(form, department)
}

setEditField()
form.addEventListener('submit', e => {
    e.preventDefault()
    const data = { _id: id, ...formObject(form) } as editDepartment
    dep.editDepartment(data)
})
