//Dot Env 
require('dotenv').config();
//Express
const express= require('express');
const app = express();
//middleware Json
app.use(express.json());

//port 
const port = process.env.PORT || 3000;
//DB Connection
 const mongoose = require('mongoose')
 
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected!'));

  //run server
  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  })