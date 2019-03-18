const sequelize=require('sequelize');
const db=require('../config/database');
const User=db.define('Users',{
  username:{
    type:sequelize.STRING
  },
  password:{
   type:sequelize.STRING
   }
});

module.exports=User;
