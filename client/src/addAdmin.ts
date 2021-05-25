import { CompanyDb } from "./classes/company"
import { usersDb } from "./classes/users"
import { formObject } from "./Dom/forms"
import { renderOutput } from "./Dom/render"
import { signupData } from "./Interfaces/users"

const userDb = new usersDb()
const company = new CompanyDb()
const form = document.querySelector('#addAdmin') as HTMLFormElement
const pswInput = document.querySelector("#password") as HTMLInputElement
window.addEventListener('load', async e => {
    const check = await userDb.isAdminset()
    if (check) {
        window.location.pathname = '/login.html'
    }
    else {
        let companyCheck = await company.isCompanyset()
        if (!companyCheck)
            window.location.pathname = '/registerCompany.html'

    }
})

form.addEventListener('submit', async e => {
    e.preventDefault()
    const users = formObject(form)
    let { password, cpassword } = users
    let compare = password.localeCompare(cpassword)
    let data = { ...users, user_type: 'admin' } as signupData
    if (compare === 0) {
        userDb.signUp(data, '#message')
    }
    else {
        pswInput.focus()
        renderOutput("error",
            "password confirmation error please enter password correctly", '#message')
    }
})