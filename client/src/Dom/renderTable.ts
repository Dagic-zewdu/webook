import { arrayObject } from "../Interfaces/general"
import { lister, render } from "./render"
export type sample = { _id: string | number, [props: string]: any }
export type optionButton = { name: string, color?: string, icon?: string }
export type thead = { name: string, icon?: string }

export const Headers = (headers: thead[]) => `<tr>` + lister(headers.map(h => `<th>
 <i class="material-icons">${h.icon} </i>                                
${h.name} 
</th>`
)) + `</tr>`
export const Body = (data: sample[], options: optionButton[]) => {
    let i, j
    let d = data.map(d => {
        let td = ''
        for (i in d) {
            //i represent the propery name,_id,age...
            if (i != '_id')
                td += `<td>` + d[i] + `</td>`
        }
        let opt = `<td>` + lister(options.map(o =>
            `<button class="button button-${o.color ? o.color : 'info'} 
            mr20 ml20 mb20" id="${d._id}"  name="${o.name}">
            <i class="material-icons ml5">${o.icon} </i>
        ${o.name}
        </button>`)) + `</td>`
        return `<tr>` + td + opt + `</tr>`
    })
    return lister(d)
}
/**returns render table html format
 * @param th -header columuns of the table must be provided object of name and icon
 * @param data -data to render must contain id element
 * @param id- element id to render
 * @param options-options to do that renders button provide button name,color and font
 */
export const renderTable = (th: thead[], data: sample[], id: string, options: optionButton[]) => {
    const button = document.createElement('button')
    render(id, `<table class="table table-bordered table-light table-striped table-hover mt20">
    <thead >
    ${Headers(th)}
    </thead>
    <tbody>
    ${data.length ? Body(data, options) : `<tr>
    <td colspan=${th.length}>
<h4 class='center text-danger'>No data registered yet </h4>
    </td>
</tr>`
        }
    <tbody>
    </table`)

}
