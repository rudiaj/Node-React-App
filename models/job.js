var mongoose = require('mongoose');

//Job Schema

// TODO:finish schema to match requierments

var jobSchema = mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    channel:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }

});

var Job = module.exports = mongoose.model('Job', jobSchema);

//get Jobs
module.exports.getJobs = function(callback, limit){
    Job.find(callback).limit(limit);
}

//get single Job
module.exports.getJobById = function(id, callback){
    Job.findById(id,callback);
}

// add job
module.exports.addJob = function(job, callback){
    Job.create(job, callback);
}

//delete Job
module.exports.deleteJob = function(id, callback){
    var query = {_id:id};
    Job.remove(query,callback);
}