const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const user=require('../models/User');
const router=express.Router();

router.post('/signup',(req,res,next)=>{
  bcrypt.hash(req.body.password,10).then(hash=>{
    const username=req.body.username;
    const password=hash;
    user.create({
      username,
      password
    }).then(()=>{
      res.status(200).json({
        message:'User created'
      });
    }).catch(err=>{
      res.status(401).json({
        message:'Error occured',
        error:err
      });
    });
  });
});
router.post('/login',(req,res,next)=>{
  const username=req.body.username;
  let fectchedUser;
   user.findOne({where:{username}}).then((User) => {
       if(!User)
       {
         res.status(401).json({
           message:'Auth failed'
         });
       }
       fectchedUser=User;
      return bcrypt.compare(req.body.password,User.password);
   }).then(result=>{
      if(!result)
      {
        res.status(403).json({
          message:'authentication problem'
        });
      }
      const token =jwt.sign(
        {username:fectchedUser.username},
        "Secret",
        {expiresIn:"72h"}
      );
      res.status(200).json({
        token:token,
        expiresIn:72000,
        username:fectchedUser.username
      });
   }).catch((err) => {
        res.status(500).json({
          message:'Oops error occured',
          err:err
        });
   });
});

module.exports=router;
