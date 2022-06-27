
const jwt = require("jsonwebtoken");
const BlogsModel = require("../Models/BlogsModel");

const updateauth = async function (req, res,next) {
  try{
    let token = req.headers["x-api-key"];
  
    //If no token is present in the request header return error

    if (!token) {
    return res.status(400).send({ status: false, msg: "token must be present" })
  }
    let BlogId = req.params.blogsid
    let author_id = await BlogsModel.find({_id:BlogId })
    let auth = author_id[0].authorId.toString()
    let decodedToken = jwt.verify(token, "Functionup-radon") //decrypting token and author_id
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" })
    let authorid= decodedToken.authorid
    if(auth != authorid){
        return res.status(401).send({status:false,msg:"login user differnt from modified user"})
    }
    next();
  }
  catch(err){
    res.status(500).send({status:false,error:err.message})
  }
}

  module.exports.updateauth = updateauth

