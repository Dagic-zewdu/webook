import { fetchData } from "../connection/fetchData";
import { companyDb, companyObject, editableCompany } from "../Interfaces/company";
import { saveData } from "../connection/saveData";
import { editData } from "../connection/editData";
export class CompanyDb implements companyDb {

    /**get company data
     * @returns current company of the user 
     */
    getCompany = async () => {
        let data = await fetchData('company')
        let com = data[0] as companyObject
        return com
    }
    /**Send data to the sever based on object or array provided
     * @param arg -company object to save
     * @returns createdRes
     */
    saveCompany = async (arg: companyObject) => await saveData(arg, 'company')
    /**
     * @param arg- company object to edit
     * @returns updated object response
     */
    editComapny = async (arg: editableCompany) => await editData(arg, 'company')

}