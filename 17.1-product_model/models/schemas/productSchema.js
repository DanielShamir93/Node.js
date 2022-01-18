const { Schema } = require("mongoose");
const detailsSchema = require("./detailsSchema")

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: detailsSchema
});


module.exports = productSchema;
