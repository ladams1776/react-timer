const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Task = require('./infrastructure/models/Task');
const Tag = require('./infrastructure/models/Tag');
const getAllTasksAction = require('./application/requestHandlers/tasks/getAllTasksAction');
const getTaskByIdAction = require('./application/requestHandlers/tasks/getTaskByIdAction');
const updateTaskAction = require('./application/requestHandlers/tasks/updateTaskAction');
const getAllTagsAction = require('./application/requestHandlers/tags/getAllTagsAction');
const deleteTagAction = require('./application/requestHandlers/tags/deleteTagAction');
const addTagAction = require('./application/requestHandlers/tags/addTagAction');
const editTagAction = require('./application/requestHandlers/tags/editTagAction');
const getTagByIdAction = require('./application/requestHandlers/tags/getTagByIdAction');
const addTaskAction = require('./application/requestHandlers/tasks/addTaskAction');
const { time } = require('console');
const deleteTaskByIdAction = require('./application/requestHandlers/tasks/deleteTaskByIdAction');
const deleteAllTaskAction = require('./application/requestHandlers/tasks/deleteAllTaskAction');

// @TODO: Move the username and password out of here
const SERVER_AND_PORT = 'admin-user:admin-password@localhost:27017';

const config = {
  db: `mongodb://${SERVER_AND_PORT}`,
  opts: {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  return mongoose.connect(config.db, config.opts);
};

mongoose
  .connect(config.db, config.opts)
  .catch(() => setTimeout(connectWithRetry, 5000));

mongoose.Promise = global.Promise;
// @TODO: Need to auto set data
mongoose.connection
  .on('connected', () => {
    console.log(
      `Mongoose connection open on mongodb://${SERVER_AND_PORT}/tasks`,
    );
  })
  .on('error', err => {
    console.log(`Connection error: ${err.message}`);
  });


app.listen(3001, () => {
  console.debug('Backend has started on port 3001');
});

// log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', '*');

  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TASKS
app.get('/api/tasks', getAllTasksAction);
app.get('/api/task/:id', getTaskByIdAction);
app.post('/api/task/', addTaskAction);
app.put('/api/task', updateTaskAction);
app.delete('/api/task/:id', deleteTaskByIdAction);
app.delete('/api/tasks', deleteAllTaskAction);

// TAGS
app.get('/api/tags', getAllTagsAction);
app.get('/api/tag/:id', getTagByIdAction);
app.post('/api/tag', addTagAction);
app.put('/api/tag', editTagAction);
app.delete('/api/tag/:id', deleteTagAction);