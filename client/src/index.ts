import {formObject} from './Dom/forms'
const form=document.querySelector('#register')! as HTMLFormElement
form.addEventListener('submit',e=>{
    e.preventDefault()
   const student=formObject(form)
   console.log(student)
})

console.log("I am dagic zewdu")