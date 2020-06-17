import { renderHook } from '@testing-library/react-hooks';
import useBackButtonListener from '../useBackButtonListener';
import useHistoryBlock from '../useHistoryBlock';

jest.mock('../useHistoryBlock');

describe('src/hooks/__test__/useBackButtonListener.test.js', () => {
  describe('#useBackButtonListener', () => {
    window.addEventListener = jest.fn().mockImplementation();

    beforeEach(() => {
      window.addEventListener.mockReset();
    });

    it("should invoke 'window.addEventListener()' with 'popstate' and dispatch", () => {
      // Arrange
      const dispatchSpy = jest.fn();
      useHistoryBlock.mockReturnValue(dispatchSpy);

      // Act
      renderHook(() => useBackButtonListener());

      // Assert
      expect(window.addEventListener).toHaveBeenCalledWith(
        'popstate',
        dispatchSpy,
      );
    });
  });
});
