import { renderLoadingError, renderContentLoading } from './../../Dom/render';
import { employee } from "../../Interfaces/Employee/employeeData";
import { setAdmin } from "../main";
import { EmployeesDb } from '../../classes/Employees/employeeDb';
import { optionButton, renderTable, thead } from '../../Dom/renderTable';
import { EmployeeClass } from '../../classes/Employees/employee';
import { Department, DepartmentDb } from '../../classes/department';
import { setModal } from './../../layout/Modal';

setAdmin('Employees', false, 'people')
const delConfirm = document.querySelector('#delete')! as HTMLButtonElement
const delMessage = document.querySelector('#delMessage')! //delete message id selector for processing delete
const Search = document.querySelector('#search') as HTMLInputElement
const delMssg = delMessage.innerHTML
var employees:employee[]
var Employee:EmployeeClass
let err:boolean
let empDb = new EmployeesDb()
let d_id = ''  //delete _id
/** */
const RenderTable = async (data: employee[], error: boolean) => {
    try {
        if (error) {
            throw new Error('')
        }
        else {
            let deptDb = new DepartmentDb() // department database class
            let departments = await deptDb.getDepartment() //getting 
            let Dept = new Department(departments)
            let tableHeader: thead[] = [
                { name: 'Employee id', icon: 'badge' },
                { name: 'Full name', icon: 'account_circle' },
                { name: 'sex', icon: '' },
                { name: 'Department', icon: 'groups' },
                { name: 'position', icon: 'chair' },
                { name: 'type', icon: '' },
                { name: 'salary', icon: 'payments' },
                { name: 'manager', icon: 'chair' },
                { name: 'options', icon: 'settings' }
            ]
            //data to render
            console.log(data)
            let employeeRender = data.map(e => {
                console.log(e.manager)
                return {
                    _id: e.emp_id,
                    emp_id: e.emp_id,
                    fullName: Employee.fullName(e.emp_id),
                    sex: e.sex,
                    department: Dept.getDepartment(e.department).name,
                    position: e.position,
                    type: e.type,
                    salary: e.salary,
                    manager: Employee.name(e.manager) ? Employee.name(e.manager) : 'Not set'
                }
            })
            //option button
            let option: optionButton[] = [
                { name: 'Edit', color: 'primary', icon: 'edit' },
                { name: 'Delete', color: 'danger', icon: 'delete' }
            ]
            renderTable(tableHeader, employeeRender, '#empTable', option)
            const button = document.querySelectorAll('button')
            const del = document.querySelector('#delEmployee') as HTMLElement
            let delButton: HTMLButtonElement[] = [], editButton: HTMLButtonElement[] = []
            //classifying button base on their type
            button.forEach(b => {
                if (b.name === 'Edit') {
                    editButton.push(b)
                }
                else if (b.name === 'Delete') {
                    delButton.push(b)
                }
            })
            //adding event listener to each delete button
            delButton.forEach(d => {
                d.addEventListener('click', () => {
                    delMessage.innerHTML = delMssg
                    setModal(del, d)
                    d_id = d.id
                })
            })
            //adding event listener to edit button
            editButton.forEach(e => {
                e.addEventListener('click', () => {

                    window.location.href = '/editEmployee.html' + '?' + 'id=' + e.id
                })
            })
        }
    }
    catch (err) {
        renderLoadingError('#empTable', "Cannot display employees data internal error please contact admin")
    }

}
delConfirm.addEventListener('click', async () => {
    
    let emp = await empDb.getEmployees()
    let empClass = new EmployeeClass(emp)
    empDb.deleteEmployee(empClass.find(d_id)._id, '#delMessage')
    setData()
})
const setData = async () => {
    try {
        renderContentLoading('#empTable')
        let empDb = new EmployeesDb()
        employees = await empDb.getEmployees()
        Employee=new EmployeeClass(employees)
        RenderTable(employees, false)
    }
    catch (err) {
        err=true
        RenderTable([], true)
    }
}
setData()
/**search */
Search.addEventListener('keyup',async e=>{
    const index = Search.value
    let result = index ?  Employee.search(index): employees
    RenderTable(result, err)
})
