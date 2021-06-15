import axios from "axios";
import { config } from "../config/config";
import { delRes } from "../Interfaces/general";
import { decrptObject, encryptObject } from "../security/encrypt";
import { userInfo } from "../user/userInfo";

export const delData = async (data: object | [], api: string) => {
    try {
        let encrypt = encryptObject({ ...data, ...userInfo() })
        let req = await axios.delete(config.host + api, { data: { data: encrypt } })
        let res = decrptObject(req.data) as delRes
        return res
    }
    catch (err) {
        console.log(err)
        return { deleted: false, message: '', error: true }
    }
}