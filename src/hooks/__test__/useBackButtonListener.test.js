import { renderHook } from '@testing-library/react-hooks';
import useBackButtonListener from '../useBackButtonListener';
import useBackButtonlistener from '../useBackButtonListener';

describe('src/hooks/__test__/useBackButtonListener.test.js', () => {
    describe('#useBackButtonListener', () => {
        // Mocking the browser's back function
        global.onpopstate = jest.fn();

        it("should invoke 'replace' on 'history', if 'history's action is 'POP'. " +
            " 'POP' is a react-router convention, adopted by browsers conventions.", () => {
                const history = { replace: jest.fn(), action: 'POP' };

                renderHook(() => useBackButtonlistener(history));
                global.onpopstate();
                expect(history.replace).toHaveBeenNthCalledWith(1, '/');
            });

        it("should not invoke 'replace' on 'history', if 'history's action is not 'POP'", () => {
            const history = { replace: jest.fn(), action: 'NOT_POP' };

            const { result } = renderHook(() => useBackButtonlistener(history));
            global.onpopstate();
            expect(history.replace).not.toHaveBeenCalled();
        });
    });
});