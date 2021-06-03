import { fetchData } from "../connection/fetchData";
import { companyDb, companyObject, editableCompany, company } from "../Interfaces/company";
import { saveData } from "../connection/saveData";
import { editData } from "../connection/editData";
import { render, renderLoading, renderOutput } from "../Dom/render";
export class CompanyDb implements companyDb {

    /**get company data
     * @returns current company of the user 
     */
    getCompany = async () => {
        let data = await fetchData('company')
        let com = data.data[0] as companyObject
        return com
    }
    /**Send data to the sever based on object or array provided
     * @param arg -company object to save
     * @param id- uniquely to select an element
     * @returns createdRes
     */
    saveCompany = async (arg: companyObject, id: string) => {
        renderLoading(id)
        const save = await saveData(arg, 'company')
        if (!save.error) {
            if (save.created) {
                renderOutput("success", "company save successfull", id)
                setTimeout(() => window.location.pathname = '/addAdmin.html', 1000)
            }
            else if (!save.created) {
                renderOutput("error", "unable to save internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to save please try again letter", id)
        }
    }
    /**
     * @param arg- company object to edit
     * @param id- company id
     * @returns updated object response
     */
    editComapny = async (arg: editableCompany, id: string) => {
        const save = await editData(arg, 'company')
        if (!save.error) {
            if (save.updated) {
                renderOutput("success", "company edited successfull", id)
            }
            else if (!save.updated) {
                renderOutput("error", "internal server error", id)
            }
        }
        else {
            renderOutput("error", "unable to edit please try again letter", id)
        }
    }
    isCompanyset = async () => (await this.getCompany()) ? true : false
}

let com = { name: '', logo: '', dept_length: 0, emp_length: 0, city: '', subcity: '', woreda: '', house: '', phone_1: '', phone_2: '' }
export class Company extends CompanyDb implements company {
    public companY: companyObject
    constructor() {
        super()
        this.companY = com
    }
    initialize = async () => {
        this.companY = await this.getCompany()
    }
    name = () => this.companY.name



    logo = () => this.companY.logo

}