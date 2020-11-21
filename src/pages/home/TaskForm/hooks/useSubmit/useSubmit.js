import { useCallback } from 'react';
import { fetchApiData, getCurrentDateTimeEstFormat } from 'utils';
import { useTimeContext, useFormDispatch } from '..';
import useTaskEditContext from '../../../hooks/useTaskEditContext';
import hydrateTaskForm from './hydrateTaskForm';

const useSubmit = (allTags) => {
  const { state, dispatch } = useTaskEditContext();
  const formDispatch = useFormDispatch(dispatch);
  const { time } = useTimeContext();

  const onSubmit = useCallback(() => {
    const dateFormatted = getCurrentDateTimeEstFormat();

    const payload = {
      project: state.project,
      dateFormatted: dateFormatted,
      time,
      tagSelectedOption: state.tags,
      description: state.description,
    };
    const timeTask = hydrateTaskForm(state, allTags, payload);

    const method = state.id ? 'PUT' : 'POST';

    fetchApiData('task', { body: timeTask, method }, formDispatch);
  }, [allTags, formDispatch, state, time]);



  return onSubmit;
};

export default useSubmit;
