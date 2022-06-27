const jwt  = require("jsonwebtoken")
const AuthorModel = require("../Models/AuthorModel")

let authorlogin=async function(req,res){
    try{
    let authoremail= req.body.email
    let BodyPassword = req.body.password
    
if(!authoremail){
    return res.status(400).send({status: false,msg:"email must be present"})
}
if(!BodyPassword){
   return  res.status(400).send({status: false,msg:"password must be present"})
}
let Author=await AuthorModel.find({email:authoremail})
 if(Author.length!=1){
     return res.status(404).send({status: false,msg:"user doesnot exist"})
}
 if(Author[0].password!=BodyPassword){
     return res.status(400).send({status: false,msg: "incorect password"})
 }
        const token =jwt.sign({authorid :Author[0]._id.toString(),batch: "radon",organisation:"Function Up"},"Functionup-radon")
        res.status(201).setHeader("x-api-key",token)
        res.status(200).send({status: true,data:{token: token}})

    }
catch(err){
    return res.status(500).send({status: false,error:err.message})
}    }

module.exports.authorlogin=authorlogin