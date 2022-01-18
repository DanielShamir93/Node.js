const mongoose = require("mongoose");
const Product = require("./models/productsModel");
const productsArray = require("./products");

mongoose.connect(
  "mongodb://localhost/ecommerce",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createProducts = async () => {
  try {
    const products = await Product.create(productsArray);
  } catch (err) {
    console.log(err.message);
  }
}

createProducts();