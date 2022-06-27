

const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const BlogsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        body: {
            type: String,
            require: true
        },
        authorId:{
            type: ObjectId,
            ref: "AuthorModel",
            require: true
        },
        tags: {
            type: [String]
        },
        category: {
            type: String,
            require: true
        },
        subcategory: {
            type: [String]
        },
        deleteAt: {
            type: Date
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        publishedAt: {
            type: Date
        },
        isPublished: {
            type: Boolean,
            default: false
        },
    },
    { timetamps: true }
);


module.exports = mongoose.model("BlogsModel", BlogsSchema)



