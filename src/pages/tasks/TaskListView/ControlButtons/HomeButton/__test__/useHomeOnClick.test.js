import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useBrowserHistory from 'hooks/useBrowserHistory';
import useHomeOnClick, { URL } from '../useHomeOnClick';

jest.mock('hooks/useBrowserHistory');

describe('src/pages/tasks/TaskListView/ControlButtons/HomeButton/__test__/useHomeOnClick', () => {
    describe('useHomeOnClick', () => {
        it('should', () => {
            // Arrange
            const push = jest.fn();
            useBrowserHistory.mockReturnValue({ push })
            const setItem = jest.spyOn(Storage.prototype, 'setItem')

            // Act
            const { result } = renderHook(() => useHomeOnClick());
            act(() => result.current());

            // Assert
            expect(setItem).toBeCalledWith('LOCATION', URL);
            expect(push).toBeCalledWith(URL);
        });
    });
});