const {Schema, model} = require("mongoose");

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  }
})

const postSchema = new Schema({
  comment: commentSchema
})

module.exports = model("User", postSchema);