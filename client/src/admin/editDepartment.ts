import { DepartmentDb } from "../classes/department";
import { setPlaceholder } from "../Dom/forms";
import { sample } from "../Dom/renderTable";
import { departmentData } from "../Interfaces/department";
import { getUrlId } from "../routes/route";
import { allAdmin } from "./main";

allAdmin('edit Department', true)
const form = document.querySelector('#edit')! as HTMLFormElement
const id = getUrlId()
const dep = new DepartmentDb()
let Department
const setEditField = async () => {
    const departments = await dep.getDepartment()
    const department = departments.find(d => d._id == id) as sample
    Department = department
    console.log(Department)
    setPlaceholder(form, department)
}

setEditField()