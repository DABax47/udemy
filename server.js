const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT||5000;
connectDB();
app.get('/',(req,res,next)=>{
  res.send('hello world')
})



app.listen(PORT,()=>{console.log(`server on ${PORT}`);});
