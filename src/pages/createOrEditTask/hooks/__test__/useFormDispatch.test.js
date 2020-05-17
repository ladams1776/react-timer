import { renderHook } from '@testing-library/react-hooks';
import {
    useTaskEditContext,
    useFlashMessageContext
} from 'hooks';
import useFormDispatch from '../useFormDispatch';

jest.mock('hooks/useTaskEditContext');
jest.mock('hooks/useFlashMessageContext');

describe('src/pages/home/TaskListView/ControlButtons/DownloadButton/__test__/useFormDispatch.test.js', () => {
    describe('useFormDispatch', () => {
        // Arrange

        const taskContextMock = {
            updateTask: jest.fn(),
        };


        const flashMessageContext = {
            setSuccessFlashMessage: jest.fn(),
            setErrorFlashMessage: jest.fn(),
        };

        beforeEach(() => {
            taskContextMock.updateTask.mockReset();
            flashMessageContext.setSuccessFlashMessage.mockReset();
            flashMessageContext.setErrorFlashMessage.mockReset();

            useTaskEditContext.mockReturnValue(taskContextMock);
            useFlashMessageContext.mockReturnValue(flashMessageContext);
        });

        it('should update task with data, with _id will set Success Flash Message', () => {
            // Arrange
            const history = {
                push: jest.fn()
            };

            const expected = {
                _id: 123
            };

            // Act
            const { result } = renderHook(() => useFormDispatch(history));
            result.current(expected);

            // Assert
            expect(history.push).toHaveBeenNthCalledWith(1, `/task/${expected._id}`);
            expect(taskContextMock.updateTask).toHaveBeenNthCalledWith(1, expected);
            expect(flashMessageContext.setSuccessFlashMessage).toHaveBeenNthCalledWith(1, 'Successfully Added/Edited a Task');
        });

        it('should update task with data, without _id will set Error Flash Message', () => {
            // Arrange
            const history = {
                push: jest.fn()
            };

            const expected = {
                id: 123
            };

            // Act
            const { result } = renderHook(() => useFormDispatch(history));
            result.current(expected);

            // Assert
            expect(history.push).toHaveBeenNthCalledWith(1, `/task/${expected._id}`);
            expect(taskContextMock.updateTask).toHaveBeenNthCalledWith(1, expected);
            expect(flashMessageContext.setErrorFlashMessage).toHaveBeenNthCalledWith(1, 'Failed to Add/Edit a Task');
        });
    });
});