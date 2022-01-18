const { Schema, model } = require("mongoose");
const validator = require("validator");
const { postSchema } = require("./postsSchema");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
  posts: [postSchema],
});


module.exports = model("users", userSchema);
