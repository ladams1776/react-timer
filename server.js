const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const TaskSchema = require("./src/models/TaskSchema");









mongoose.connect('mongodb://localhost:27017/tasks');
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on mongodb://localhost:27017/tasks`)
        app.listen(3001, function () {
            console.log('Backend has started on port 3001');
        });
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });




app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");

    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/api/tasks", function (req, res) {

    var Task = mongoose.model('tasks', TaskSchema);

    Task.find({}, function (err, docs) {
        if (err) {
            //@todo: have not tested for this scenario yet.
            res.jsonp([{ isSuccess: 0 }]);
        } else {
            res.jsonp(docs);
        }
    });
});

app.get("/api/task/:id", function (req, res) {

    const taskId = req.params.id;
    var Task = mongoose.model('tasks', TaskSchema);
    Task.findById(taskId, function (err, docs) {
        if (!err) {
            res.jsonp(docs);
        }
    });
});


app.post("/api/task", function (req, res) {
    const TaskModel = mongoose.model('tasks', TaskSchema);
    

    if (req.body._id !== "-1") {
        TaskModel.findById(req.body._id, function (err, foundTask) {
            if (err) throw err;
            foundTask.date = req.body.date;
            foundTask.description = req.body.WorkUnit[0].description;
            foundTask.contractId = req.body.WorkUnit[0].contractId;
            foundTask.time = req.body.WorkUnit[0].time;
            foundTask.save( function (err) {
                if (err) throw err;
                res.jsonp({ isSuccess: true});
            })
        });
    } else {  
        const m = new TaskModel;   
        m.toObject();
        m.date = req.body.date;
        m.description = req.body.WorkUnit[0].description;
        m.contractId = req.body.WorkUnit[0].contractId;
        m.time = req.body.WorkUnit[0].time;

        m.save(function (err) {
            if (err) throw err;
            res.jsonp({ isSuccess: true});
        });
    }
});


app.delete("/api/task", function (req, res) {
    const TaskModel = mongoose.model('tasks', TaskSchema);

    TaskModel.deleteMany({}, function (e) { if (e) throw e; });
});
