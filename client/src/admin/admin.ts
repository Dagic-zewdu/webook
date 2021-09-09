import { CompanyDb } from "../classes/company";
import { config } from "../config/config";
import { setAdmin } from "./main";

setAdmin('Company', true, "business")
let name = document.getElementById('name')! as HTMLElement
let logo = document.getElementById('logo')! as HTMLImageElement
let adress = document.getElementById('adress')! as HTMLElement
const comDb = new CompanyDb()
const setComapany = async () => {
    let company = await comDb.getCompany()
    name.innerHTML = company.name
    logo.width = 200
    logo.src = config.file + company.logo
    adress.innerHTML = "city-" + company.city + `<br>` + "subcity-" + company.subcity + `<br>`
}
console.log(name)
setComapany()