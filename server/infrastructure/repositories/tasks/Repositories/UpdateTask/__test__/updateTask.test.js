const { expect } = require("chai");
const Task = require("../../../../../models/Task");
const updateTask = require("../updateTask");

describe('updateTask', () => {
    it('should invoke Task.findOne()', () => {
        // Arrange
        const dto = {id: 1};
        const resSpy = jest.fn();
        const expected = {id: 'expectedID'};
        Task.findOne = jest.fn().mockImplementationOnce(() => expect);

        // Act
        const actual = updateTask(dto, resSpy);
        
        // Assert
        expected(Task.findOne).toBeCalledWith({});
        expect(actual).toEqual(expected);
    });
});