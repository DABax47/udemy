const express = require('express');
const connectDB = require('./config/db');
const router = require ('./routes/api/users');
const app = express();

const PORT = process.env.PORT||5000;
connectDB();

// init middleware
//needed to parse json data req.body
app.use(express.json({extended:false}));

app.use('/api/users', require ('./routes/api/users'))
app.use('/api/auth', require ('./routes/api/auth'))
app.use('/api/profile', require ('./routes/api/profile'))
app.use('/api/posts', require ('./routes/api/posts'))



app.listen(PORT,()=>{console.log(`server on ${PORT}`);});
