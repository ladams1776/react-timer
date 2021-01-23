import { useDispatch } from 'react-redux';
import { getCurrentDateTimeEstFormat } from 'utils';
import { useTimeContext, useTagContext } from '..';
import { putTaskById } from 'redux/actionCreators/actions';
import hydrateTaskForm from './hydrateTaskForm';

interface taskDtoInterface {
  _id: string;
  description: string;
  project: string;
  tags: any[];
}
const useSubmit = (): ((task: taskDtoInterface) => void) => {
  const { allTags } = useTagContext();
  const dispatch = useDispatch();
  const { time } = useTimeContext();

  return (task: taskDtoInterface): void => {
    const { _id, description, project, tags } = task;
    const dateFormatted = getCurrentDateTimeEstFormat();
    const timeTask = hydrateTaskForm(_id, allTags, project, description, dateFormatted, time, tags);
    dispatch(putTaskById(timeTask));
  };
};

export default useSubmit;
