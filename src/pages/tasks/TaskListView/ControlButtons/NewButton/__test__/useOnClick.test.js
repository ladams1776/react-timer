import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { getCurrentDateTimeEstFormat } from 'utils';
import useBrowserHistory from 'hooks/useBrowserHistory';
import fetchApiData from 'utils/api/fetchApiData/fetchApiData';
import hydrateTaskForm from '../../../../TaskForm/hooks/useSubmit/hydrateTaskForm';
import useOnClick from '../useOnClick';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('hooks/useBrowserHistory');
jest.mock('../../../../TaskForm/hooks/useSubmit/hydrateTaskForm');

describe('useOnClick', () => {
    it('should return onClick function and when invoked should invoke fetchApiData and hydrateTaskForm', () => {
        // Arrange
        const push = jest.fn();
        useBrowserHistory.mockImplementationOnce(() => push);

        const emptyTask = { id: 'emptyTaskID' };
        hydrateTaskForm.mockImplementationOnce(() => emptyTask);

        fetchApiData.mockImplementationOnce();

        // Act
        const { result } = renderHook(() => useOnClick());
        act(() => result.current());

        // Assert
        expect(hydrateTaskForm).toBeCalledWith(-1, [], 0, "", getCurrentDateTimeEstFormat(), 0, []);
        expect(fetchApiData).toBeCalledWith('task', { body: emptyTask, method: 'POST'}, expect.anything());
    });
});