const jwt  = require("jsonwebtoken")
const AuthorModel = require("../Models/AuthorModel")

let authorlogin=async function(req,res){
    try{
    let authoremail= req.body.email
    let password = req.body.password
    
if(!authoremail){
    res.status(400).send({status:false,msg:"email must be present"})
}
if(!password){
    res.status(400).send({status:false,msg:"password must be present"})
}
let author = await AuthorModel.findOne({email:authoremail,password:password})

    if(!author){
        return  res.status(404).send({status:false,msg:"author not found"})
    }

        const token =jwt.sign({authorid :author._id.toString(),batch: "radon",organisation:"Function Up"},"Functionup-radon")
        res.status(201).setHeader("a-auth-token",token)
        res.status(200).send({status:true,data:token})

    }
catch(err){
    return res.status(500).send({status:false,error:err.message})
}    }



module.exports.authorlogin=authorlogin