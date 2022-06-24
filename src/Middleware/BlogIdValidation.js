const mongoose=require("mongoose")
const BlogsModel = require("../Models/BlogsModel")



const BlogIdValidation=async function(req,res,next){
    try{
    let blog_id=req.params.blogsid
    if(!mongoose.isValidObjectId(blog_id)){
        return res.status(400).send({status:false,msg:"Invalid BlogId"})
    }
    let findid=await BlogsModel.find({_id:blog_id})
    if(findid.length===0){
        return res.status(404).send({status:false,msg:"Blog not found"})
    }
    else{
        next()
    }
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}}
module.exports.BlogIdValidation=BlogIdValidation