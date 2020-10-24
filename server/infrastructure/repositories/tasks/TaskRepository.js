const Task = require('../../models/Task');
const hydrate = require('../../hydrators/hydrate');

const TaskRepository = {
  fetchAllTask: () => Task.find({}, hydrate),
  fetchTaskById: async (taskId, callback) => {
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

      task.dateTime = doc.time
        .map(dateTime => {
          const date = dateTime.date?.toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');

          const time = millisToMinutesAndSeconds(dateTime.time);
          return { date, time };
        });

      callback(task);
    }
  },
};

const millisToMinutesAndSeconds = (millis) => {
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  //ES6 interpolated literals/template literals 
  //If seconds is less than 10 put a zero in front.
  return `${hours}:${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

module.exports = TaskRepository;
