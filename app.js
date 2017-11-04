var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Job = require('./models/job');
//Connect to mongoose
mongoose.connect('mongodb://localhost/jobs',{useMongoClient: true});
var db = mongoose.connection;

app.get('/', function (req,res){
    res.send('Hello World');
});

app.get('/api/jobs', function (req,res){
    Job.getJobs(function (err, jobs) {
        console.log('uso u get');
        if(err){
            throw err;
        }
        res.json(jobs);
    });
});

app.post('/api/jobs', function (req,res){
    var job = req.body;

    Job.addJob(job, function (err, job) {
        console.log('ovo je iz bodija', job);
        if(err){
            throw err;
        }
        res.json(job);
    });
});


app.get('/api/jobs/:_id', function (req,res){
    Job.getJobById(req.params._id, function (err, job) {
        if(err){
            throw err;
        }
        res.json(job);
    });
});

app.delete('/api/jobs/:_id', function (req,res){
    var id = req.params._id;
    // console.log( req.params)
    Job.deleteJob(id, function (err, job) {
        console.log('ovo je id', id)
        if(err){
            throw err;
        }
        res.json(job);
    });
});


app.listen(3000);
console.log('running on port 3000');
