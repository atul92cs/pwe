const sequelize=require('sequelize');
module.exports =new sequelize('Database.sqlite',null,null,{
  dialect:'sqlite',
  storage:'Database.sqlite'
});
