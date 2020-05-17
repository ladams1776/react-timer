const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const Task = require("./infrastructure/models/Task");
const Tag = require("./infrastructure/models/Tag");
const getAllTasksAction = require('./application/requestHandlers/tasks/getAllTasksAction');
const getTaskByIdAction = require('./application/requestHandlers/tasks/getTaskByIdAction');
const getAllTagsAction = require('./application/requestHandlers/tags/getAllTagsAction');

//@TODO: Move the username and password out of here 
const SERVER_AND_PORT = 'admin-user:admin-password@172.28.1.4:27017';

const config = {
  db: `mongodb://${SERVER_AND_PORT}`,
  opts: {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    useNewUrlParser: true,
    useUnifiedTopology: true
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


app.get("/api/tasks", getAllTasksAction);

app.get("/api/task/:id", getTaskByIdAction);

app.post("/api/task", (req, res) => {
  const m = new Task();
  m.toObject();
  m.date = req.body.date;
  m.description = req.body.WorkUnit[0].description;
  m.contractId = req.body.WorkUnit[0].contractId;
  m.time = req.body.WorkUnit[0].time;
  m.tags = req.body.WorkUnit[0].tags;

  m.save((err, task) => {
    if (err) throw err;
    res.jsonp(task);
  });
});

app.put("/api/task", (req, res) => {
  //@TODO: Might need to delete prior tags
  Task.findOneAndUpdate({ _id: req.body._id }, {
    $set: {
      date: req.body.date,
      description: req.body.WorkUnit[0].description,
      contractId: req.body.WorkUnit[0].contractId,
      time: req.body.WorkUnit[0].time,
      tags: req.body.WorkUnit[0].tags
    }
  }, { new: true }, (err, task) => {
    if (err) throw err;
    res.jsonp(task);
  });
});

app.delete("/api/task/:id", (req, res) => {
  const id = req.params.id;

  Task.deleteOne({ _id: id }, function (e) {
    if (e) throw e;
    res.jsonp({ taskId: id, isSuccess: true });
  });
});

app.delete("/api/tasks", (req, res) => {
  Task.deleteMany({}, function (e) {
    if (e) throw e;
    res.jsonp({ isSuccess: true });
  });
});

// TAGS
app.get("/api/tags", getAllTagsAction);

app.post('/api/tag', (req, res) => {
  const tag = new Tag();
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
