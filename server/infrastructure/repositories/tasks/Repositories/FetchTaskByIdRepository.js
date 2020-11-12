const Task = require('../../../models/Task');

const FetchTaskByIdRepository = async (taskId, callback) => {
  if (taskId == undefined) {
    callback('');
  } else {
    const doc = await Task.findById(taskId);
    const task = {};
    task._id = doc?._id;
    task.description = doc.description;
    task.tags = doc.tags;
    task.date = doc.date;
    task.contractId = doc.contractId || '';

    task.time = doc.time
      .map(a => parseInt(a.time))
      .reduce((a, b) => a + b);

    task.dateTimes = doc.time
      .map(dateTime => {
        const date = dateTime.date;
        const id = dateTime._id;
        const time = millisToMinutesAndSeconds(dateTime.time);
        return { id, date, time };
      });

    if (callback) {
      callback(task);
    } else {
      return task;
    }
  }
};

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  //ES6 interpolated literals/template literals 
  //If seconds is less than 10 put a zero in front.
  return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

module.exports = FetchTaskByIdRepository;
