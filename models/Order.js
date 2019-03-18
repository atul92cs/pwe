const sequelize=require('sequelize');
const db=require('../config/database');
const Order=db.define('Orders',{
  Ordercost:{
    type:sequelize.INTEGER
  },
  Orderdate:{
    type:sequelize.STRING
  }
});
module.exports=Order;
