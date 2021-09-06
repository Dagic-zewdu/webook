import { CompanyDb } from "../classes/company";
import { config } from "../config/config";
import { style } from "../Dom/addStyle";
import { sideNavBar } from "../layout/sideNavBar";
const company = new CompanyDb()
export const checkUser=()=>{

}
/**
 * 
 * @param page page title to show
 * @param search true-to avoid search input false-to include the default search input
 * @param icon icon to set for the page 
 */
export const setAdmin = async (page: string, search?: boolean, icon?: string) => {
    const append = document.querySelector('#append')!
    const body = document.querySelector('body')!
    body.innerHTML = sideNavBar(page, search, icon)
    const main = body.querySelector('#main')!
    const logo = body.querySelector('#compLogo')! as HTMLImageElement
    main.append(append)
    style()
   const comp = (await company.getCompany()).logo
    logo.src = config.file + comp
}


