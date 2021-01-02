import { renderHook, act } from '@testing-library/react-hooks';
import useFetchTaskById from '../useFetchTaskById';

import useTimeContext from '../../useTimeContext';
import useDispatch from '../useDispatch';
import useFlashMessageFetchApiData from 'utils/api/useFlashMessageFetchApiData';

jest.mock('../../useTimeContext');
jest.mock('../useDispatch');
jest.mock('utils/api/useFlashMessageFetchApiData');

describe('useFetchTaskById', () => {
  it("should call fetchApiData, when taskId is anything but '-1'", () => {
    // Arrange
    const taskId = 1;
    const dispatchTaskSpy = jest.fn();
    const setTimeSpy = jest.fn();
    const fetchApiDataSpy = jest.fn();

    useTimeContext.mockImplementationOnce(() => setTimeSpy);
    useDispatch.mockImplementationOnce(() => dispatchTaskSpy);
    useFlashMessageFetchApiData.mockImplementationOnce(() => fetchApiDataSpy);
    
    // Act
    const { result } = renderHook(() => useFetchTaskById(taskId, dispatchTaskSpy));
    act(() => result.current);

    // Assert
    expect(fetchApiDataSpy).toHaveBeenCalled();
    expect(dispatchTaskSpy).not.toHaveBeenCalled();
  });

  it("should not call fetchApiData(), when taskId is '-1'", () => {
    // Arrange
    const taskId = -1;
    const dispatchTaskSpy = jest.fn();
    const setTimeSpy = jest.fn();
    const fetchApiDataSpy = jest.fn();

    useTimeContext.mockImplementationOnce(() => setTimeSpy);
    useDispatch.mockImplementationOnce(() => dispatchTaskSpy);
    useFlashMessageFetchApiData.mockImplementationOnce(() => fetchApiDataSpy);

    // Act
    const { result } = renderHook(() => useFetchTaskById(taskId, dispatchTaskSpy));
    act(() => result.current);

    // Assert
    expect(dispatchTaskSpy).toHaveBeenCalled();
    expect(fetchApiDataSpy).not.toHaveBeenCalled();
  });
});