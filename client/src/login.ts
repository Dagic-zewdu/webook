import { CompanyDb } from "./classes/company"
import { usersDb } from "./classes/users"
import { config } from "./config/config"
import { formObject } from "./Dom/forms"
import { loginData } from "./Interfaces/users"

const logo = document.querySelector('#logo') as HTMLImageElement
const form = document.querySelector('#login')! as HTMLFormElement
const company = new CompanyDb()
const user = new usersDb
window.addEventListener('load', async e => {
    let comp = await company.getCompany()
    logo.src = config.file + comp.logo
})
form.addEventListener('submit', async e => {
    e.preventDefault()
    const data = formObject(form) as loginData
    user.logIn(data, '#message')
})