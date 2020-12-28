import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTaskById } from '../../../../../redux/actionCreators/actions';


const useFetchTaskByIdTransition = (taskId) => {
  const dispatch = useDispatch();

  return useEffect(() => {
    dispatch(fetchTaskById(taskId))
  }, [taskId]);
};

export default useFetchTaskByIdTransition;
