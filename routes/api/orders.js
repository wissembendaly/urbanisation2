const mongoose = require("mongoose");
const express=require('express');
const router=express.Router();
const {Order,add} = require("../../database/order")


  //gets members
  router.get('/getAllOrders', async (req,res)=>{
    const allOrders = await Order.find();
    console.log(allOrders)
    res.status(200).json(allOrders);
})

router.post('/addorder',async (req,res)=>{
    console.log(req)
    var type = req.body.type;
    var addres = req.body.address;
    var orderedItems = req.body.orderedItems;
    console.log(Order)
    add(type,orderedItems,addres)

    res.status(200).json({msg:"order added succussfully"})
 
  });





module.exports=router;