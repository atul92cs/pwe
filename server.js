const express=require('express');
const user=require('./routes/userFunctions');
const workOrder=require('./routes/workOrderFunctions');
const bill=require('./routes/billFunctions');
const order=require('./routes/orderFunctions');
const bodyParser=require('body-parser');
const PORT=8080;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use('/user',user);
app.use('/workorder',workOrder);
app.use('/bill',bill);
app.use('/order',order);
app.listen(PORT,()=>{
  console.log('server started on' +' '+PORT);
});
