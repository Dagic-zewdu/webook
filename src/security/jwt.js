const jwt = require('jsonwebtoken')
const { manager, user, admin } = require('../../config/config')
const token = (type, id) => {
    var Token = ''
    if (type == 'admin') {
        Token = jwt.sign({ id }, admin)
    }
    else if (type == 'user') {
        Token = jwt.sign({ id }, user)
    }

    return (Token ? { signed: true, Token } : { signed: false, Token })
}
module.exports = token