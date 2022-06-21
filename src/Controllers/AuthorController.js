const AuthorModel = require("../Models/AuthorModel")

const CreateAuthor=async function(req,res){
    try{
    data =req.body
    if(!data){
       return res.status(400).send({status:true,msg:"body couldnot be empty"})
    }
    let CreateAuthor=await AuthorModel.create(data)
    return res.status(201).send({msg:true,data:CreateAuthor})
}
catch(err){
     res.status(500).send({status:false,error:err.message})
}}

module.exports.CreateAuthor=CreateAuthor