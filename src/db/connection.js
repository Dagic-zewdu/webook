const mongoose = require('mongoose')
const { db, mgdb } = require('../../config/config')
//connecting to the db
mongoose.connect(mgdb,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) throw err
        console.log('Db connection success')
    })
module.exports = mongoose