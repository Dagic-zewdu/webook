const jwt = require('jsonwebtoken')
const { employee, manager, admin } = require('../../config/config')
const { decrptObject, encryptObject } = require('./encrypt')
const userauth = (req, res, next) => {
    const decrypt = decrptObject(req.body.data)
    const { token, usertype } = decrypt
    if (!token ? true : false) {
        let Data = encryptObject({ message: 'Access Denied', auth: false, error: true })
        res.status(200).send(Data)
    }
    else {
        try {
            if (usertype === 'manager') {
                const verify = jwt.verify(token, manager)
                req.user = verify
                next()
            }
            else if (usertype === 'employee') {
                const verify = jwt.verify(token, employee)
                req.user = verify
                next()
            }

            else {
                let data = encryptObject({ message: 'Invalid user usertype', auth: false, error: true })
                res.status(200).send(data)
            }

        }
        catch (err) {
            console.log(err)
            let data = encryptObject({ message: 'Invalid user token', auth: false, error: true })
            res.status(200).send(data)
        }
    }

}

const adminAuth = (req, res, next) => {
    try {
        const decrypt = decrptObject(req.body.data)
        const { token } = decrypt
        if (!token ? true : false) {
            let Data = encryptObject({ message: 'Access Denied', auth: false, error: true })
            res.status(200).send(Data)

        }
        else {
            const verify = jwt.verify(token, admin)
            req.user = verify
            next()
        }

    }
    catch (err) {
        let data = encryptObject({
            message: 'Invalid user token', auth: false,
            error: true
        })
        res.status(200).send(data)
    }

}
const allAuth = (req, res, next) => {
    try {
        const decrypt = decrptObject(req.body.params)
        const { token, usertype } = decrypt
        if (!token ? true : false) {
            let Data = encryptObject({ message: 'Access Denied', auth: false, error: true })
            res.status(200).send(Data)
        }
        else {
            try {
                if (usertype === 'manager') {
                    const verify = jwt.verify(token, manager)
                    req.user = verify
                    next()
                }
                else if (usertype === 'employee') {
                    const verify = jwt.verify(token, employee)
                    req.user = verify
                    next()
                }
                else if (usertype === 'admin') {
                    const verify = jwt.verify(token, admin)
                    req.user = verify
                    next()
                }
                else {
                    let data = encryptObject({ message: 'Invalid user usertype', auth: false, error: true })
                    res.status(200).send(data)
                }

            }
            catch (err) {
                console.log(err)
                let data = encryptObject({ message: 'Invalid user token', auth: false, error: true })
                res.status(200).send(data)
            }
        }
    }
    catch (err) {
        console.log(err)
        let data = encryptObject({ message: 'Error occur while processing', auth: false, error: true, err })
        res.status(200).send(data)
    }
}
module.exports = { userauth, adminAuth, allAuth }