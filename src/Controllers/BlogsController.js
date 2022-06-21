const AuthorModel = require("../Models/AuthorModel")
const BlogModel=require("../Models/BlogModel")


const CreateBlog=async function(req,res){
    try{
    const data=req.body
    data =req.body
    if(!data){
        return res.status(400).send({status:true,msg:"body couldnot be empty"})
    }
    const CreateBlog=await BlogModel.create(data)
    return res.status(201).send({status:true,data:CreateBlog})
}
catch(err){
   res.status(500).send({status:false,error:err.message})
}}


module.exports.CreateBlog=CreateBlog