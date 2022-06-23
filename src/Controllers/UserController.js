const jwt  = require("jsonwebtoken")
const AuthorModel = require("../Models/AuthorModel")

let authorlogin=async function(req,res){
    let authoremail= req.body.emailId
    let password = req.body.password
    let author = await AuthorModel.findOne({emailId:authoremail,password:password})
    if(!author){
        return  res.send({
            status:false,
            msg:"author email and password necessary",
        });}

        const token =jwt.sign({
            authorid :author._id.toString(),
            batch: "radon",
            organisation: "Function Up"
        },
        "Functionup-radon"

        )
        res.setHeader("a-auth-token",token)
        res.send({status:true,data:token})

}
module.exports.authorlogin=authorlogin