import axios from "axios"
import { config } from '../config/config'
import { renderContentLoading } from "../Dom/render"
import { decrptObject, encryptObject } from '../security/encrypt'
import { userInfo } from "../user/userInfo"
const { host } = config
/**
 * @param starts with letter not /
 */
export type fetch = { error: boolean; data: object[] | null }
export const fetchData = async (api: string, id?: string): Promise<fetch> => {
      let result: fetch = { error: false, data: null }
      try {
            const data = await axios.get(host + api, { headers: { data: encryptObject(userInfo()) } })
            const Data = decrptObject(data.data) as object[]
            result = { error: false, data: Data }
      }
      catch (err) {
            result = { error: true, data: null }
      }
      return result
}