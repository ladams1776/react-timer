const Task = require('../../models/Task');
const hydrate = require('../../hydrators/hydrate');

const TaskRepository = {
  fetchAllTask: () => Task.find({}, hydrate),
  fetchTaskById: taskId => {
    const t = Task.findById(taskId, hydrate);
    console.log('the task: ', t);
    return { ...t, time: t?.time[0]?.time };
  },
};

module.exports = TaskRepository;
