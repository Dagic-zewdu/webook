import { CompanyDb } from "./classes/company"
import { formObject } from "./Dom/forms"
import { render, renderLoading, renderOutput } from "./Dom/render"
import { companyObject } from "./Interfaces/company"
import { validateImage } from "./media/image"
import { uploadFile } from './media/upload'
var logoName: string | null = null
var File: FileList


const Logo = document.querySelector('#logo')! as HTMLInputElement
const logoImage = document.querySelector('#logoImage')! as HTMLImageElement
const form = document.querySelector("#register")! as HTMLFormElement
const upload = document.querySelector('#fileUpload')! as HTMLProgressElement
const company = new CompanyDb()

window.addEventListener('load', e => {
    const check = async () => {
        const Company = await company.getCompany()
        if (Company !== undefined)
            window.location.pathname = '/addAdmin.html'
    }
    check()
})

Logo.addEventListener('change', e => {
    const file: FileList = Logo.files!
    logoImage.src = URL.createObjectURL(file[0])
    const validate: Boolean = validateImage(file[0])
    file[0] ? validateImage(file[0]) ? render('#message', ``) :
        renderOutput('error', 'only jpeg and png element are supported', '#message') :
        render('#message', ``)

    if (validate) {
        logoName = file[0].name
        File = file
    }
})


form.addEventListener('submit', e => {
    e.preventDefault()
    if (logoName !== null) {
        const uploader = async () => {
            const Up = await uploadFile(File, upload, '#progress')
            if (Up.id !== '') {
                const logo = Up.id + logoName
                const companyData = { ...formObject(form), logo } as companyObject
                //saving
                renderLoading('#message')

                company.saveCompany(companyData, '#message')
            }

        }
        uploader()
    }
})
