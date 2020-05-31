import { useCallback } from 'react';
import { useTaskEditContext } from 'hooks';
import { useTimeContext } from '..';
import taskIdDispatch from './taskIdDispatch';

const useFetchDispatch = () => {
  const { setTime } = useTimeContext();
  const { updateTask } = useTaskEditContext();

  const dispatch = useCallback(
    data => taskIdDispatch(setTime, updateTask)(data),
    [setTime, updateTask],
  );

  return dispatch;
};

export default useFetchDispatch;
