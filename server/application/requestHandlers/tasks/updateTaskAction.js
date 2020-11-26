const TaskService = require('../../../domain/services/tasks/TaskService');
const jsonResponse = require('../jsonResponse');
const RequestToTaskDto = require('./assemblers/RequestToTaskDto');

module.exports = async (req, res) => {
    const response = jsonResponse(res);
    const incomingDto = RequestToTaskDto(req);
    TaskService.updateTask(incomingDto, response);
}