import axios from "axios"
import { config } from "../config/config"
import { createdRes } from "../Interfaces/general"
import { encryptObject, decrptObject } from "../security/encrypt"
const { host } = config
export const saveData = async (arg: {} | [], api: string) => {
    try {
        let encrypt = encryptObject(arg)
        let req = await axios.post(host + api, { data: encryptObject })
        let res = decrptObject(req.data) as createdRes
        return res
    }
    catch (err) {
        return { created: false, error: true, message: '', data: {} }
    }
}