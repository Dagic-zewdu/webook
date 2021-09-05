import { DepartmentDb } from "../../classes/department";
import { EmployeeClass } from "../../classes/Employees/employee";
import { EmployeesDb } from "../../classes/Employees/employeeDb";
import { formObject, setPlaceholder } from "../../Dom/forms";
import { employee } from "../../Interfaces/Employee/employeeData";
import { setDisabled } from "../../layout/button";
import { setOptions } from "../../layout/input";
import { getUrlId } from "../../routes/route";
import { setAdmin } from "../main";
setAdmin("Edit employee", true, "edit")
const dept = document.querySelector('#department') as HTMLSelectElement
const Manager = document.querySelector('#manager') as HTMLSelectElement
const form = document.getElementById('editEmployee')! as HTMLFormElement
let emp_id = getUrlId()
const employeeDb = new EmployeesDb()
const department = new DepartmentDb()
/**setting option for the department */
const setDeptOption = async () => {
    let Dep = await department.getDepartment()
    Dep.forEach(d => setOptions(d._id, d.name, dept))
}
setDeptOption()
/**setting type for the manager */
const setManagerOption = async () => {
    let employees = await employeeDb.getEmployees()
    employees.forEach(e => e.type === 'Manager' ? setOptions(e.emp_id, e.first_name + ' ' + e.middle_name, Manager) : () => { })
}
setManagerOption()
/**place holder */
const placeHolder = async () => {
    let employees = await employeeDb.getEmployees()

    const empClass = new EmployeeClass(employees)
    setPlaceholder(form, empClass.find(emp_id))
}
placeHolder()
/**form submit handling */
form.addEventListener('submit', async e => {
    e.preventDefault()
    let employees = await employeeDb.getEmployees()
    const empClass = new EmployeeClass(employees)
    let Employee = await empClass.find(emp_id)

    setDisabled('disable')
    let data = formObject(form) as Partial<employee>
    employeeDb.editEmployee({ _id: Employee._id, ...data })
    setDisabled('enable')
})