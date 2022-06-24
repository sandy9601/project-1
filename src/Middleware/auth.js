const jwt = require("jsonwebtoken");
const AuthorModel = require("../Models/AuthorModel")

const middleAuth = async function (req, res,next) {
    let token = req.headers["a-auth-token"];
    if (!token) token = req.headers["a-Auth-token"];
    let data = req.body
    let author_id = data.author_id
    
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" })
    
    let decodedToken = jwt.verify(token, "Functionup-radon");
    let authorid= decodedToken.authorid
    if(author_id != authorid){
        return res.status(401).send({status:false,msg:"login user differnt from modified user"})

    }
    console.log(decodedToken)
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" })

    next();
  };







  module.exports.middleAuth = middleAuth