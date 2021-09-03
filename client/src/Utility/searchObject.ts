import { sample } from "../Dom/renderTable"
import { removeDuplicates } from "./array"
import { matchString } from "./search"

/**
 * @param index- text data to search 
 * @param area- where to search  example [name,age,...]
 * @param data - data to search
 * @param  to remove redudant object it is property string usually that uniquely identifies the object(_id,id)
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
    return removeDuplicates(result!, remove ? remove : '_id')
}