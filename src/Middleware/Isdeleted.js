
const BlogsModel=require("../Models/BlogsModel")

//deleted validation
const mid2=async function(req,res,next){
    try{
let BlogId=req.params.blogsid
const Blog=await BlogsModel.find({_id:BlogId})
if(Blog[0].isDeleted===true){
    return res.status(404).send({status:false,msg:"we cannot modify the deleted documents"})
}
else{
    next()
}}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}
//body validation

const mid3=async function(req,res,next){
    try{
let data =req.body
        if(Object.keys(data).length===0){
            return res.status(400).send({status:true,msg:"body couldnot be empty"})
         }
         else{
            next()
         }}
         catch(err){
            res.status(500).send({status:false,error:err.message})
         }}


module.exports.mid2=mid2
module.exports.mid3=mid3


