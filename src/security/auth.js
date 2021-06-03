const { encryptObject } = require("./encrypt")

const checkAdmin=(req,res)=>{
    res.send(encryptObject({message:'Access Granted',auth:true,error:false}))
}
module.exports={checkAdmin}