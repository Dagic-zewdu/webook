const jwt= require('jsonwebtoken')
const { manager, admin, employee } = require('../../config/config')
const token = (type, id) => {
    var Token=''
    if (type == 'manager') {
        Token = jwt.sign({id}, manager)
    }
    else if (type == 'admin') {
        console.log(type,id)
    Token = jwt.sign({id}, admin)
    }
    else if (type == 'employee') {
        Token = jwt.sign({id}, employee)
    }
    return (Token? { signed: true, Token } : { signed: false, Token })
}
module.exports = token