import axios from "axios"
import { config } from "../config/config"
import { createdRes } from "../Interfaces/general"
import { encryptObject, decrptObject } from '../security/encrypt'
import { userInfo } from "../user/userInfo"
const { host } = config
export const saveData = async (arg: {} | [], api: string) => {
    try {
        let encrypt = encryptObject({ ...arg, ...userInfo() })
        let req = await axios.post(host + api, { data: encrypt })
        let res = decrptObject(req.data) as createdRes
        return res
    }
    catch (err) {
        console.log(err)
        return { created: false, error: false, message: Object, data: {} }
    }
}