const { now } = require("mongoose")
const AuthorModel = require("../Models/AuthorModel")
const BlogModel = require("../Models/BlogModel")


//Q1 Creating Blog

const CreateBlog = async function (req, res) {
   try {
      const data = req.body
      if (!data.tittle) {
         return res.status(400).send({ status: false, msg: "title couldnot be empty" })
      }
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

//Q getBlog

const getBlog = async function (req, res) {
   try {

      let filterdata = { isDeleted: false, isPublished: true }
      let author_id = req.query.author_id
      let category = req.query.category
      let tags = req.query.tags
      let subcategory = req.query.subcategory
      let query = req.query

      filterdata.author_id=author_id
      //filterdata.category=category
      //filterdata.tags=tags
      //filterdata.subcategory=subcategory
      const getBlog = await BlogModel.find(filterdata)
      if (getBlog.length === 0) {
         return res.status(404).send({ status: false, msg: "No User Found" })
      }
      res.status(200).send({ status: true, data: getBlog })
   }
   catch (err) {
      res.status(500).sand({ status: false, error: err.message })

   }
}



//Update Qeustion

const UpdateBlog = async function (req, res) {
   try {
      let data = req.body
      // let Moretags=data.tags
      //let subcategory=data.subcategory
      let author_id = req.params.BlogsId
      const UpdateBlog = await BlogModel.findOneAndUpdate({ _id: author_id }, { $set: { isPublished: true, publishedAt: Date.now() } }, { new: true })
      /UpdateBlog.subcategory.push(subcategory)
      //UpdateBlog.tags.push(Moretags)
      UpdateBlog.save()
      res.send({ msg: true, data: UpdateBlog })
   }
   catch (err) {
      res.status(500).send({ status: false, error: err.message })
   }
}

//DeletedBlog Question

const DeletedBlog = async function (req, res) {
   try {
      let BlogsId = req.params.BlogsId
      console.log(BlogsId)
      const DeletedBlog = await BlogModel.findOneAndUpdate({ _id: BlogsId, isDeleted: false }, { $set: { isDeleted: true, deleteAt: Date.now() } })
      return res.status(200).send()
   }
   catch (err) {
      res.status(500).send({ status: false, error: err.message })
   }
}


// Deleted Query

const DeletedQuery = async function (req, res) {
   try {
      let category = req.query.category
      let subcategory = req.query.subcategory
      let author_id = req.query.author_id
      let tags = req.query.tags
      let isPublished = req.query.isPublished

      let query = req.query
      if (Object.keys(query).length === 0) {
         return res.status(400).send({ status: false, msg: "query params couldnot be empty" })
      }
      const DeletedQuery = await BlogModel.updateMany({ category: category }, { $set: { isDeleted: true } })
      if (!DeletedQuery) {
         return res.status(404).send({ status: false, msg: "Blog doesnot exist" })
      }
      else {
         return res.status(200).send({ status: true, data: DeletedQuery })
      }
   }
   catch (err) {
      res.status(500).send({ status: false, error: err.message })
   }
}






module.exports.CreateBlog = CreateBlog

module.exports.getBlog = getBlog

module.exports.UpdateBlog = UpdateBlog

module.exports.DeletedBlog = DeletedBlog

module.exports.DeletedQuery = DeletedQuery