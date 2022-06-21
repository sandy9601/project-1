const AuthorModel = require("../Models/AuthorModel")

const CreateAuthor=async function(req,res){
    data =req.body
    let CreateAuthor=await AuthorModel.create(data)
    res.send({msg:true,data:CreateAuthor})
}

module.exports.CreateAuthor=CreateAuthor