import { renderHook } from '@testing-library/react-hooks';
import useBackButtonListener from '../useBackButtonListener';
import useDispatch from '../useDispatch';

jest.mock('../useDispatch');

describe('src/hooks/__test__/useBackButtonListener.test.js', () => {
    describe('#useBackButtonListener', () => {
        window.addEventListener = jest.fn().mockImplementation();

        beforeEach(() => {
            window.addEventListener.mockReset();
        });

        it("should invoke 'window.addEventListener()' with 'popstate' and dispatch", () => {
                // Arrange
                const dispatchSpy = jest.fn();
                useDispatch.mockReturnValue(dispatchSpy);

                // Act
                renderHook(() => useBackButtonListener());

                // Assert
                expect(window.addEventListener).toHaveBeenCalledWith('popstate', dispatchSpy);
            });
    });
});