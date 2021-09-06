import { strNum } from './../Interfaces/general';
import axios from "axios";
import { config } from "../config/config";
import { fetchData } from "../connection/fetchData";
import { renderLoading, renderOutput } from "../Dom/render";
import { loginData, signupData, userDB, userData, users } from "../Interfaces/users";
import { decrptObject, encryptObject, encryptToken } from "../security/encrypt";
import { search } from '../Utility/searchObject';
import { userInfo } from '../user/userInfo';

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
                console.log(res)
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
                    else if (DATA.user_type === 'user') {
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
                console.log(res.message, res.error, res.login)
                renderOutput("error", typeof res.message === "string" ? res.message : 'error while login please try again', id)
            }
            else if (res.login) {
                if (res.access === 'deActivated') {
                    renderOutput("error", 'your account is deactivated please contact admin to activate your account', id)
                }
                else {
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
            }
            else {
                console.log(res.message)
                renderOutput("error", typeof res.message === 'string' ? res.message : 'error while login please try again', id)
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
    isAdminset = async () => {
        let users = await this.getUsers()
        let user = users.find(u => u.user_type === 'admin')
        return user ? true : false
    }
    /**
     * 
     * @param user user data that contains _id and access
     * @param id message part to render
     */
    acccesAccount = async (user: Partial<userData>, id: string) => {
        try {
            renderLoading(id ? id : '#accessMessage')
            const req = await axios.put(config.host + 'accessAccount', { data: encryptObject({ ...user, ...userInfo() }) })
            const res = decrptObject(req.data)
            console.log(res)
            if (res.error) {
                renderOutput("error", "unable to sign internal server error", id)
            }
            else if (res.activation) {
                renderOutput("success", "user " + user.access + " successfully!!", id)
            }
        }
        catch (err) {
            console.log(err)
            renderOutput("error", "unable to sign the user server is not active", id)
        }
    }
    deleteAccount = async (_id: strNum, id?: string) => {
        try {
            renderLoading(id ? id : '#delMesssage')
            const req = await axios.put(config.host + 'delUser', { data: encryptObject({ _id, ...userInfo() }) })
            const res = decrptObject(req.data)
            if (res.error) {
                renderOutput("error", "unable to delete internal server error", id)
            }
            else if (res.deleted) {
                renderOutput("success", "user deleted successfully successfully!!", id)
            }
        }
        catch (err) {
            console.log(err)
            renderOutput("error", "unable to sign the user server is not active", id)
        }
    }
}

export class userClass implements users {
    constructor(public users: userData[]) { }
    getUser = (id: strNum) => this.users.find(u => u._id === id)!
    searchUser = (index: strNum, data?: userData[]) => search(index, ["emp_id", 'access', 'user_type'], data ? data : this.users) as userData[]
}