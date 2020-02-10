import { renderHook } from '@testing-library/react-hooks';
import useBackButtonListener from '../useBackButtonListener';
import useBackButtonlistener from '../useBackButtonListener';

describe('src/hooks/__test__/useBackButtonListener.test.js', () => {
    //@TODO: LEFT OFF HERE
    // 1. Gert the comment wording correct
    // 2. Get the correct function for the second test

    describe('#useBackButtonListener', () => {
        global.onpopstate = jest.fn();
        it("should call 'replace' on 'history', if 'history's action is 'POP'", () => {
            const history = { replace: jest.fn(), action: 'POP' };

            const { result } = renderHook(() => useBackButtonlistener(history));
            global.onpopstate();
            expect(history.replace).toHaveBeenNthCalledWith(1, '/');
        });

        it("should not call 'replace' on 'history', if 'history's action is not 'POP'", () => {
            const history = { replace: jest.fn(), action: 'NOT_POP' };

            const { result } = renderHook(() => useBackButtonlistener(history));
            global.onpopstate();
            expect(history.replace).not.toHaveBeenCalled();
        });
    });
});