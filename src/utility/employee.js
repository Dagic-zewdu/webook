const employee = require('../db/employeeSchema')
const userSchema = require('../db/userSchema')
const { encryptObject, decrptObject } = require('../security/encrypt')
const getEmployees = async (req, res) => {
  try {

    const get = await employee.find({})
    const secureEmployee = encryptObject(get.reverse())
    res.send(secureEmployee)
  }
  catch (err) {
    console.log(err)
    let error = encryptObject({ error: err })
    res.send(error)
  }
}
const checkId = async (id) => {
  /**checking id from database */
  try {
    const check = await employee.find({ emp_id: id })
    if (check.length > 0) { return { found: true, id: check } }
    else {
      return { found: false }
    }
  }
  catch (err) {
    console.log(err)
  }
}

const createEmployee = async (req, res) => {
  try {
    /** decrypting request */
    const decrypt = decrptObject(req.body.data)
    const { emp_id: id } = decrypt
    /**checking id if the user is registered before */
    const { found } = await checkId(id)
    console.log(found, id)
    if (!found) {
      const User = new employee(decrypt)
      const saveUser = await User.save()
      let Data = encryptObject({ created: true, data: saveUser, error: false, message: '' })
      res.send(Data)
    }
    else {
      let foundError = encryptObject({ created: false, error: false, message: 'user has been saved with id before' })
      res.send(foundError)
    }
  }
  catch (err) {
    console.log(err)
    let error = encryptObject({ error: true, created: false, message: err._message })
    res.send(error)
  }
}

const editEmployees = async (req, res) => {
  try {
    //decrypting request
    let decrypt = decrptObject(req.body.data)
    //checking _id and emp_id exists
    let { _id } = decrypt
    let Id = _id ? true : false
    if (Id) {
      /**updating  */
      const Update = await employee.findByIdAndUpdate(_id, decrypt)
      /**encrpting response */
      const encrypt = encryptObject({ Update, updated: true, error: false })
      res.send(encrypt)
    }
    else {
      throw new Error('id is not set')
    }
  }
  catch (err) {
    console.log(err)
    /**send error */
    let encrypt = encryptObject({ error: true, message: err })
    res.send(encrypt)
  }
}
const deleteEmployee = async (req, res) => {
  try {

    const decrpt = decrptObject(req.body.data)
    let { _id } = decrpt
    if (_id === undefined)
      throw new Error('_id is not set')
    const del = await employee.findByIdAndDelete(_id)
    let encrpt = encryptObject({ del, deleted: true, error: false, message: '' })
    res.send(encrpt)
  }
  catch (err) {
    console.log(err)
    let encrpt = encryptObject({ deleted: false, error: true, message: err })
    res.send(encrpt)
  }
}
module.exports = { createEmployee, checkId, getEmployees, editEmployees, deleteEmployee }