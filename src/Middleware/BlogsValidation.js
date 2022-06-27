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
    const results = Tags.map(ele => {
     return ele.trim();
    })
    console.log(results)
    for (let i=0;i<Tags.length;i++){
    if (Tags[i]!=results[i])
      return res.status(400).send({status:false,msg:"tags having extra spaces! Provide proper tags"}) // validation if extra spaces around tags is given by frontend.
   }
   var regex=  new RegExp(/^[a-zA-Z ]{2,10}$/);   // naming validation according to characters and length by regex
   if((data.tags && !Tags.match(regex))){
     return res.status(400).send({status:false, msg: "tags should be in valid format"}) 
   }
   if(data.subCategory && !subCategory.match(regex)){
     return res.status(400).send({status:false, msg: "subCategory should be in valid format"})
   }
   next()
}
catch(err){
   res.status(500).send({status: false,error:err.message})
}}



module.exports.BlogsValidation=BlogsValidation