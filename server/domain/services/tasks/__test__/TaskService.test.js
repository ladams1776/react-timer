const TaskService = require('../TaskService');
const FetchAllTasksRepository = require('../../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
const FetchTaskByIdRepository = require('../../../../infrastructure/repositories/tasks/Repositories/FetchTaskByIdRepository');
const UpdateDateTimeRepository = require('../../../../infrastructure/repositories/tasks/Repositories/UpdateDateTimeRepository');

jest.mock('../../../../infrastructure/repositories/tasks/Repositories/FetchAllTasksRepository');
jest.mock('../../../../infrastructure/repositories/tasks/Repositories/FetchTaskByIdRepository');
jest.mock('../../../../infrastructure/repositories/tasks/Repositories/UpdateDateTimeRepository');

describe('server/domain/services/tasks/__test__/TaskService.test.js', () => {
  describe('TaskService', () => {
    // Arrange
    const tasks = [{ _id: 1 }];

    it('should call FetchAllTasksRepository(), when TaskService.fetchAllTask() is called.', () => {
      // Arrange
      FetchAllTasksRepository.mockImplementation(() => tasks);

      // Act
      const actual = FetchAllTasksRepository();

      // Assert
      expect(FetchAllTasksRepository).toHaveBeenCalledTimes(1);
      expect(actual).toEqual(tasks);
    });

    it('should call FetchTaskByIdRepository(), when TaskService.fetchTaskById() is called.', async () => {
      // Arrange
      const task = { _id: 1 }

      FetchTaskByIdRepository.mockImplementation(() => task);

      // Act
      const actual = await TaskService.fetchTaskById(task._id);

      // Assert
      expect(FetchTaskByIdRepository).toHaveBeenCalledWith(task._id);
      expect(actual).toEqual(task);
    });

    it('should call UpdateDateTimeRepository', () => {
      // Arrange
      const taskId = 'taskId';
      const dateTime = { _id: 'dateTimeID' };
      UpdateDateTimeRepository.mockImplementation();

      // Act
      TaskService.updateDateTimeOfTask(taskId, dateTime);
      
      // Assert
      expect(UpdateDateTimeRepository).toBeCalledWith(taskId, dateTime); 
    });
  });

});