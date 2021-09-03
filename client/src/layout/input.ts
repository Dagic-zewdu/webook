import { strNum } from './../Interfaces/general';
import { render } from "../Dom/render"
/**display null message while input cahage
 * @param id-optional parameter where to render the message 
 */
export const renderNull = (id?: string) => {
    const input = document.querySelectorAll('input')
    input.forEach(i => {
        i.addEventListener('keyup', () => {
            render(id ? id : '#message', `<p></p>`)
        })
    })
}
export const setOptions=(value:strNum,name:strNum,selectElement:HTMLSelectElement)=>{
 
     let opt=document.createElement('option')
     opt.innerHTML=name as string
     opt.value=value as string
     selectElement.appendChild(opt)
 
}
