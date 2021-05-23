import axios from "axios"
import { config } from "../config/config"
import { updatedRes } from "../Interfaces/general"
import { encryptObject, decrptObject } from "../security/encrypt"
const { host } = config
export const editData = async (data: {} | [], api: string) => {
    try {
        let encrypt = encryptObject(data)
        let req = await axios.put(host + api, { data: encryptObject })
        let res = decrptObject(req.data) as updatedRes
        return res
    }
    catch (err) {
        return { Update: {}, updated: false, error: true }
    }
}