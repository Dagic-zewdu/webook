import axios from "axios"
import { config } from "../config/config"
import { userInfo } from "../user/userInfo"
import { encryptObject, decrptObject } from "./encrypt"

export const checkAdmin = async () => {
    try {
        const req = await axios.post(config.host + 'checkAdmin', { data: encryptObject(userInfo()) })
        const res = decrptObject(req.data)
        if (!res.auth) {
            window.location.pathname = '/login.html'
        }
    }
    catch (err) {
        console.log(err)
        window.location.pathname = '/login.html'
    }
}
export const checkUser = async () => {
    try {

    }
    catch (err) {

    }
}