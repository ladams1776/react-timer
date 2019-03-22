const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('./models/Task');







// MongoClient.connect('mongodb://localhost:27017/tasks-lists', (err, client) => {
//   if (err) throw err

// //   db.collection('tasks').find().toArray(function (err, result) {
// //     if (err) throw err

// //     console.log(result)
// //   })
//     db = client.db('tasks');
//     app.listen(3001, function () {
//         console.log();
//     });    
// })


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
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/task", function (req, res) {
    //@todo: left off here
    res.json({
        description: "Optimizing and setting up SEO",
            customer: "Acme Corp",
            contract: "Search Engine Optimization",
            id: 0,
            time: 3.33
    });
});

app.get("/api/task", function (req, res) {

    var Task = mongoose.model('task', taskSchema);
    Task.findOne([]);
    //@todo: simulate db
    res.jsonp([
        {
            description: "Optimizing and setting up SEO",
            customer: "Acme Corp",
            contract: "Search Engine Optimization",
            id: 0,
            time: 3.33
        },
        {
            description: "Running usability tests",
            customer: "Wonka Industries",
            contract: "Usability",
            id: 1,
            time: 3.33
        },
        {
            description: "Speeding up landing pages loading time",
            customer: "Stark Industries",
            contract: "Speed and Performance",
            id: 2,
            time: 1.33
        },
        {
            description: "Running usability tests",
            customer: "Ollivanders Wand Shop",
            contract: "ANalytics",
            id: 3,
            time: 1.66
        }
    ]);
});