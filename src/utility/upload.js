const multer = require("multer")
const id=Date.now()+Math.round(Math.random(0,100000)*100000)
var storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public')
    },
    filename : (req,file,cb)=>{
        cb(null,id+file.originalname)
    }
})
var upload = multer ({storage:storage}).array('file')
const uploadFile=(req,res)=>{
    upload(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            return res.status(200).json({uploaded:false,file:req.file,error:true})
        }
        else if (err){
            return res.status(200).json({uploaded:false,file:req.file,error:true})
        }
        return res.status(200).send({uploaded:true,id,file:req.file,error:false})
})
}
module.exports=uploadFile
