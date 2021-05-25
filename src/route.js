const { adminAuth } = require('./security/authRoute')
const { getCompany, createCompany, editCompany } = require('./utility/company')
const uploadFile = require('./utility/upload')
const { SignUp, getUsers } = require('./utility/users')
const router=require('express').Router()

//company api
router.route('/api/company')
   .get(getCompany)
   .post(createCompany)
   .put(editCompany)
   /**users Route */
router.route('/api/users')
       .get(getUsers)   
router.post('/api/signUp',SignUp)
   /**for uploading file */
router.post('/api/uploadFile',uploadFile)
module.exports=router