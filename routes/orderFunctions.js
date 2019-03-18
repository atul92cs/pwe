const express=require('express');
const router=express.Router();
const order=require('../models/Order');

router.post('/add',(req,res)=>{
  const Ordercost=req.body.Ordercost;
  const Orderdate=req.body.Orderdate;
  order.create({
    Ordercost,
    Orderdate
  }).then(()=>{
    res.status(200).json({
      message:'Order placed'
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
module.exports=router;
