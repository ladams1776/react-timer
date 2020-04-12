import { renderHook, act } from '@testing-library/react-hooks';
import useFadeOutFlashMessage from '../useFadeOutFlashMessage';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
jest.mock('hooks/useFlashMessageContext');

describe('src/hooks/__test__/useFadeOutFlashMessage.test.js', () => {
  describe('#useFadeOutFlashMessage', () => {
    const resetFlashMessage = jest.fn();

    beforeEach(() => {
      jest.useFakeTimers();
      resetFlashMessage.mockClear();
    });

    it("should call resetFlashMessage if 'error' is false", () => {
      const message = 'message for the flash message';
      const error = false;

      const useFlashMessageContextStub = {
        resetFlashMessage,
        message,
        error
      };

      useFlashMessageContext.mockReturnValue(useFlashMessageContextStub);
      renderHook(() => useFadeOutFlashMessage());
      jest.runAllTimers();

      expect(global.setTimeout).toHaveBeenCalled();
      expect(resetFlashMessage).toHaveBeenCalled();
    });

    it("should not call resetFlashMessage if 'error' is true", () => {
      const message = 'message for the flash message';
      const error = true;

      const useFlashMessageContextStub = {
        resetFlashMessage,
        message,
        error
      };

      useFlashMessageContext.mockReturnValue(useFlashMessageContextStub);
      renderHook(() => useFadeOutFlashMessage());
      jest.runAllTimers();

      expect(global.setTimeout).not.toHaveBeenCalled();
      expect(resetFlashMessage).not.toHaveBeenCalled();
    });
  });
});
