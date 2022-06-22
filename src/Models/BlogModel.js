const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const BlogsSchema = new mongoose.Schema(
    {
        tittle: {
            type: String,
            require: true
        },
        body: {
            type: String,
            require: true
        },

       

        author_id:{
            type: ObjectId,

            ref: "Author",
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

module.exports = mongoose.model("blog", BlogsSchema)


