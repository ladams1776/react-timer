import { useBrowserHistory } from 'hooks';
import { fetchApiData, getCurrentDateTimeEstFormat } from 'utils';
import hydrateTaskForm from '../../../TaskForm/hooks/useSubmit/hydrateTaskForm';

const useOnClick = () => {
    const { push } = useBrowserHistory();

    return () => {
        const emptyTask = hydrateTaskForm(-1, [], 0, '', getCurrentDateTimeEstFormat(), 0, []);
        const dispatch = data => {
            push(`/task/${data._id}`);
            window.location.reload();
        }

        fetchApiData('task', { body: emptyTask, method: 'POST' }, dispatch);
    };
};

export default useOnClick;