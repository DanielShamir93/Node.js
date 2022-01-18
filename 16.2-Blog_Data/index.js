const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/blogPosts",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

