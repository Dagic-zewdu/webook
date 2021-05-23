import axios from "axios"
import { config } from "../config/config"
import { createdRes } from "../Interfaces/general"

const { host } = config
export const uploadFile = async (FileList: FileList, progress: HTMLProgressElement, id: string) => {
    try {
        const p = document.querySelector(id) as HTMLParagraphElement
        const file = new FormData()
        for (let i = 0; i < FileList.length; i++)
            file.append('file', FileList[i])

        const upload = await axios.post(host + 'uploadFile', file, {
            onUploadProgress: ProgressEvent => {
                let Progress = Math.round(((ProgressEvent.loaded / ProgressEvent.total) * 100))
                progress.value = Progress
                p.innerText = 'uploading...' + Progress + '%'
            }
        })
        if (upload.data.error) {
            p.innerText = 'unable to upload file'
            return { id: '' }
        }
        else {
            p.innerText = 'upload file successfull'
            return { id: upload.data.id }
        }
    }
    catch (err) {
        console.log(err)
        return { id: '' }
    }
}