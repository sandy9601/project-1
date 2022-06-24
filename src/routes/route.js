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

router.post("/blogs",CommonMiddleware.mid1,mid.middleAuth,isdeleted.mid3,BlogController.blogs)

router.get("/blogs", BlogController.getblogs)

router.put("/blogs/:blogsid",isdeleted.mid3, BlogIdValidation.BlogIdValidation, updatemid.updateauth, isdeleted.mid2,BlogController.UpdateBlog)

router.delete("/blogs/:blogsid", BlogIdValidation.BlogIdValidation, updatemid.updateauth,isdeleted.mid2,BlogController.DeletedBlog)

router.delete("/blogs",BlogController.DeletedQuery)

router.post("/login", isdeleted.mid3, UserController.authorlogin)


module.exports=router