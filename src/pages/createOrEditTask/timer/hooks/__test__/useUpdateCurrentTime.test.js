import { renderHook, act } from '@testing-library/react-hooks';
import useUpdateCurrentTime from '../useUpdateCurrentTime';

describe.only('src/hooks/__test__/useUpdateCurrentTime.test.js', () => {
    describe('#useUpdateCurrentTime', () => {
        // Mock the clearInterval the browser provides us.
        global.clearInterval = jest.fn();
        const setTimeSpy = jest.fn();

        beforeEach(() => {
            setTimeSpy.mockClear();
            global.clearInterval.mockClear();
        });

        describe('isActive is false', () => {
            it("should invoke 'clearInterval' wih undefined and 'setTimeSpy' will not be invoked, " +
                "when 'time' is not 0", () => {
                    renderHook(() => useUpdateCurrentTime(1, false, setTimeSpy));
                    expect(clearInterval).toBeCalledWith(undefined);
                    expect(setTimeSpy).not.toBeCalled();
                });
        });



        // it("should not invoke 'clearInterval' when 'isActive' is true", () => {

        //     const { result } = renderHook(() => useUpdateCurrentTime(0, true, setTimeSpy));
        //     expect(setTimeSpy).not.toBeCalled();
        // });
    });
});