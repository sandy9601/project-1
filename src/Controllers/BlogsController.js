const BlogModel=require("../Models/BlogModel")


const CreateBlog=async function(req,res){
    const data=req.body
    const CreateBlog=await BlogModel.create(data)
    res.send({status:true,data:CreateBlog})
}
module.exports.CreateBlog=CreateBlog