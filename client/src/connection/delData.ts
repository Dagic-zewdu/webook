import axios from "axios";
import { config } from "../config/config";
import { delRes } from "../Interfaces/general";
import { decrptObject, encryptObject } from "../security/encrypt";

export const delData = async (data: {} | [], api: string) => {
    try {
        let encrypt = encryptObject(data)
        let req = await axios.delete(config.host + api, { data: encrypt })
        let res = decrptObject(req.data) as delRes
        return res
    }
    catch (err) {
        console.log(err)
        return { deleted: false, message: '', error: true }
    }
}