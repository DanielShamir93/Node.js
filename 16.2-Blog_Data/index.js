const mongoose = require("mongoose");
const User = require("./schemas/userSchema");
const usersArray = require("./users");

mongoose.connect(
  "mongodb://localhost/blogPosts",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createUsers = async () => {
  try {
    console.log(User);
    const users = await User.create(usersArray);
    console.log(users)
  } catch (err) {
    console.log(err.message);
  }
}

createUsers();