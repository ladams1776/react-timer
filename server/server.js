const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const TaskSchema = require("./models/TaskSchema");


const config = {
  db: "mongodb://172.28.1.4:27017/tasks",
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

mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on mongodb://172.28.1.4:27017/tasks`);
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
  var Task = mongoose.model("tasks", TaskSchema);

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
  var Task = mongoose.model("tasks", TaskSchema);
  Task.findById(taskId, function (err, docs) {
    if (!err) {
      res.jsonp(docs);
    }
  });
});

app.post("/api/task", (req, res) => {
  const TaskModel = mongoose.model("tasks", TaskSchema);

  const m = new TaskModel();
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
  const TaskModel = mongoose.model("tasks", TaskSchema);

  TaskModel.findOneAndUpdate({ _id: req.body._id }, {
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
  const TaskModel = mongoose.model("tasks", TaskSchema);
  const id = req.params.id;

  TaskModel.deleteOne({ _id: id }, function (e) {
    if (e) throw e;
    res.jsonp({ taskId: id, isSuccess: true });
  });
});

app.delete("/api/tasks", (req, res) => {
  const TaskModel = mongoose.model("tasks", TaskSchema);
  TaskModel.deleteMany({}, function (e) {
    if (e) throw e;
  });
});
