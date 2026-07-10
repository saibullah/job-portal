const mongoose= require("mongoose");
const jobs = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
     location:{
        type:String,
        required:true
    },
     salary:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("Job",jobs)