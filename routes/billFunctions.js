const express=require('express');
const router=express.Router();
const bill=require('../models/Bill');
router.post('/add',(req,res)=>{
  const WorkorderNo=req.body.workorderno;
  const Nfno=req.body.nfno;
  const OrderNo=req.body.orderno;
  const Amount=req.body.amount;
  bill.create({
    WorkorderNo,
    Nfno,
    OrderNo,
    Amount
  }).then(()=>{
    res.status(200).json({
      message:'Added to bill'
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
router.get('/getbill',(req,res)=>{
  bill.findAll().then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
     res.status(401).json({
       message:'Error occured',
       error:err
     });
  });
});
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  bill.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Entry deleted'
      });
    }
    else {
      res.status(401).json({
        message:'Entry not found'
      });
    }
  }).catch(err=>{
    res.status(402).json({
      message:'Error occured',
      error:err
    });
  });
});
router.put('/updatebill/:id',(req,res)=>{
  const id=req.params.id;
  const workorderno=req.body.workorderno;
  const nfno=req.body.nfno;
  const orderno=req.body.orderno;
  const amount=req.body.amount;
  bill.update({WorkorderNo:workorderno,Nfno:nfno,OrderNo:orderno,Amount:amount},{where:{id}}
  ).then(result=>{
    res.status(200).json({
      message:'Bill updated'
    })
  })
  .catch(err=>{
    res.status(401).json({
      message:'error occured',
      error:err
    });
  })
});
router.get('/getbill/:id',(req,res)=>{
  const id=req.params.id;
  bill.findOne({where:{id:id}}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(401).json({
      message:'error occured',
      error:err
    });
  });
});
module.exports=router;
