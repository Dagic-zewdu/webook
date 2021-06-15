import { DepartmentDb } from "../classes/department";
import { formObject } from "../Dom/forms";
import { saveDepartment } from "../Interfaces/department";
import { setDisabled } from "../layout/button";
import { renderNull } from "../layout/input";
import { setAdmin } from "./main";

setAdmin('create department', true)
const form = document.querySelector('#register') as HTMLFormElement
const submitButton = document.querySelector('#submit') as HTMLButtonElement
const dp = new DepartmentDb()
renderNull()
form.addEventListener('submit', e => {
    e.preventDefault()
    setDisabled('disable')
    let data = formObject(form) as saveDepartment
    dp.saveDepartment(data)
    setDisabled('enable')
})