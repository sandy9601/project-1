const { json } = require("body-parser")
const { now } = require("mongoose")
const AuthorModel = require("../Models/AuthorModel")
const BlogModel=require("../Models/BlogModel")


//Q1 Creating Blog

const CreateBlog=async function(req,res){
    try{
    const data =req.body
    if(!data.tittle){
       return res.status(400).send({status:false,msg:"title couldnot be empty"})
    }
     if(!data.body){
        return res.status(400).send({status:false ,msg: "body couldnot be empty"})
     }
     if(!data.category){
        return res.status(400).send({status:false ,msg: "write category"})
     }
    const CreateBlog=await BlogModel.create(data)
    return res.status(201).send({status:true,data:CreateBlog})
}
catch(err){
   res.status(500).send({status:false,error:err.message})
}}

//Q getBlog

const getBlog=async function(req,res){
    try{
       let query=req.query
        const getBlog=await BlogModel.find({$and:[{isDeleted:false,isPublished:true}, query]})
        if(getBlog.length===0){
            return res.status(404).send({status:false,msg:"No User Found"})
        }
        res.status(200).send({status:true,data:getBlog})
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
    let BlogId=req.params.BlogsId
    const UpdateBlog=await BlogModel.findOneAndUpdate({_id:BlogId},{$set:{isPublished:true,publishedAt:Date.now(),body:data.body,tittle:data.tittle},$push:{tags,subcategory}},{new:true})
    res.send({msg:true,data:UpdateBlog})
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}


//DeletedBlog Question

const DeletedBlog=async function(req,res){
    try{
    let BlogsId=req.params.BlogsId

    const DeletedBlog=await BlogModel.findOneAndUpdate({_id:BlogsId,isDeleted:false},{$set:{isDeleted:true,deleteAt:Date.now()}})
    return res.status(200).send()
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}


// Deleted Query

const DeletedQuery=async function(req,res){
    try{

  let query=req.query
    if(Object.keys(query).length===0){
        return res.status(400).send({status:false,msg:"query params couldnot be empty"})
    }
    const DeletedQuery=await BlogModel.updateMany(query,{$set:{isDeleted:false}}) 
    if(!DeletedQuery){
        return res.status(404).send({status:false,msg:"Blog doesnot exist"})
    }
else{
    return res.status(200).send({status:true,data:DeletedQuery})
}
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}}






module.exports.CreateBlog=CreateBlog

module.exports.getBlog=getBlog

module.exports.UpdateBlog=UpdateBlog

module.exports.DeletedBlog=DeletedBlog

module.exports.DeletedQuery=DeletedQuery




