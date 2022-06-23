const express = require('express');
const router = express.Router();
const AuhtorController=require("../Controllers/AuthorController")
const BlogController=require("../Controllers/BlogsController")
const CommonMiddleware=require("../Middleware/CommonMiddleware")
const isdeleted=require("../Middleware/isdeleted")

router.post("/CreateAuthor",isdeleted.mid3,AuhtorController.CreateAuthor)

router.post("/CreateBlog", BlogController.CreateBlog)

router.get("/getBlog", BlogController.getBlog)

router.put("/UpdateBlog/:BlogsId",isdeleted.mid3,isdeleted.mid2,BlogController.UpdateBlog)

router.delete("/DeletedBlog/:BlogsId",isdeleted.mid2,BlogController.DeletedBlog)

router.delete("/DeletedQuery",BlogController.DeletedQuery)



module.exports=router