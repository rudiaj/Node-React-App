var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());

//TODO: sanitize inc data

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
    console.log('ovo sam dobio', job)
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
