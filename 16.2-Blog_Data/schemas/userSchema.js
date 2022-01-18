const { Schema, model } = require("mongoose");
const validator = require("validator");
const { postSchema } = require("./postsSchema");

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
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

const User = model("users", userSchema);

const newUser = {
  id: 1,
  name: "Daniel",
  email: "21dans23932@gmail.com",
  posts: [
    {
      title: "wow",
      comment: [
        {
          content: "I love mongoose!!",
        },
      ],
    },
  ],
};

const user = new User(newUser);
console.log(postSchema);

const saver = async () => {
  try{

    await user.save();

  }catch(err){
    console.log(err);
  }
};

saver();

module.exports = { User, schema: userSchema };
// const Post = model("posts", postSchema);
// const Comment = model("comments", commentSchema)

//module.exports = {User, Post, Comment}
// module.exports = User;
