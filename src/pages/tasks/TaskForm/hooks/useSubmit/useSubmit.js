import { fetchApiData, getCurrentDateTimeEstFormat } from 'utils';
import { useTimeContext, useFormDispatch, useTagContext } from '..';
import useTaskEditContext from '../../../hooks/useTaskEditContext';
import hydrateTaskForm from './hydrateTaskForm';

const useSubmit = () => {
  const { allTags } = useTagContext();
  const { dispatchTask } = useTaskEditContext();
  const formDispatch = useFormDispatch(dispatchTask);
  const { time } = useTimeContext();

  return ({ _id,  description, project, tags }) => {
    const dateFormatted = getCurrentDateTimeEstFormat();
    const timeTask = hydrateTaskForm(_id, allTags, project, description, dateFormatted, time, tags);
    const method = _id ? 'PUT' : 'POST';
    fetchApiData('task', { body: timeTask, method }, formDispatch);
  };
};

export default useSubmit;
