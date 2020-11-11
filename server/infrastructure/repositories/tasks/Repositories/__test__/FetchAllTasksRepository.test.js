const FetchAllTasksRepository = require('../FetchAllTasksRepository');
const Task = require('../../../../models/Task');
const hydrate = require('../../../../hydrators/hydrate');

describe('server/infrastructure/repositories/tasks/Repositories/__test__/FetchAllTasksRepository.test.js', () => {
    describe('FetchAllTasksRepository', () => {
        // Arrange
        beforeEach(() => {
            jest.mock('../../../../models/Task');
            jest.mock('../../../../hydrators/hydrate');
        });

        it('', () => {
            // Arrange
            const tasks = [{ _id: 1 }];
            Task.find = jest.fn().mockImplementation(() => tasks);

            // Act
            const target = FetchAllTasksRepository();

            // Assert
            expect(target).toEqual(tasks);
            expect(Task.find).toBeCalledWith({}, hydrate);
        });
    });
});