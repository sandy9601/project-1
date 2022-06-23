const jwt = require("jsonwebtoken");
const AuthorModel = require("../Models/AuthorModel");
const BlogModel = require("../Models/BlogModel");

const updateauth = async function (req, res,next) {
    let token = req.headers["a-auth-token"];
    if (!token) token = req.headers["a-Auth-token"];
    let BlogId = req.params.BlogsId
    let author_id = await BlogModel.find({_id:BlogId })
    let auth = author_id[0].author_id.toString()
    //console.log(auth)


    
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" })
    
    let decodedToken = jwt.verify(token, "Functionup-radon");
    let authorid= decodedToken.authorid
    console.log(auth)
    console.log(authorid)
    if(auth != authorid){
        return res.status(401).send({status:false,msg:"login user differnt from modified user"})

    }
    //console.log(decodedToken)
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" })

    next();

  };







  module.exports.updateauth = updateauth