const FETCH_TASK_BY_ID_RESPONSE = require('../reduxTypes');
const TaskService = require('../../../domain/services/tasks/TaskService');
const apiResponse = require('../apiResponse');
const RequestToTaskDto = require('./assemblers/RequestToTaskDto');

module.exports = async (req, res) => {
    const response = apiResponse(res, FETCH_TASK_BY_ID_RESPONSE);
    const incomingDto = RequestToTaskDto(req);
    TaskService.updateTask(incomingDto, response);
};