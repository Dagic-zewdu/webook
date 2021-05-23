const { decrptObject,encryptObject } = require("../security/encrypt")
const companySchema=require('../db/companySchema')

/** for getting company data*/
const getCompany = async (req,res)=>{
    try{
     const get=await company.find({})
     const Com= encryptObject(get.reverse())
    res.send(Com)
    }
    catch(err){
      console.log(err)
      let error=encryptObject({error:err})
      res.send(error)
    }
  }
/**for creating company */
const createCompany=async (req,res)=>{
  try{
    const data=decrptObject(req.body.data)
    const company=new companySchema(data)
    const save=await company.save()
    const encrypt=encryptObject({created:true,error:false, //encrypting for response
        message:'created successfully',data:Save})
        res.send(encrypt)
  }
  catch(err){
    console.log(err)
    res.send(encryptObject({created:false,error:true,message:err}))
  }
    
}
const editCompany=async (req,res)=>{
    try{
     let decrypt=decrptObject(req.body.data)
     let {_id}=decrypt
     let Id=_id?true:false
     if(Id){
       /**updating  */
      const Update = await company.findByIdAndUpdate(_id,decrypt)
      /**encrpting response */
      const encrypt=encryptObject({Update,updated:true,error:false})
      res.send(encrypt)
     }
     else{
       throw new Error('id is not set')
     } 
    }
    catch(err){
        console.log(err)
        /**send error */
        let encrypt=encryptObject({error:true,message:err})
        res.send(encrypt)
    }
}
module.exports={createCompany,getCompany,editCompany}