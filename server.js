const express = require ('express')
require("dotenv").config();
const app = express()
const mongoose = require('mongoose')
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])
const authroute = require('./routes/authroute')
const jobroute = require('./routes/jobroute')
const applicationRoute = require("./routes/applicationroute");
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use('/api/jobs',jobroute)
app.use('/api/auth',authroute)
app.use("/api/applications", applicationRoute);

mongoose.connect(process.env.Mongodb)
.then(()=>{
    console.log("connected");    
})
.catch ((error)=>{
    console.log(error);
    
})

// app.get('/', (req,res)=>{
// res.send("hello")
// })
app.listen(5000 , ()=>{
    console.log("running on 5000");
})