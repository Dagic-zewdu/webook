import { strNum } from "../Interfaces/general"


/**returns utc date representation string removing the time */
export const tellDay = (day: strNum | Date) => {
    let date = new Date(day)
    return date.toUTCString().slice(0, 16)
}
/**return astring of month contactenated like (dec 2 2020) */
export const simpleDate = (DATE: strNum | Date) => {
    const date = tellDay(DATE)
    const d = date.split(',')
    return d[1]
}
/**returns a string of local time formatted like this (11:00 am)  */
export const localTime = (DATE: strNum | Date) => {
    const date = new Date(DATE)
    const time = date.toLocaleTimeString()
    const t = time.split(':')
    const local = t[2].split(' ')
    return t[0] + ':' + t[1] + ' ' + (local[1] ? local[1] : '')
}

