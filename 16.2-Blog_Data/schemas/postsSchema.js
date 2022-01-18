const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comment: [commentSchema],
});

const Post = model("posts", postSchema);

module.exports = { Post, postSchema };
