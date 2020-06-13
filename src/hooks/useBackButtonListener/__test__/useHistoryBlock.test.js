import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useBrowserHistory from '../../useBrowserHistory';
import checkToMakeSureUserWantsToLeave from '../checkToMakeSureUserWantsToLeave';
import useHistoryBlock from '../useHistoryBlock';

jest.mock('../../useBrowserHistory');
jest.mock('../checkToMakeSureUserWantsToLeave');

describe('src/hooks/useBackButtonListener/__test__/useHistoryBlock.test.js', () => {
  describe('useHistoryBlock', () => {
    // Arrange
    const history = {
      push: jest.fn(),
      block: jest.fn(),
    };

    beforeEach(() => {
      useBrowserHistory.mockReturnValue(history);
    });

    it("should call 'history.block()', with 'checkToMakeSureUserWantsToLeave'", () => {
      // Arrange
      const history = {
        push: jest.fn(),
        block: jest.fn(),
      };
      useBrowserHistory.mockReturnValue(history);

      // Act
      const { result } = renderHook(() => useHistoryBlock('/'));
      act(() => result.current());

      // Assert
      expect(history.block).toHaveBeenNthCalledWith(
        1,
        checkToMakeSureUserWantsToLeave(location),
      );
    });
  });
});
