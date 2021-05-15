export const render=(id:string,html:string)=>{
    const item=document.querySelector(id)!
    item.innerHTML=html
}
