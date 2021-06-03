import { CompanyDb } from "../classes/company";
import { config } from "../config/config";
import { js, style } from "../Dom/addStyle";
import { sideNav } from "../inject/sideNav";
import { checkAdmin } from "../security/auth";
const company = new CompanyDb()
const append = document.querySelector('#append')!
const body = document.querySelector('body')!
body.innerHTML = sideNav('cpy')
const main = body.querySelector('#main')!
const logo = body.querySelector('#compLogo')! as HTMLImageElement
window.addEventListener('load', async e => {
    const comp = await (await company.getCompany()).logo
    logo.src = config.file + comp
})
main.append(append)
style()
checkAdmin()
