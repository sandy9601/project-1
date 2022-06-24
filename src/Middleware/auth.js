
const jwt = require("jsonwebtoken");
const AuthorModel = require("../Models/AuthorModel")

const middleAuth = async function (req, res,next) {
  try{
    let token = req.headers["x-api-key"];
    let data = req.body
    let author_id = data.authorId
    //If no token is present in the request header return error
    if (!token) {
    return res.status(400).send({ status: false, msg: "token must be present" })
    }
    let decodedToken = jwt.verify(token, "Functionup-radon");
    let authorid= decodedToken.authorid
    if(author_id != authorid){
        return res.status(401).send({status:false,msg:"login user is  differnt from modified user"})
    }
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" })

    next();
  }
  catch(err){
    res.status(500).send({status:false,error:err.message})
  }
}



  module.exports.middleAuth = middleAuth

