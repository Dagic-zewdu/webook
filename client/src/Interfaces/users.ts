import { strNum } from './general';
export type signupData = {
    emp_id: string,
    password: string,
    user_type: string,
    phone: string
}
export type loginData = {
    emp_id: string, password: string
}
export type userData = {
    _id:strNum,
    username: string,
    password: string,
    user_type: string,
    emp_id: string,
    access: string
    phone: string,
    created_date: Date
}
export interface userDB {
    /**return's user if an error is happened when the users data are loaded */
    usersError(): Promise<boolean>
    /**
     */
    getUsers(): Promise<userData[]>
    /** create an account for the user
     * @param data-object that contains sign up information
     * @param id -dom id to render
     */
    signUp(data: signupData, id: string): Promise<void>
    /**
     * 
     * @param data 
     * @param id 
     */
    logIn(data: loginData, id: string): Promise<void>
    /**
     * 
     */
    isAdminset(): Promise<boolean>
acccesAccount(user:Partial<userData>,id?:string):Promise<void>
deleteAccount(_id:strNum,id?:string):Promise<void>

}
export interface users {
    users: userData[]
    getUser(emp_id: string): userData
    searchUser(index:strNum,data?:userData[]):userData[]
}