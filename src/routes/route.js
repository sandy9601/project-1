const express = require('express');
const router = express.Router();
const AuhtorController=require("../Controllers/AuthorController")


router.post("/CreateAuthor",AuhtorController.CreateAuthor)

module.exports=router