import { CompanyDb } from "../classes/company";
import { config } from "../config/config";
import { style } from "../Dom/addStyle";
import { sideNav } from "../layout/sideNav";
import { checkAdmin } from "../security/auth";
const company = new CompanyDb()
/**
 * 
 * @param page page title to show
 * @param search true-to avoid search input false-to include the default search input
 * @param icon icon to set for the page 
 */
export const setAdmin = async (page: string, search?: boolean, icon?: string) => {
    style()
    const append = document.querySelector('#append')!
    const body = document.querySelector('body')!
    body.innerHTML = sideNav(page, search, icon)
    const main = body.querySelector('#main')!
    const logo = body.querySelector('#compLogo')! as HTMLImageElement
    main.append(append)
    
    const comp = (await company.getCompany()).logo
    logo.src = config.file + comp
    checkAdmin()
}


