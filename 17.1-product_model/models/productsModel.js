const { model } = require("mongoose");

const productSchema = require('./schemas/productSchema');

module.exports = model("Product", productSchema);