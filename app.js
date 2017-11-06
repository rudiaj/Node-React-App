var express = require('express');
var util = require('util');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var path = require('path');
var WebClient = require('@slack/client').WebClient;


var token ='xoxp-267271537443-266830322769-268430392327-e6a4c771332c8c8ce772d57d250f4832';

var web = new WebClient(token);

web.channels.list(function(err, info) {
    if (err) {
        console.log('Error:', err);
    } else {
        for(var i in info.channels) {
            console.log(info.channels[i].name);
        }
    }
});

// console.log(process.env);


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(express.static('public'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(expressValidator());


//TODO: sanitize inc data

Job = require('./models/job');
//Connect to mongoose
mongoose.connect('mongodb://localhost/jobs',{useMongoClient: true});
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/api/jobs', function (req,res){
    Job.getJobs(function (err, jobs) {
        if(err){
            throw err;
        }
        res.json(jobs);
    });
});

app.post('/api/jobs', function (req,res){
    var job = req.body;
    req.checkBody('message', 'message is required').notEmpty();
    req.checkBody('time', 'time is required').notEmpty();
    req.checkBody('channel', 'channel is required').notEmpty();
    req.checkBody('status', 'status is required').notEmpty();

    // check for errors!
    var errors = req.validationErrors();
    if (errors) {
        res.send('There have been validation errors: ' + util.inspect(errors), 400);
        return;
    }
    else{
        Job.addJob(job, function (err, job) {
            console.log('ovo je iz bodija', job);
            if(err){
                throw err;
            }
            res.json(job);
        });
    }
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
