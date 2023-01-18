const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  image: String,
  discount: Number,
  title: String,
  price: Number,
  strikedprice: Number,
});
const menData = mongoose.model("men", menSchema);
module.exports = menData;
