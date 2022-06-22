const AuthorModel = require("../Models/AuthorModel")
const BlogModel = require("../Models/BlogModel")


const CreateBlog = async function (req, res) {
   try {

      const data = req.body
      console.log(data)

      if (!data) {
         return res.status(400).send({ status: false, msg: "body couldnot be empty" })
      }
      if (!data.tittle) {
         return res.status(400).send({ status: false, msg: "title couldnot be empty" })
      }
      //if(!data.author_id){
      //  return res.status(400).send({status:true,msg:"Author Id required"})
      //}
      if (!data.body) {
         return res.status(400).send({ status: false, msg: "body couldnot be empty" })
      }
      if (!data.category) {
         return res.status(400).send({ status: false, msg: "write category" })
      }




      const CreateBlog = await BlogModel.create(data)
      return res.status(201).send({ status: true, data: CreateBlog })
   }
   catch (err) {
      res.status(500).send({ status: false, error: err.message })
   }
}





module.exports.CreateBlog = CreateBlog
module.exports.getBlogData = getBlogData
module.exports.getBlogsWithAuthorDetails = getBlogsWithAuthorDetails