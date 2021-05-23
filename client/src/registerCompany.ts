import { render, renderOutput } from "./Dom/render"
import { validateImage } from "./media/image"

var logoName: string | null = null

const logo = document.querySelector('#logo')! as HTMLInputElement
const logoImage = document.querySelector('#logoImage')! as HTMLImageElement
const form = document.querySelector("#register")! as HTMLFormElement
const upload = document.querySelector('#fileUpload')! as HTMLProgressElement

logo.addEventListener('change', e => {
    const file: FileList = logo.files!
    logoImage.src = URL.createObjectURL(file[0])
    const validate: Boolean = validateImage(file[0])
    file[0] ? validateImage(file[0]) ? render('#message', ``) :
        renderOutput('error', 'only jpeg and png element are supported', '#message') :
        render('#message', ``)

    if (validate) {
        logoName = file[0].name
    }
})


form.addEventListener('submit', e => {
    e.preventDefault()
    if (logoName !== null) {
        const file = new FormData()
    }
})
