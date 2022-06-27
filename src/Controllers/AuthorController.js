const AuthorModel = require("../Models/AuthorModel")

//Creating Author Question

const authors=async function(req,res){
    try{
        let data=req.body
    let CreateAuthor=await AuthorModel.create(data)
    return res.status(201).send({status: true,data:CreateAuthor})
}
catch(err){
     res.status(500).send({status: false,error:err.message})
}}

module.exports.authors=authors

