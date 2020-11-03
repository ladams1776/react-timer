const mongoose = require('mongoose');
const moment = require('moment-timezone');

const timeZone = moment.tz(Date.now(), "America/New_York");


const TaskSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  date: {
    type: Date,
    default: timeZone
  },
  description: {
    type: String,
    trim: true,
  },
  contractId: {
    type: Number,
  },
  time: [{ date: { type: Date, default: timeZone }, time: { type: Number } }],
  tags: [],
});

const Task = mongoose.model('tasks', TaskSchema);

module.exports = Task;
