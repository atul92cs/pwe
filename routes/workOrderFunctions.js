const express=require('express');
const workOrder=require('../models/Workorder');
const router=express.Router();

router.post('/add',(req,res,next)=>{
  const Workorderno=req.body.workorderno;
  const Nfno=req.body.nfno;
  const Orderno=req.body.orderno;
  const Amount=req.body.amount;
  workOrder.create({
    Workorderno,
    Nfno,
    Amount,
    Orderno
  }).then(()=>{
    res.status(200).json({
      message:'Workorder created'
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      Error:err
    });
  });
});
router.get('/workorders',(req,res)=>{
  workOrder.findAll()
  .then(workorder=>
  {res.status(200).json({
    workorder
  });
}).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      Error:err
    });
  });
});
router.put('/:id',(req,res)=>{
  const Workorderno=req.body.workorderno;
  const Nfno=req.body.nfno;
  const Amount=req.body.amount;
  const Orderno=req.body.orderno;
  const id=req.params.id;
  workOrder.update(
    {Workorderno:Workorderno,Nfno:Nfno,Amount:Amount,Orderno:Orderno},
    {where:{id}}
  ).then(()=>{
    res.status(200).json({
      message:'Workorder updated'
    });
  }).catch((err)=>{
    res.status(401).json(err);
  });
});
router.delete('/:id',(req,res)=>{
  const workorderno=req.params.id;
  workOrder.destroy({where:{Workorderno:workorderno}}).then(deletedRecord=>{
    if(deletedRecord==1)
    {
       res.status(200).json({
         message:'Record deleted'
       });
    }
    else
    {
      res.status(401).json({
        message:'Error not found'
      });
    }
  }).catch(err=>{
    res.status(402).json({
      message:'Error occured'
    });
  });
  });
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  workOrder.findOne({
    where:{id:id}
  }).then(workorder=>{
    res.status(200).json({
      workorder
    });
  }).catch(err=>{
    res.status(401).json({
      err
    });
  })
});
module.exports=router;
