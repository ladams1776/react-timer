import { renderHook } from '@testing-library/react-hooks';
import { useTaskEditContext, useFlashMessageContext, useLoadinSpinnerContext } from 'hooks';
import useDispatch from '../useDispatch';
import { act } from 'react-dom/test-utils';

jest.mock('hooks/useTaskEditContext');
jest.mock('hooks/useFlashMessageContext');
jest.mock('hooks/useLoadinSpinnerContext');

describe('src/pages/home/TaskListView/ControlButtons/DeleteButton/__test__/useDispatch.test.js', () => {
    describe('useDispatch', () => {
        // Arrange
        // task context
        const taskContextMock = {
            updateTasks: jest.fn(),
        };

        // flash message context
        const flashMessageContextMock = {
            setSuccessFlashMessage: jest.fn(),
        };

        // loadin Spinner context
        const loadinSpinnerContextMock = {
            setIsLoadin: jest.fn(),
        };

        beforeEach(() => {
            useTaskEditContext.mockReturnValue(taskContextMock);
            useFlashMessageContext.mockReturnValue(flashMessageContextMock)
            useLoadinSpinnerContext.mockReturnValue(loadinSpinnerContextMock);
        });

        it('should return a function that when called will fire off the 3 methods with the correct args', () => {
            // Arrange
            
            // Act
            const { result } = renderHook(() => useDispatch());
            act(() => result.current());
            
            // Assert
            expect(flashMessageContextMock.setSuccessFlashMessage).toHaveBeenNthCalledWith(1, 'Successfully deleted all tasks');
            expect(taskContextMock.updateTasks).toHaveBeenNthCalledWith(1, []);
            expect(loadinSpinnerContextMock.setIsLoadin).toHaveBeenNthCalledWith(1, false);
        });
    });
});