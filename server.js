const express=require('express');
const app=express();
const router=express.Router()
const dbConnect=require('./config/connectDB')
const User = require('./models/User')
require('dotenv').config()
dbConnect()
const PORT=process.env.PORT 
 /*const user = new User ({
     name: 'safwen',
     email : 'test@gmail.com',
     age:27
 });
 user.save((err,data)=>{
     if (err){
         console.log(err)
     } 
     else {
         console.log(data)
     }
 })*/
 app.use(express.json())
 app.use('/', require("./routes/user"))
  


app.listen(PORT, (err)=>err? console.log(err): console.log(`App listening on port ${PORT}`))