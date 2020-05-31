import { fetchApiData, getFormattedDate } from 'utils';
import { useTagContext, useTimeContext, useFormDispatch } from '..';
import hydrateTaskFromEvent from './hydrateTaskFromEvent';

const useSubmit = () => {
  const dispatch = useFormDispatch();
  const { tags } = useTagContext();
  const { time } = useTimeContext();

  const onSubmit = event => {
    const dateFormatted = getFormattedDate(new Date());

    //@TODO: Left off here, abstracting this out
    const timeTask = hydrateTaskFromEvent(event, dateFormatted, time, tags);

    //@TODO: Need to test this
    const method = event.id ? 'PUT' : 'POST';

    fetchApiData('task', { body: timeTask, method }, dispatch);
  };

  return onSubmit;
};

export default useSubmit;
