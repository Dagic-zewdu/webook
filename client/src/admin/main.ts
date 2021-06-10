import { CompanyDb } from "../classes/company";
import { config } from "../config/config";
import { js, style } from "../Dom/addStyle";
import { sideNav } from "../layout/sideNav";
import { checkAdmin } from "../security/auth";
const company = new CompanyDb()
/**
 * 
 * @param page page title to show
 * @param search true-to avoid search input false-to include the default search input 
 */
export const allAdmin = async (page: string, search?: boolean) => {
    const append = document.querySelector('#append')!
    const body = document.querySelector('body')!
    body.innerHTML = sideNav(page, search)
    const main = body.querySelector('#main')!
    const logo = body.querySelector('#compLogo')! as HTMLImageElement
    main.append(append)
    const comp = (await company.getCompany()).logo
    logo.src = config.file + comp
    style()
    checkAdmin()
}


