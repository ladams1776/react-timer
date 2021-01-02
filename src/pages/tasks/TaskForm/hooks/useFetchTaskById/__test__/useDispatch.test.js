import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useDispatchAction from '../useDispatch';

describe('useDispatch.test.js', () => {
    it('should return function that sets time and dispatchs', () => {
        // Arrange
        const setTimeSpy = jest.fn();
        const dispatchTaskSpy = jest.fn();
        const expected = { id: 'dataID', time: 100 };

        // Act
        const { result } = renderHook(() => useDispatchAction(setTimeSpy, dispatchTaskSpy));
        // act(() => result.current(expected));
        act(() => result.current(expected));
        
        // Assert
        expect(dispatchTaskSpy).toBeCalledWith(expected);
        expect(setTimeSpy).toBeCalledWith(expected.time);
    });
});