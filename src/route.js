const { getCompany, createCompany, editCompany } = require('./utility/company')
const router=require('express').Router()

//company api
router.route('/api/company')
   .get(getCompany)
   .post(createCompany)
   .put(editCompany)

module.exports=router