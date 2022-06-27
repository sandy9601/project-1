const AuthorModel = require("../Models/AuthorModel")
const validator=require("email-validator")

//Creating Author Question
const AuthorValidation =async function(req,res,next){
    try{
       let data=req.body
    
    if(Object.keys(data).length===0){
       return res.status(400).send({status: false,msg:"body couldnot be empty"})
    }

    if(!data.fname){
        return res.status(400).send({status: false,msg: "first name should be present"})
    }
    
    if(typeof data.fname!="string"){
        return res.status(400).send({status: false,msg:" first name must be string"})
    }

    let firstname=data.fname
    let Firstname=firstname.trim()
    if(firstname!=Firstname){
        return res.status(400).send({status:false ,msg: "space not allowed in Last Name"})
    }
    
    if(!data.lname){
        return res.status(400).send({status: false,msg: "last name should be present"})
    }
    if(typeof data.lname!="string"){
        return res.status(400).send({status: false,msg:" last name must be string"})
    }
    let lastname=data.lname
    let Lastname=lastname.trim()
    if(lastname!=Lastname){
        return res.status(400).send({status:false ,msg: "space not allowed in Last Name"})
    }

    //Enum Validation

    if(!data.title){
        return res.status(400).send({status: false,msg: "title should be present"})
    }
    const Enum = ["Mr", "Mrs", "Miss"]
    let incluedes=data.title
let enums=Enum.includes(incluedes)
if(!enums){
    return res.status(400).send({status: false,msg:"title should be from Mr Mrs Miss "})
}

//email validation

if(!data.email){
    return res.status(400).send({status: false,msg:"email should be present"})
}
    // let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    // ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // let testmails=data.email
    // let emailvalidation= regex.test(testmails)
    let isValidEmail = validator.validate(data.email)

    if(isValidEmail){
        return res.status(400).send({status: false,msg: "enter a valid email id"})
    }
    let email=await AuthorModel.find({email:data.email})
    if(email.length>0&&data.email===email[0].email){
        return res.status(400).send({status: false,msg: "email already resgistered"})
    }
    if(!data.password){
        return res.status(400).send({status: false,msg: "password required"})
    }
    if(typeof data.password != "string"){
return res.status(400).send({status: false ,msg:"password must be stirng"})
    }
    let password=data.password
    let Password=password.trim()
    if(Password!=password){
        return res.status(400).send({status:false ,msg: "space not allowed in password"})
    }
    next()
}
catch(err){
     res.status(500).send({status: false,error:err.message})
}}


module.exports.AuthorValidation=AuthorValidation

