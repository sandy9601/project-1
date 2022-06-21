const mongoose=require('mongoose')
const AuthorSchema=new mongoose.schema({
 firstName:{
    type:String,
    require:true
 },
LastName: {type:String,
required:true}, 
title: {type:String, enum:[Mr, Mrs, Miss],required:true}, 
email: {required:true,unique:true}, 
password: {type:String,
required:true}}, 
{timestamps:true })
module.exports=mongoose('Author',AuthorSchema)
