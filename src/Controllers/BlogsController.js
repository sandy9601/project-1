
const { json } = require("body-parser")
const { now } = require("mongoose")
const AuthorModel = require("../Models/AuthorModel")
const BlogsModel=require("../Models/BlogsModel")
const jwt=require("jsonwebtoken")

//Q1 Creating Blog

const blogs=async function(req,res){
    try{
    const data =req.body
    if(!data.title){
       return res.status(400).send({status:false,msg:"title couldnot be empty"})
    }
     if(!data.body){
        return res.status(400).send({status:false ,msg: "body couldnot be empty"})
     }
     if(!data.category){
        return res.status(400).send({status:false ,msg: "write category"})
     }
    const CreateBlog=await BlogsModel.create(data)
    return res.status(201).send({status:true,data:CreateBlog})
}
catch(err){
   res.status(500).send({status:false,error:err.message})
}}

//Q getblogs

const getblogs=async function(req,res){
    try{
       let query=req.query
        const getblogs=await BlogsModel.find({$and:[{isDeleted:false,isPublished:true}, query]})
        if(getblogs.length===0){
            return res.status(404).send({status:false,msg:"No User Found"})
        }
        res.status(200).send({status:true,data:getblogs})
        }
        catch(err){
            res.status(500).send({status:false,error:err.message})
        }
}

//Update Qeustion

const UpdateBlog=async function(req,res){
    try{
    let data=req.body
    let tags=data.tags
    let subcategory=data.subcategory
    let BlogId=req.params.blogsid
    const UpdateBlog=await BlogsModel.findOneAndUpdate({_id:BlogId},{$set:{isPublished:true,publishedAt:Date.now(),body:data.body,title:data.title},$push:{tags,subcategory}},{new:true})
    res.status(200).send({msg:true,data:UpdateBlog})
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}


//DeletedBlog Question

const DeletedBlog=async function(req,res){
    try{
    let BlogsId=req.params.blogsid

    const DeletedBlog=await BlogsModel.findOneAndUpdate({_id:BlogsId,isDeleted:false},{$set:{isDeleted:true,deleteAt:Date.now()}})
    return res.status(200).send()
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}


// Deleted Query

const DeletedQuery=async function(req,res){
    try{

        const query= req.query
    if(Object.keys(query).length===0){
        return res.status(400).send({status:false,msg:"query params couldnot be empty"})
    }
    let token = req.headers["x-api-key"];
    let decodedToken = jwt.verify(token, "Functionup-radon")
    let authorid=decodedToken.authorid
    const DeletedQuery=await BlogsModel.updateMany({$and:[{authorId:authorid} , query]},{$set:{isDeleted:false}}) 
    if(DeletedQuery.matchedCount===0){
        return res.status(404).send({status:false,msg:"Blog doesnot exist"})
    }
else{
    return res.status(200).send({status:true,msg:"deleted only login user details"})
}
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}}





module.exports.blogs=blogs

module.exports.getblogs=getblogs

module.exports.UpdateBlog=UpdateBlog

module.exports.DeletedBlog=DeletedBlog

module.exports.DeletedQuery=DeletedQuery

