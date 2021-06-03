import { CompanyDb } from "../classes/company"
import { config } from "../config/config"
import { checkAdmin } from "../security/auth"

const comp = document.querySelector('#company') as HTMLParagraphElement
const compLogo = document.querySelector('#compLogo') as HTMLImageElement
const company = new CompanyDb()
window.addEventListener('load', async e => {
    checkAdmin()
    let { name, logo } = await company.getCompany()
    comp.innerText = name
    compLogo.src = config.file + logo
})