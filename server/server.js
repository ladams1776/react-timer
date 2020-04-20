const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const TaskSchema = require("./models/TaskSchema");
const TagSchema = require("./models/TagSchema");

const SERVER_AND_PORT = '172.28.1.4:27017';

const TAG_MODEL = mongoose.model("tags", TagSchema)
const TASK_MODEL = mongoose.model("tasks", TaskSchema);


const config = {
  db: `mongodb://${SERVER_AND_PORT}/tasks`,
  opts: {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
  }
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  return mongoose.connect(config.db, config.opts)
}

mongoose.connect(config.db, config.opts)
  .catch(error => setTimeout(connectWithRetry, 5000));

mongoose.Promise = global.Promise;
//@TODO: Need to auto set data
mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on mongodb://${SERVER_AND_PORT}/tasks`);
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });

app.listen(3001, function () {
  console.log("Backend has started on port 3001");
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");

  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/tasks", function (req, res) {
  TASK_MODEL.find({}, function (err, docs) {
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
  TASK_MODEL.findById(taskId, function (err, docs) {
    if (!err) {
      res.jsonp(docs);
    }
  });
});

app.post("/api/task", (req, res) => {
  const m = new TASK_MODEL();
  m.toObject();
  m.date = req.body.date;
  m.description = req.body.WorkUnit[0].description;
  m.contractId = req.body.WorkUnit[0].contractId;
  m.time = req.body.WorkUnit[0].time;

  m.save((err, task) => {
    if (err) throw err;
    res.jsonp(task);
  });
});

app.put("/api/task", (req, res) => {
  TASK_MODEL.findOneAndUpdate({ _id: req.body._id }, {
    $set: {
      date: req.body.date,
      description: req.body.WorkUnit[0].description,
      contractId: req.body.WorkUnit[0].contractId,
      time: req.body.WorkUnit[0].time
    }
  }, { new: true }, (err, task) => {
    if (err) throw err;
    res.jsonp(task);
  });
});

app.delete("/api/task/:id", (req, res) => {
  const id = req.params.id;

  TASK_MODEL.deleteOne({ _id: id }, function (e) {
    if (e) throw e;
    res.jsonp({ taskId: id, isSuccess: true });
  });
});

app.delete("/api/tasks", (req, res) => {
  TASK_MODEL.deleteMany({}, function (e) {
    if (e) throw e;
  });
});

// TAGS
app.get("/api/tags", (req, res) => {
  TAG_MODEL.find({}, (err, docs) => {
    if (err) {
      //@todo: have not tested for this scenario yet.
      res.jsonp([{ isSuccess: 0 }]);
    } else {
      res.jsonp(docs);
    }
  });
});

app.post('/api/tag', (req, res) => {
  const tag = new TAG_MODEL();
  console.log('Hi', req);
  const tagDto = req.body;
  
  tag.toObject();
  tag.description = tagDto.description;
  tag.name = tagDto.name;
  
  // res.jsonp({ status: 200, name: 'yup', description: 'what' });
  tag.save((err, tag) => {
    if (err) {
      console.log(`error saving tag: ${tag}`);
      // throw err;
      res.jsonp({ status: 500, ...err })
    }
    res.jsonp({ status: 200, ...tag });
  });
});
