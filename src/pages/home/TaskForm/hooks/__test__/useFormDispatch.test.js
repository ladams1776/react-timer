import { renderHook } from '@testing-library/react-hooks';
import {
    useFlashMessageContext
} from 'hooks';
import useFormDispatch from '../useFormDispatch';
import useBrowserHistory from 'hooks/useBrowserHistory';

jest.mock('hooks/useFlashMessageContext');
jest.mock('hooks/useBrowserHistory');

describe('src/pages/createOrEditTask/hooks/__test__/useFormDispatch.test.js', () => {
    describe('useFormDispatch', () => {
        // Arrange
        const dispatchSpy = jest.fn();
        const flashMessageContext = {
            setSuccessFlashMessage: jest.fn(),
            setErrorFlashMessage: jest.fn(),
        };

        const historyMock = {
            push: jest.fn(),
        };
        beforeEach(() => {
            dispatchSpy.mockReset();

            flashMessageContext.setSuccessFlashMessage.mockReset();
            flashMessageContext.setErrorFlashMessage.mockReset();
            historyMock.push.mockReset();

            useFlashMessageContext.mockReturnValue(flashMessageContext);
            useBrowserHistory.mockReturnValue(historyMock);
        });

        it('should update task with data, with _id will set Success Flash Message', () => {
            // Arrange
            const expected = {
                _id: 123
            };

            // Act
            const { result } = renderHook(() => useFormDispatch(dispatchSpy));
            result.current(expected);

            // Assert
            expect(dispatchSpy).toHaveBeenNthCalledWith(1, expected);
            expect(flashMessageContext.setSuccessFlashMessage).toHaveBeenNthCalledWith(1, 'Successfully Added/Edited a Task');
            expect(historyMock.push).toHaveBeenNthCalledWith(1, `/task/${expected._id}`);
        });

        it('should update task with data, without _id will set Error Flash Message', () => {
            // Arrange
            const expected = {
                id: 123
            };

            // Act
            const { result } = renderHook(() => useFormDispatch(dispatchSpy));
            result.current(expected);

            // Assert
            expect(dispatchSpy).toHaveBeenNthCalledWith(1, expected);
            expect(flashMessageContext.setErrorFlashMessage).toHaveBeenNthCalledWith(1, 'Failed to Add/Edit a Task');
            expect(historyMock.push).toHaveBeenNthCalledWith(1, `/task/${expected._id}`);
        });
    });
});