import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTaskById } from 'redux/actionCreators/actions';


const useFetchTaskByIdDispatch = (taskId) => {
  const dispatch = useDispatch();

  return useEffect(() => {
    dispatch(fetchTaskById(taskId))
  }, [taskId, dispatch]);
};

export default useFetchTaskByIdDispatch;
