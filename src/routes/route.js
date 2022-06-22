const express = require('express');
const router = express.Router();
const AuhtorController = require("../Controllers/AuthorController")
const BlogController = require("../Controllers/BlogsController")
const CommonMiddleware = require("../Middleware/CommonMiddleware")

router.post("/CreateAuthor", AuhtorController.CreateAuthor)
router.post("/CreateBlog", CommonMiddleware.mid1, BlogController.CreateBlog)


module.exports = router
