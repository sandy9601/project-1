const AuthorModel=require("../Models/AuthorModel")
const mongoose=require("mongoose")

// req body validation

const mid1=async function(req,res,next){
    try{
        let data =req.body
let author_id=data.authorId

if(!author_id){
    return res.status(400).send({status:false,msg: "Authorid must be present"})
}
if(!mongoose.isValidObjectId(author_id)){
    return res.status(400).send({status:false,msg:"Invalid AuthorId"})
}
let author=await AuthorModel.findById(author_id)
if(!author){
  return  res.status(404).send({status:false,msg:"user not exist"})
}
else{
    next()
}}
catch(err){
    res.status(500).send({status:false,error:err.message})
}}


module.exports.mid1=mid1