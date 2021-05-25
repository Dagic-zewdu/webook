import { config } from '../config/config';
const CryptoJS = require('crypto-js')
const { password } = config
export const encryptObject = (object: {} | []) => {
    var encrptedObject = CryptoJS.AES.encrypt(JSON.stringify(object), password).toString();
    return encrptedObject
}

export const decrptObject = (object: string) => {
    var bytes = CryptoJS.AES.decrypt(object, password);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData
}
export const encryptToken = (arg: string) => CryptoJS.AES.encrypt(arg, password).toString();
export const decryptToken = (arg: string) => {
    var bytes = CryptoJS.AES.decrypt(arg, password);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData
}