const { checkAdmin } = require("./security/auth");
const { adminAuth, allAuth } = require("./security/authRoute");
const { getCompany, createCompany, editCompany } = require("./utility/company");
const {
  getDepartment,
  deleteDepartment,
  editDepartment,
  createDepartment,
} = require("./utility/department");
const {
  getEmployees,
  createEmployee,
  editEmployees,
  deleteEmployee,
} = require("./utility/employee");
const { EditLetter, GetLetters, DeleteLetter } = require("./utility/letter");
const {
  SaveMessage,
  GetMessages,
  DeleteLetterMessage,
} = require("./utility/messages");
const uploadFile = require("./utility/upload");
const {
  SignUp,
  getUsers,
  Login,
  accessUser,
  resetPassword,
  deleteUser,
} = require("./utility/users");
const router = require("express").Router();
/**date route */
router.get('/api/date', (req, res) => {
  let date = Date.now()
  res.status(200).send({ date: Date.now() })
})
//company api
router
  .route("/api/company")
  .get(getCompany)
  .post(createCompany)
  .put(editCompany);
/**users Route */
router.route("/api/users").get(getUsers);
router.post("/api/signUp", SignUp);
router.post("/api/login", Login);
router.post("/api/checkAdmin", adminAuth, checkAdmin);
router.put("/api/accessAccount", adminAuth, accessUser);
router.put("/api/resetPassword", adminAuth, resetPassword);
router.put("/api/delUser", adminAuth, deleteUser);
/**for uploading file */
router.post("/api/uploadFile", uploadFile);
/**department route */
router
  .route("/api/department")
  .get(allAuth, getDepartment)
  .post(adminAuth, createDepartment)
  .put(adminAuth, editDepartment)
  .delete(adminAuth, deleteDepartment);
/**employee data */
router
  .route("/api/employee")
  .get(allAuth, getEmployees)
  .post(adminAuth, createEmployee)
  .put(adminAuth, editEmployees)
  .delete(adminAuth, deleteEmployee);
/**message */
router
  .route("/api/messages")
  .post(SaveMessage) // for creating messages
  .get(GetMessages); //for getting all messages
router.put("/api/delMessages", DeleteLetterMessage); //deleting multiple messages

/**Letters */
router.route("/api/letter").put(EditLetter); //Edit letter
router
  .route("/api/letters")
  .get(GetLetters) //getting letters data
  .put(DeleteLetter); //for deleting letter
module.exports = router;
