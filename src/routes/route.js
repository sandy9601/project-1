const express = require('express');
const router = express.Router();
const AuhtorController=require("../Controllers/AuthorController")
const BlogController=require("../Controllers/BlogsController")
const CommonMiddleware=require("../Middleware/CommonMiddleware")
const isdeleted=require("../Middleware/isdeleted")
const BlogIdValidation=require("../Middleware/BlogIdValidation")
const UserController=require("../Controllers/UserController")




router.post("/CreateAuthor",isdeleted.mid3,AuhtorController.CreateAuthor)

router.post("/CreateBlog",isdeleted.mid3,CommonMiddleware.mid1, BlogController.CreateBlog)

router.get("/getBlog", BlogController.getBlog)

router.put("/UpdateBlog/:BlogsId",isdeleted.mid3, BlogIdValidation.BlogIdValidation,  isdeleted.mid2,BlogController.UpdateBlog)

router.delete("/DeletedBlog/:BlogsId", BlogIdValidation.BlogIdValidation,isdeleted.mid2,BlogController.DeletedBlog)

router.delete("/DeletedQuery",BlogController.DeletedQuery)
router.post("/authorlogin", UserController.authorlogin)



module.exports=router