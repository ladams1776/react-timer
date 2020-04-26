const Task = require('../../models/Task');
const hydrateTasks = require('../../hydrators/tasks/hydrateTasks');

const TaskRepository = {
    fetchAllTask: async () => await Task.find({}, hydrateTasks)
}

module.exports = TaskRepository;