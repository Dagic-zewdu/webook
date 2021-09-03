import { renderLoadingError, renderContentLoading } from './../../Dom/render';
import { employee } from "../../Interfaces/Employee/employeeData";
import { setAdmin } from "../main";
import { EmployeesDb } from '../../classes/Employees/employeeDb';
import { optionButton, renderTable, thead } from '../../Dom/renderTable';
import { EmployeeClass } from '../../classes/Employees/employee';
import { Department, DepartmentDb } from '../../classes/department';
/**
 * _id: string | number,
    emp_id: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    sex: 'M' | 'F',
    position: string,
    department: string,
    salary: number,
    type: 'Manager'|'Employee',
    manager: string,
    created_date?: Date
 */
setAdmin('Employees', false, 'people')

/** */
const RenderTable=async (data:employee[],error:boolean)=>{
 try{
    if(error){
        throw new Error('')
    }
    else{
        renderContentLoading('#empTable')
        let Employee=new EmployeeClass(data) // employe class
        let deptDb=new DepartmentDb() // department database class
        let departments=await deptDb.getDepartment() //getting 
        let Dept=new Department(departments)
        let tableHeader: thead[] = [
            { name: 'Employee id', icon: 'badge' },
            { name: 'Full name', icon: 'account_circle' },
            { name: 'sex' },
            { name: 'Department', icon: 'groups' },
            { name: 'position', icon: 'chair' },
            {name:'type'},
            {name:'salary',icon:'payments'},
            { name: 'manager', icon: 'chair' },
            { name: 'options', icon: 'settings' }
        ]
        //data to render
        console.log(data)
       let employeeRender=data.map(e=>{
            return {
                _id:e._id,
                emp_id:e.emp_id,
                fullName:Employee.fullName(e.emp_id),
                sex: e.sex,
                department: Dept.getDepartment(e.department).name,
                position:e.position,
                type:e.type,
                salary:e.salary,
                manager:Employee.name(e.emp_id)
            }
        })
        //option button
        let option: optionButton[] = [
            { name: 'Edit', color: 'primary', icon: 'edit' },
            { name: 'Delete', color: 'danger', icon: 'delete' }
        ]
    renderTable(tableHeader,employeeRender,'#empTable',option)
    }
 }
 catch(err){
renderLoadingError('#empTable',"Cannot display employees data internal error please contact admin")
 }
    
}

const setData=async ()=>{
    try{
    let EmployeeClass=new EmployeesDb()
    let employees= await EmployeeClass.getEmployees()
    RenderTable(employees,false)
    }
    catch(err){
RenderTable([],true)
    }
}
setData()