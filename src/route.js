const { checkAdmin } = require('./security/auth')
const { adminAuth } = require('./security/authRoute')
const { getCompany, createCompany, editCompany } = require('./utility/company')
const { getDepartment, deleteDepartment, editDepartment, createDepartment } = require('./utility/department')
const uploadFile = require('./utility/upload')
const { SignUp, getUsers, Login } = require('./utility/users')
const router = require('express').Router()

//company api
router.route('/api/company')
   .get(getCompany)
   .post(createCompany)
   .put(editCompany)
/**users Route */
router.route('/api/users')
   .get(getUsers)
router.post('/api/signUp', SignUp)
router.post('/api/login', Login)
router.post('/api/checkAdmin', adminAuth, checkAdmin)
/**for uploading file */
router.post('/api/uploadFile', uploadFile)
/**department route */
router.route('/api/department')
   .get(getDepartment)
   .post(adminAuth, createDepartment)
   .put(adminAuth, editDepartment)
   .delete(adminAuth, deleteDepartment)
module.exports = router