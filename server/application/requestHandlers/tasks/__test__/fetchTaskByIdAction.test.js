const fetchTaskByIdAction = require('../fetchTaskByIdAction');
const TaskService = require('../../../../domain/services/tasks/TaskService');
const apiResponse = require('../../apiResponse');

jest.mock('../../../../domain/services/tasks/TaskService');
jest.mock('../../apiResponse');

describe('server/application/requestHandlers/tasks/__test__/fetchTaskByIdAction.test.js', () => {

  describe('fetchTaskByIdAction', () => {
    it('should call TaskService.fetchTaskById() and return in res.jsonp()', async () => {
      // Arrange
      const resSpy = jest.fn();
      const request = {
        params: {
          id: 1,
        },
      };
      const expected = [{ _id: 1 }];
      apiResponse.mockImplementation(() => resSpy);
      TaskService.fetchTaskById = jest.fn().mockImplementation(() => expected);

      // Act
      await fetchTaskByIdAction(request, resSpy);

      // Assert
      expect(TaskService.fetchTaskById)
        .toHaveBeenNthCalledWith(1, request.params.id,);

      expect(resSpy)
        .toHaveBeenNthCalledWith(1, expected);
    });
  });
});
