import { DepartmentDb } from "../classes/department";
import { render, renderContentLoading, renderLoading, renderLoadingError } from "../Dom/render";
import { optionButton, renderTable, thead } from "../Dom/renderTable";
import { setModal } from "../layout/Modal";
import { allAdmin } from "./main";
//admin set 
allAdmin('Department')
let dep = new DepartmentDb()
let d_id = ''  //delete _id
let e_id = ''    //edit _id
const delConfirm = document.querySelector('#delete')! as HTMLButtonElement
const delMessage = document.querySelector('#delMessage')! //delete message id selector for processing delete
const delMssg = delMessage.innerHTML

//set table for the department
const setTable = async (mssg?: string) => {
    console.log(mssg)
    renderContentLoading('#deptable')
    let error = await dep.departmentError()
    let Data = await dep.getDepartment()
    if (error) {
        renderLoadingError('#deptable')
    }
    else {
        let tableHeader: thead[] = [
            { name: 'office number', icon: 'tag' },
            { name: 'name', icon: 'account_box' },
            { name: 'employee quantity', icon: 'people' },
            { name: 'phone number', icon: 'phone' },
            { name: 'options', icon: 'setting' }
        ]
        let option: optionButton[] = [
            { name: 'Edit', color: 'primary', icon: 'edit' },
            { name: 'Delete', color: 'danger', icon: 'delete' }
        ]
        let data = Data.map(d => {
            return {
                _id: d._id,
                office_number: d.office_number,
                name: d.name,
                emp_length: d.emp_length,
                phone: d.phone
            }
        })
        renderTable(tableHeader, data, '#deptable', option)
        const button = document.querySelectorAll('button')
        const del = document.querySelector('#delDepartment') as HTMLElement
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

                window.location.href = '/editDepartment.html' + '?' + 'id=' + e.id
            })
        })
    }
}
setTable()
//adding click event listener to the confirm delete button
delConfirm.addEventListener('click', () => delDepartment())
//Delete department from
const delDepartment = () => {
    dep.delDepartment({ _id: d_id }, '#delMessage')
    setTable('hii')
}