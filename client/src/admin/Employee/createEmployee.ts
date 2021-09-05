import { EmployeesDb } from './../../classes/Employees/employeeDb';
import { DepartmentDb } from './../../classes/department';
import { setAdmin } from "../main";
import { setOptions } from '../../layout/input';
import { EmployeeClass } from '../../classes/Employees/employee';
import { setDisabled } from '../../layout/button';
import { formObject } from '../../Dom/forms';
import { employee } from '../../Interfaces/Employee/employeeData';

setAdmin("Register employee", true, "person_add")

const dept = document.querySelector('#department') as HTMLSelectElement
const Manager = document.querySelector('#manager') as HTMLSelectElement
const employeeForm = document.querySelector('#register') as HTMLFormElement
const department = new DepartmentDb()
const employeeDb = new EmployeesDb()
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
/**form submit handling */
employeeForm.addEventListener('submit', async e => {
    e.preventDefault()
    setDisabled('disable')
    let data = formObject(employeeForm) as Partial<employee>
    employeeDb.saveEmployee(data)
    setDisabled('enable')
})