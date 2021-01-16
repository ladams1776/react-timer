const jsonResponse = require('../jsonResponse');
const apiResponse = require('../apiResponse');

const TaskService = require('../../../domain/services/tasks/TaskService');

const UPDATE_DATE_TIME_RESPONSE = require('../reduxTypes');




module.exports = (req, res) => {

    const feature = false;
    const responder = getFeatureResonse(feature, res);
    
    const id = req.params.taskId;
    const dateTime = req.body;
    
    const updatedTaskWithDateTime = TaskService.updateDateTimeOfTask(id, dateTime);
    responder(updatedTaskWithDateTime);
};


const getFeatureResonse = (feature, res) => {
    if (feature) {
        return apiResponse(res, UPDATE_DATE_TIME_RESPONSE);
    } else {
        return jsonResponse(res);
    }
}