const TaskService = require("../../../../domain/services/tasks/TaskService");
const jsonResponse = require("../../jsonResponse");
const RequestToTaskDto = require("../assemblers/RequestToTaskDto");
const updateTaskAction = require("../updateTaskAction");

jest.mock("../../jsonResponse");
jest.mock("../assemblers/RequestToTaskDto");

describe('updateTaskAction', () => {
    it('should invoke TaskService.updateTask, when action invoked', () => {
        // Arrange
        const req = { id: 'reqID' };
        const resSpy = jest.fn();
        const incomingDto = { id: 'incomingDto' };
        jsonResponse.mockImplementationOnce(() => resSpy);
        RequestToTaskDto.mockImplementationOnce(() => incomingDto);
        TaskService.updateTask = jest.fn();
        
        // Act
        updateTaskAction(req, resSpy);

        // Assert
        expect(jsonResponse).toBeCalledWith(resSpy);
        expect(RequestToTaskDto).toBeCalledWith(req);
        expect(TaskService.updateTask).toBeCalledWith(incomingDto, resSpy);
    });
});