const { getCompany, createCompany, editCompany } = require('./utility/company')
const uploadFile = require('./utility/upload')
const router=require('express').Router()

//company api
router.route('/api/company')
   .get(getCompany)
   .post(createCompany)
   .put(editCompany)
   
   /**for uploading file */
router.post('/api/uploadFile',uploadFile)
module.exports=router