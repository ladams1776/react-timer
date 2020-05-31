const TaskService = require('../../../../domain/services/tasks/TaskService');
const getTaskByIdAction = require('../getTaskByIdAction');

jest.mock('../../../../domain/services/tasks/TaskService');

describe('server/application/requestHandlers/tasks/__test__/getTaskByIdAction.test.js', () => {
  // Arrange

  describe('getTaskByIdAction', () => {
    it('should call TaskService.fetchTaskById() and return in res.jsonp()', async () => {
      // Arrange
      const response = {
        jsonp: jest.fn(),
      };
      const request = {
        params: {
          id: 1,
        },
      };
      const tasks = [{ _id: 1 }];

      TaskService.fetchTaskById = jest.fn().mockImplementation(() => tasks);
      jest.spyOn(TaskService, 'fetchTaskById');

      // Act
      await getTaskByIdAction(request, response);

      // Assert
      expect(TaskService.fetchTaskById).toHaveBeenNthCalledWith(
        1,
        request.params.id,
      );
      expect(response.jsonp).toHaveBeenNthCalledWith(1, tasks);
    });
  });
});
