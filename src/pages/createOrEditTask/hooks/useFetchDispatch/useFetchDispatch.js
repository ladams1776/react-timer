import { useCallback } from 'react';
import { useTimeContext } from '..';
import taskIdDispatch from './taskIdDispatch';

const useFetchDispatch = updateTask => {
  const { setTime } = useTimeContext();

  const dispatch = useCallback(
    data => taskIdDispatch(setTime, updateTask)(data),
    [setTime, updateTask],
  );

  return dispatch;
};

export default useFetchDispatch;