const express = require("express");
const mongoose = require("mongoose");
const { Order,add } = require("./database/order.js")

const app = express();
app.use(express.json());

// app.get("/api/order/getAllOrders", async (req, res) => {
//     const allOrders = await Order.find();
//     return res.status(200).json(allOrders);
//   });

app.use('/api/order',require('./routes/api/orders'))

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tpurbanisation:tpurbanisation@cluster0.drplab0.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();



