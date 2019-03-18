const sequelize=require('sequelize');
const db=require('../config/database');
const Bill=db.define('Bills',{
  WorkorderNo:{
    type:sequelize.INTEGER
  },
  Nfno:{
    type:sequelize.INTEGER
  },
  OrderNo:{
    type:sequelize.INTEGER
  },
  Amount:{
    type:sequelize.INTEGER
  }
});
module.exports=Bill;
