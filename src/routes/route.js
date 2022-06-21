const express = require('express');
const router = express.Router();
const AuhtorController=require("../Controllers/AuthorController")
const BlogController=require("../Controllers/BlogsController")

router.post("/CreateAuthor",AuhtorController.CreateAuthor)
router.post("/CreateBlog",BlogController.CreateBlog)

module.exports=router