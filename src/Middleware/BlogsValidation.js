//Blog Validation

const BlogsValidation=async function(req,res,next){
    try{
    const data =req.body
    if(!data.title){
       return res.status(400).send({status: false,msg:"title couldnot be empty"})
    }
    if(typeof data.title!="string"){
        return res.status(400).send({status: false,msg:"title must  be string"})
    }
    let title=data.title.trim()
    if(title.length===0){
        return res.status(400).send({status: false,msg:" please enter title name"})
    }
     if(!data.body){
        return res.status(400).send({status: false ,msg: "Body name must  be present"})
     }
     if(typeof data.body!="string"){
        return res.status(400).send({status: false,msg:"Body must  be string"})
    }
    let Body=data.body.trim()
    if(Body.length===0){
        return res.status(400).send({status: false,msg:" please enter Body name"})
    }
    let Tags=data.tags
    console.log(Tags)
if(!Tags){
   return res.status(400).send({status: false,msg: "tags must be present"})
}
if(typeof Tags!="object"){
   return res.status(400).send({status: false,msg: "tags must be in array of strings"})
}
let subcategory=data.subcategory
if(!subcategory){
return res.status(400).send({status: false,msg: "subcatogery must be present"})
}
if(typeof subcategory!="object"){
return res.status(400).send({status: false,msg: "subcatogery must be in array of strings"})
}

   next()
}
catch(err){
   res.status(500).send({status: false,error:err.message})
}}

module.exports.BlogsValidation=BlogsValidation

