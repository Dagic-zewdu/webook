import axios from "axios";
import { config } from "../config/config";
import { fetchData } from "../connection/fetchData";
import { renderLoading, renderOutput } from "../Dom/render";
import { loginData, signupData, userDB, userData } from "../Interfaces/users";
import { decrptObject, encryptObject, encryptToken } from "../security/encrypt";

export class usersDb implements userDB {
    /**get users from the server
     * @returns object array of users
     */
    getUsers = async () => (await fetchData('users')).data as userData[]
    /** checks if error happend when users are loade
    * @returns boolean 
     */
    usersError = async () => (await fetchData('users')).error
    /**create an account for the user
     * @param DATA- company object 
     * @param id-render dom id 
     */
    signUp = async (DATA: signupData, id: string) => {
        try {
            renderLoading(id)
            let data = encryptObject(DATA)
            let req = await axios.post(config.host + 'signUp', { data })
            let res = decrptObject(req.data)
            if (res.error) {
                renderOutput("error", res.message, id)
            }
            else if (res.signed) {
                renderOutput("success", "Welcome", id)
                const Token = encryptToken(res.Token)
                localStorage.removeItem('id')
                localStorage.removeItem('token')
                localStorage.removeItem('auth')
                localStorage.removeItem('user_type')
                localStorage.setItem('id', res.id)
                localStorage.setItem('token', Token)
                localStorage.setItem('auth', true + '')
                localStorage.setItem('user_type', DATA.user_type)
                setTimeout(() => {
                    if (DATA.user_type === 'admin') {
                        window.location.pathname = '/admin.html'
                    }
                    else if (DATA.user_type === 'employee' || DATA.user_type === 'manager') {
                        window.location.pathname = '/'
                    }
                }, 1000)
            }
            else {
                renderOutput("error", res.message, id)
            }
        }
        catch (err) {
            console.log(err)
            renderOutput("error", 'unable to sign up server is not active', id)
        }
    }
    /**
     * 
     * @param data 
     * @param id 
     */
    logIn = async (data: loginData, id: string) => {
        try {
            renderLoading(id)
            const req = await axios.post(config.host + 'login', { data: encryptObject(data) })
            const res = decrptObject(req.data)
            if (res.error) {
                renderOutput("error", res.message, id)
            }
            else if (res.login) {
                renderOutput("success", "Welcome", id)
                const Token = encryptToken(res.Token)
                localStorage.removeItem('id')
                localStorage.removeItem('token')
                localStorage.removeItem('auth')
                localStorage.removeItem('user_type')
                localStorage.setItem('id', res.id)
                localStorage.setItem('token', Token)
                localStorage.setItem('auth', true + '')
                localStorage.setItem('user_type', res.user_type)
                setTimeout(() => {
                    if (res.user_type === 'admin') {
                        window.location.pathname = '/admin.html'
                    }
                    else if (res.user_type === 'employee' || res.user_type === 'manager') {
                        window.location.pathname = '/'
                    }
                }, 1000)
            }
            else {
                renderOutput("error", res.message, id)
            }
        }
        catch (err) {
            console.log(err)
            renderOutput("error", 'unable to sign up server is not active', id)
        }
    }
    /**check if an admin is refistered before
     * @returns boolean
     */
    isAdminset = async () => (await this.getUsers()).length ? true : false
}