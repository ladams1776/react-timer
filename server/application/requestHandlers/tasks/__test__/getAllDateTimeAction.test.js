const TaskService = require('../../../../domain/services/tasks/TaskService');
const getAllDateTimeAction = require('../getAllDateTimeAction');

jest.mock('../../../../domain/services/tasks/TaskService');

describe('getAllDateTimeAction.test.js', () => {
  it('should call TaskService.fetchAllDateTimeOfTask() and return in response', async () => {
    // Arrange
    const req = {
      params: {
        taskId: 'taskID'
      }
    }
    const response = {
      jsonp: jest.fn(),
    };
    const dateTimes = [{ _id: 1 }];

    TaskService.fetchAllDateTimeOfTask = jest.fn().mockImplementation(() => dateTimes);

    // Act
    await getAllDateTimeAction(req, response);

    // Assert
    expect(TaskService.fetchAllDateTimeOfTask).toHaveBeenCalledTimes(1);
    expect(response.jsonp).toHaveBeenNthCalledWith(1, dateTimes);
  });
});
