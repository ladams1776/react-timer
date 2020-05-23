const TaskService = require("../TaskService");
const TaskRepository = require('../../../../infrastructure/repositories/tasks/TaskRepository');

jest.mock('../../../../infrastructure/repositories/tasks/TaskRepository');

describe("server/domain/services/tasks/__test__/TaskService.test.js", () => {
    // Arrange 

    describe("TaskService", () => {
        // Arrange
        const tasks = [
            { _id: 1 }
        ];
        
        it("should call TaskRepository.fetchAllTask(), when TaskService.fetchAllTask() is called.", async () => {
            // Arrange
            TaskRepository.fetchAllTask = jest.fn().mockImplementation(() => tasks);
            jest.spyOn(TaskRepository, 'fetchAllTask');

            // Act
            const actual = await TaskService.fetchAllTasks();

            // Assert
            expect(TaskRepository.fetchAllTask).toHaveBeenCalledTimes(1);
            expect(actual).toEqual(tasks);
        });

        it("should call TaskRepository.fetchTaskById(), when TaskService.fetchAllTask() is called.", async () => {
            // Arrange
            const taskId = 1;

            TaskRepository.fetchTaskById = jest.fn().mockImplementation(() => tasks);
            jest.spyOn(TaskRepository, 'fetchTaskById');

            // Act
            const actual = await TaskService.fetchTaskById(taskId);

            // Assert
            expect(TaskRepository.fetchTaskById).toHaveBeenCalledTimes(1);
            expect(actual).toEqual(tasks);
        });
    });
});
