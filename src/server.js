const express = require ('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const app = express();








const TaskListValidatior = {
    $jsonSchema: {            
        bsonType: "object",
        required: [ 
            "description", 
            "customer",
            "contract",            
            "time"
            ],
        properties: {
            description: {
                bsonType: "string",
                maximum: 254,
                description: "must be a string and no greater than 254"
            },
            customer: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            contract: {
                bsonType: "string",
                description: "must be a string is required"
            },
            time: {
                bsonType: "int",                
                description: "must be a int and it is in millisecond format"
            }
        }            
    }
}

var db;

MongoClient.connect('mongodb://localhost:27017/tasks-lists', (err, client) => {
  if (err) throw err

//   db.collection('tasks').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
    db = client.db('tasks');
    app.listen(3001, function () {
        console.log();
    });    
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended: true}));

app.get("/task", function (req, res) {
    //@todo: simulate db
    res.jsonp([
        {
            description: "Optimizing and setting up SEO",
            customer: "Acme Corp",
            contract: "Search Engine Optimization",
            key: 0,
            time: 3.33
        },
        {
            description: "Running usability tests",
            customer: "Wonka Industries",
            contract: "Usability",
            key: 1,
            time: 3.33
        },
        {
            description: "Speeding up landing pages loading time",
            customer: "Stark Industries",
            contract: "Speed and Performance",
            key: 2,
            time: 1.33
        },
        {
            description: "Running usability tests",
            customer: "Ollivanders Wand Shop",
            contract: "ANalytics",
            key: 3,
            time: 1.66
        }
    ]);
});