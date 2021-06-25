const mongoose = require("mongoose");

let ordersSchema = new mongoose.Schema({
  username: { type: String },
  mobileNumber: { type: Number },
  address: { type: String },
  orderAmount: { type: Number },
  orderDetails: [mongoose.Schema.Types.Mixed],
});

let Orders=mongoose.model('orders',ordersSchema);

module.exports=Orders;
