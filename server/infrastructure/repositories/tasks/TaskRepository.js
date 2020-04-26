const Task = require('../../models/Task');
const hydrateTasks = require('../../hydrators/tasks/hydrateTasks');

const TaskRepository = {
    fetchAllTask: async () => await Task.find({}, hydrateTasks),
    fetchTaskById: async taskId => await Task.findById(taskId, hydrateTasks)
}

module.exports = TaskRepository;