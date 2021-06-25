const mongoose = require("mongoose");

let productsSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  description: { type: String },
  date:{type:Date,default:Date.now()},
  price: { type: Number },
  extra_description: {
    type: Object,
    properties: {
      desc_1: String,
      desc_2: String,
      desc_3: String,
      desc_4: String,
      desc_5: String,
    },
  },
});

let Products=mongoose.model('products',productsSchema);

module.exports=Products;
