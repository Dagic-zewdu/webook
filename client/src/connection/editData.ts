import axios from "axios"
import { config } from "../config/config"
import { updatedRes } from "../Interfaces/general"
import { encryptObject, decrptObject } from "../security/encrypt"
import { userInfo } from "../user/userInfo"
const { host } = config
export const editData = async (data: {} | [], api: string) => {
    try {
        let encrypt = encryptObject({ ...data, ...userInfo() })
        let req = await axios.put(host + api, { data: encrypt })
        let res = decrptObject(req.data) as updatedRes
        return res
    }
    catch (err) {
        return { Update: {}, updated: false, error: false }
    }
}