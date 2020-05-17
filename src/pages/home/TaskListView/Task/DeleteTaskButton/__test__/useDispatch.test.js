import { renderHook } from '@testing-library/react-hooks';
import { useFlashMessageContext } from 'hooks';
import useDispatch from '../useDispatch';
import { act } from 'react-dom/test-utils';

jest.mock('hooks/useFlashMessageContext');

describe('src/pages/home/TaskListView/Task/DeleteTaskButton/__test__/useDispatch.test.js', () => {
    describe('useDispatch', () => {
        // Arrange

        // flash message context
        const flashMessageContextMock = {
            setSuccessFlashMessage: jest.fn()
        };

        beforeEach(() => {
            useFlashMessageContext.mockReturnValue(flashMessageContextMock);
            window.location.reload = jest.fn();
        });

        it('should return a function that when called will fire off the 3 methods with the correct args', () => {
            // Arrange
            const taskId = 1;

            // Act
            const { result } = renderHook(() => useDispatch(taskId));
            act(() => result.current());

            // Assert
            expect(flashMessageContextMock.setSuccessFlashMessage).toHaveBeenNthCalledWith(1, `Successfully Deleted Task with id of ${taskId}`);
            expect(window.location.reload).toHaveBeenCalledTimes(1);
        });
    });
});