const mongoose = require("mongoose");


const Orderschema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
      },
      orderedItems: {
        type: [String],
        required: true,
      },
      address: {
        type: String,
        required: true,
      },  
    });

  const Order = mongoose.model("Orders", Orderschema);


  const add = async (type,items,address) => {
   
    const newOrder = await Order.create({
      type: type,
      orderedItems: items,
      address: address,
    });
    newOrder.save();
  
  };


  module.exports = { Order,add } ; 

