
const express = require('express');
const router = express.Router();
const AuhtorController=require("../Controllers/AuthorController")
const BlogController=require("../Controllers/BlogsController")
const CommonMiddleware=require("../Middleware/CommonMiddleware")
const isdeleted=require("../Middleware/isdeleted")
const BlogIdValidation=require("../Middleware/BlogIdValidation")
const UserController=require("../Controllers/UserController")
const mid = require("../Middleware/auth")
const updatemid = require("../Middleware/updateauth")



router.post("/authors",isdeleted.mid3,AuhtorController.authors)

router.post("/blogs",isdeleted.mid3,CommonMiddleware.mid1,mid.middleAuth,BlogController.blogs)

router.get("/blogs", BlogController.getblogs)

router.put("/blogs/:blogsid", BlogIdValidation.BlogIdValidation,isdeleted.mid2,isdeleted.mid3,  updatemid.updateauth, BlogController.UpdateBlog)

router.delete("/blogs/:blogsid", BlogIdValidation.BlogIdValidation, updatemid.updateauth,isdeleted.mid2,BlogController.DeletedBlog)

router.delete("/blogs",BlogController.DeletedQuery)

router.post("/login", isdeleted.mid3, UserController.authorlogin)


module.exports=router

