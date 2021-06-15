import { sample } from "../Dom/renderTable"
import { removeDuplicates } from "./array"
import { matchString } from "./search"

/**
 * @param index- text data to search 
 * @param area- where to search  example [name,age,...]
 * @param data - data to search
 * @returns searched value of array object
 */
export const search = (index: string | number, area: string[], data: sample[], remove?: string) => {
    let i
    let result: object[] = []
    area.forEach(a => {
        data.forEach(d => {
            for (i in d) {
                if (i == a) {
                    matchString(index, d[i]) ? result.push(d) : () => { }
                }
            }
        })
    })
    console.log(result!)
    return removeDuplicates(result!, remove ? remove : '_id')
}