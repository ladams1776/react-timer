import { useDispatch } from 'react-redux';
import { getCurrentDateTimeEstFormat } from 'utils';
import { useTimeContext, useTagContext } from '..';
import { putTaskById } from 'redux/actionCreators/actions';
import hydrateTaskForm from './hydrateTaskForm';

const useSubmit = () => {
  const { allTags } = useTagContext();
  const dispatch = useDispatch();
  const { time } = useTimeContext();

  return ({ _id, description, project, tags }) => {
    const dateFormatted = getCurrentDateTimeEstFormat();
    const timeTask = hydrateTaskForm(_id, allTags, project, description, dateFormatted, time, tags);
    dispatch(putTaskById(timeTask));
  };
};

export default useSubmit;
