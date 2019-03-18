const sequelize=require('sequelize');
const db=require('../config/database');
const WorkOrder=db.define('WorkOrders',{
   Workorderno:{
      type:sequelize.INTEGER
    },
    Nfno:{
      type:sequelize.INTEGER
    },
    Amount:{
      type:sequelize.INTEGER
    },
    Orderno:{
      type:sequelize.INTEGER
    }
 });
 module.exports=WorkOrder;
