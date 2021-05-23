import { createdRes, updatedRes } from "./general";

export type companyObject = {
    name: string,
    logo: string,
    dept_length: number,
    emp_length: number,
    city: string,
    subcity: string,
    woreda: string,
    house: string,
    phone_1: string,
    phone_2: string,
}
export type editableCompany = {
    id: string,
    name?: string,
    logo?: string,
    dept_length?: number,
    emp_length?: number,
    city?: string,
    subcity?: string,
    woreda?: string,
    house?: string,
    phone_1?: string,
    phone_2?: string,
}
export interface companyDb {
    getCompany(): Promise<companyObject>  //get company data
    /**
     * @param arg company object
     * @param renderDom string id to render
     */

    saveCompany(arg: companyObject): Promise<createdRes> //save company data
    /**
     * @param arg object of company to update 
     */
    editComapny(arg: editableCompany): Promise<updatedRes> //edit compay data
}
export interface company extends companyDb {
    name(): string
}