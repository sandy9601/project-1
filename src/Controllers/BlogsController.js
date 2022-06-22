const AuthorModel = require("../Models/AuthorModel")
const BlogModel = require("../Models/BlogModel")


const CreateBlog = async function (req, res) {
   try {
      const data = req.body
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

   const CreateBlog = await BlogModel.create(data)
   return res.status(201).send({ status: true, data: CreateBlog })

}

const getBlog = async function (req, res) {
   try {
      const getBlog = await BlogModel.find({ isDeleted: false, isPublished: true })
      if (getBlog.length === 0) {
         return res.status(404).send({ status: false, msg: "No User Found" })
      }
      res.status(200).send({ status: true, data: getBlog })
   }
   catch (err) {
      res.status(500).sand({ status: false, error: err.message })



   }
}
const FilterBlog = async function (req, res) {
   try {
      let author_id = req.query.author_id
      let category = req.query.category
      let tags = req.query.tags
      let subcategory = req.query.subcategory
      console.log(author_id)
      const FilterBlog = await BlogModel.find({ subcategory: subcategory })
      console.log(FilterBlog.length)
      if (FilterBlog.length === 0) {
         return res.status(404).send({ status: false, msg: "No User Found" })
      }
      res.status(200).send({ status: true, data: FilterBlog })
   }
   catch (err) {
      res.status(500).send({ status: false, error: err.message })

   }
}


const UpdateBlog = async function (req, res) {
   let data = req.body
   let Moretags = data.tags
   let author_id = req.params.BlogsId
   const DeletedBlog = await BlogModel.find({ _id: author_id })
   if (DeletedBlog[0].isDeleted === true) {
      return res.status(404).send({ status: false, msg: "we cannot modify the deleted documents" })
   }
   else {
      const UpdateBlog = await BlogModel.findOneAndUpdate({ _id: author_id }, { new: true })
      UpdateBlog.tags.push(Moretags)
      res.send({ msg: true, data: UpdateBlog })
   }
}











module.exports.CreateBlog = CreateBlog

module.exports.getBlog = getBlog

module.exports.FilterBlog = FilterBlog

module.exports.UpdateBlog = UpdateBlog
module.exports.deletedBlogId = deletedBlogId 







