import axios from "axios"
import { config } from '../config/config'
import { decrptObject } from '../security/encrypt'
const { host } = config
/**
 * @param starts with letter not /
 */
export type fetch = { loading: boolean, error: boolean; data: [{} | null] }
export const fetchData = async (api: string): Promise<fetch> => {
      let result: fetch = { loading: true, error: false, data: [null] }
      try {
            const data = await axios.get(host + api)
            const Data = decrptObject(data.data) as [{}]
            result = { loading: false, error: false, data: Data }
      }
      catch (err) {
            result = { error: true, loading: false, data: [null] }
      }
      return result
}