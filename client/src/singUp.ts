import { EmployeeClass } from "./classes/Employees/employee"
import { EmployeesDb } from "./classes/Employees/employeeDb"
import { formObject } from './Dom/forms';
import { renderLoading, renderOutput } from "./Dom/render";
import { strNum } from "./Interfaces/general";
import { signupData } from "./Interfaces/users";
import { usersDb } from './classes/users';

const form = document.getElementById('addUser') as HTMLFormElement
const employeeDb = new EmployeesDb()
const userDb = new usersDb()
const pswInput = document.querySelector("#password") as HTMLInputElement

form.addEventListener('submit', async e => {
    e.preventDefault()
    renderLoading('#message')
    let employees = await employeeDb.getEmployees()
    let empClass = new EmployeeClass(employees)
    let user = formObject(form)
    let { password, cpassword } = user
    let compare = password.toString().localeCompare(cpassword.toString())
    if (compare !== 0) {
        pswInput.focus()
        renderOutput("error",
            "password confirmation error please enter password correctly", '#message')
    }
    else {
        let data = { ...user, user_type: 'user' } as signupData
        let { emp_id } = user
        let employee = empClass.find(emp_id as strNum) ? true : false
        console.log(employee)
        //employee found
        if (employee) {
            userDb.signUp(data, '#message')
        }
        else {
            renderOutput('error', 'employee is not registered with this employee id please contact the admin')
        }
    }

})
