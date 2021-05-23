import axios from "axios"
import { config } from '../config/config'
import { decrptObject } from '../security/encrypt'
const { host } = config
/**
 * @param starts with letter not /
 */
export const fetchData = async (api: string) => {
      const data = await axios.get(host + api)
      const Data = decrptObject(data.data)
      return Data
}