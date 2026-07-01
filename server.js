const express = require ('express')
require("dotenv").config();
const app = express()
const mongoose = require('mongoose')
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])
const authroute = require('./routes/authroute')
const jobroute = require('./routes/jobroute')
const applicationRoute = require("./routes/applicationroute");



app.use(express.json())
app.use('/api/jobs',jobroute)
app.use('/api/auth',authroute)
app.use("/api/applications", applicationRoute);


mongoose.connect("mongodb+srv://mohamedsaibullah:achsaibullah@cluster0.mkczn35.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("connected");    
})
.catch ((error)=>{
    console.log(error);
    
})

// app.get('/', (req,res)=>{
// res.send("hello")
// })
app.listen(4000 , ()=>{
    console.log("running");
    
})