import { tellDay, localTime } from './../../Utility/date';
import { renderContentLoading, renderLoadingError } from './../../Dom/render';
import { userClass, usersDb } from "../../classes/users"
import { userData } from "../../Interfaces/users"
import { setAdmin } from "../main"
import { optionButton, renderTable, thead } from '../../Dom/renderTable';
import { push } from './../../routes/route';
import { setModal } from './../../layout/Modal';
import { strNum } from '../../Interfaces/general';

var UserDb: usersDb
var User: userClass
var Accounts: userData[]
var error: boolean = false
var a_id: strNum
var d_id: strNum

setAdmin('Account', false, 'account_circle')
/**_id:strNum,
    username: string,
    password: string,
    user_type: string,
    emp_id: string,
    access: string
    phone: string,
    created_date: Date */
const delConfirm = document.querySelector('#delete')! as HTMLButtonElement
const accessConfirm = document.querySelector('#accessButton')! as HTMLButtonElement
const Search = document.querySelector('#search') as HTMLInputElement
const RenderTable = (data: userData[], error: boolean) => {
    try {
        let Thead: thead[] = [
            { name: 'Employee id', icon: 'badge' },
            { name: "Access", icon: 'admin_panel_settings' },
            { name: "User type", icon: "account_box" },
            { name: 'Created date', icon: 'calendar_today' }
        ]
        let users = data.map(u => {
            return {
                _id: u._id,
                emp_id: u.emp_id,
                user_type: u.user_type,
                access: u.access,
                created_date: tellDay(u.created_date) + `<br>` + localTime(u.created_date)
            }
        })
        let options: optionButton[] = [
            { name: "Activate/deactivate", icon: "account_circle" },
            { name: "Delete", icon: "delete" }
        ]
        renderTable(Thead, users, "#accountTable", options)
        let button = document.querySelectorAll('button')
        let accessModal = document.getElementById('activateAccount') as HTMLElement
        let accessMessage = document.getElementById('accessMessage') as HTMLElement
        let delModal = document.getElementById('delAccount') as HTMLElement
        button.forEach(b => {
            if (b.name === "Activate/deactivate") {
                b.addEventListener('click', () => {
                    let user = User.getUser(b.id)
                    accessMessage.innerHTML = user.access === 'activated' ? "Are you sure to Deactivate account?" :
                        "Activate account"
                    a_id = b.id
                    setModal(accessModal, b)
                })
            }
            else if (b.name === "Delete") {

                b.addEventListener('click', () => {
                    d_id = b.id
                    setModal(delModal, b)
                })

            }
        })
    }
    catch (err) {
        renderLoadingError("#acccountTable", "error while fetching data from the server please try again later",)
    }
}
const setData = async () => {
    try {
        renderContentLoading("#accountTable")
        UserDb = new usersDb()
        Accounts = await UserDb.getUsers()
        User = new userClass(Accounts)
        RenderTable(Accounts, false)
    }
    catch (err) {
        error = true
        RenderTable([], true)
    }
}
setData()
accessConfirm.addEventListener('click', async () => {
    let account = User.getUser(a_id)
    UserDb.acccesAccount({ _id: a_id, access: account.access === 'activated' ? 'deActivated' : 'activated' }, "#accessMessage")
    setData()
})
delConfirm.addEventListener('click', async () => {
    UserDb.deleteAccount(d_id, '#delMessage')
    setData()
})
Search.addEventListener('keyup', () => {
    const index = Search.value
    let result = index ? User.searchUser(index) : Accounts
    RenderTable(result, error)
})