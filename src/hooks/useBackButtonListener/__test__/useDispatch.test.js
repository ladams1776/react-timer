import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useDispatch from '../useDispatch';

jest.mock('hooks/useFlashMessageContext');

describe('src/hooks/useBackButtonListener/__test__/useDispatch.test.js', () => {
    describe('useDispatch', () => {
        it("should call 'history.push()', when 'acton' is set to 'PUSH'", () => {
            // Arrange
            const history = { action: 'PUSH', push: jest.fn() };
            document.title = 'Title';

            // Act
            const { result } = renderHook(() => useDispatch(history));
            act(() => result.current());

            // Assert
            expect(history.push).toHaveBeenNthCalledWith(1, null, 'Title', 'http://localhost/');
        });

        it("should call not 'history.push()', when 'acton' is set to anything other than 'PUSH'", () => {
            // Arrange
            const history = { action: 'NOT_PUSH', push: jest.fn() };
            document.title = 'Title';

            // Act
            const { result } = renderHook(() => useDispatch(history));
            act(() => result.current());

            // Assert
            expect(history.push).not.toHaveBeenCalled()
        });
    });
});