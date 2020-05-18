import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useBrowserHistoryPush from 'hooks/useBrowserHistoryPush';
import useDispatch from '../useDispatch';

jest.mock('hooks/useFlashMessageContext');
jest.mock('hooks/useBrowserHistoryPush');

describe('src/hooks/useBackButtonListener/__test__/useDispatch.test.js', () => {
    describe('useDispatch', () => {
        document.title = 'Title';
        
        it("should call 'history.push()', when 'acton' is set to 'POP'", () => {
            // Arrange
            const history = {
                action: 'POP',
                push: jest.fn()
            }
            useBrowserHistoryPush.mockReturnValue(history);

            // Act
            const { result } = renderHook(() => useDispatch());
            act(() => result.current());

            // Assert
            expect(history.push).toHaveBeenNthCalledWith(1, null, 'Title', 'http://localhost/');
        });

        it("should call not 'history.push()', when 'acton' is set to anything other than 'PUSH'", () => {
            // Arrange
            const history = {
                action: 'NOT_POP',
                push: jest.fn()
            }
            useBrowserHistoryPush.mockReturnValue(history);

            // Act
            const { result } = renderHook(() => useDispatch(history));
            act(() => result.current());

            // Assert
            expect(history.push).not.toHaveBeenCalled()
        });
    });
});