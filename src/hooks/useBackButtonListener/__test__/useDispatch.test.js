import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useBrowserHistory from 'hooks/useBrowserHistory';
import checkToMakeSureUserWantsToLeave from '../checkToMakeSureUserWantsToLeave';
import useDispatch from '../useDispatch';

jest.mock('hooks/useFlashMessageContext');
jest.mock('hooks/useBrowserHistory');
jest.mock('../checkToMakeSureUserWantsToLeave');

describe('src/hooks/useBackButtonListener/__test__/useDispatch.test.js', () => {
    describe('useDispatch', () => {
        document.title = 'Title';

        it("should call 'history.block()', with 'checkToMakeSUreUserWantsToLeave'", () => {
            // Arrange
            const history = {
                push: jest.fn(),
                block: jest.fn(),
            }
            useBrowserHistory.mockReturnValue(history);

            // Act
            const { result } = renderHook(() => useDispatch());
            act(() => result.current());

            // Assert
            expect(history.block).toHaveBeenNthCalledWith(1, checkToMakeSureUserWantsToLeave);
        });
    });
});