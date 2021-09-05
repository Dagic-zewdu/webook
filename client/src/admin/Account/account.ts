import { tellDay, localTime } from './../../Utility/date';
import { renderContentLoading,renderLoadingError } from './../../Dom/render';
import { userClass, usersDb } from "../../classes/users"
import { userData } from "../../Interfaces/users"
import { setAdmin } from "../main"
import { optionButton, renderTable, thead } from '../../Dom/renderTable';

var UserDb:usersDb
var User:userClass
var Accounts:userData[]
var error:string
setAdmin('Account',true,'account_circle')
/**_id:strNum,
    username: string,
    password: string,
    user_type: string,
    emp_id: string,
    access: string
    phone: string,
    created_date: Date */
const RenderTable=(data:userData[],error:boolean)=>{
try{
     let Thead:thead[]=[
         {name:'Employee id',icon:'badge'},
         {name:"Access",icon:'admin_panel_settings'},
         {name:"User type",icon:"account_box"},
         {name:'Created date',icon:'calendar_today'}
     ]
     let users=data.map(u=>{
         return{
             _id:u._id,
             emp_id:u.emp_id,
             user_type:u.user_type,
             access:u.access,
             created_date:tellDay(u.created_date)+`<br>`+localTime(u.created_date)
         }
     })
     let options:optionButton[]=[
         {name:"Activate/deactivate",icon:"account_circle"},
         {name:"Delete",icon:"delete"}
        ]
        renderTable(Thead,users,"#accountTable",options)
}
catch(err){
renderLoadingError("#acccountTable","error while fetching data from the server please try again later",)
}
}
const setData=async ()=>{
    try
    { 
        renderContentLoading("#accountTable")
    UserDb=new usersDb()
     Accounts=await UserDb.getUsers()
     User=new userClass(Accounts)
     RenderTable(Accounts,false)
    }
    catch(err){
RenderTable([],true)
    }
}
setData()