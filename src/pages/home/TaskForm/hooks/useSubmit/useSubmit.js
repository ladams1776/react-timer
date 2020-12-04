import { fetchApiData, getCurrentDateTimeEstFormat } from 'utils';
import { useTimeContext, useFormDispatch, useTagContext } from '..';
import useTaskEditContext from '../../../hooks/useTaskEditContext';
import hydrateTaskForm from './hydrateTaskForm';

const useSubmit = () => {
  const { allTags } = useTagContext();
  const { state, dispatchTask } = useTaskEditContext();
  const formDispatch = useFormDispatch(dispatchTask);
  const { time } = useTimeContext();

  return () => {
    const dateFormatted = getCurrentDateTimeEstFormat();
    const { id, project, tags, description } = state;
    const timeTask = hydrateTaskForm(id, allTags, project, description, dateFormatted, time, tags);
    const method = id ? 'PUT' : 'POST';
    fetchApiData('task', { body: timeTask, method }, formDispatch);
  };
};

export default useSubmit;
