import { fetchApiData } from 'utils';
import { useTimeContext } from '..';
import hydrateTaskForm from './hydrateTaskForm';
import { useTagContext } from '..'
import useTaskEditContext from '../../../hooks/useTaskEditContext';

/**
 * We want to save the task, when we navigate away from editing it, automatically.
 * But we do not want to save the task if it is a new one (denoted with '-1') 
 */
const useUpdateWhenLeave = () => {
    const { time } = useTimeContext();
    const { state } = useTaskEditContext();
    const { allTags } = useTagContext();

    const onSubmit = () => {
        const location = sessionStorage.getItem('LOCATION');
        const dispatch = () => { };
        const dateFormatted = new Date();
        const { id, project, tags, description } = state;
        const timeTask = hydrateTaskForm(id, allTags, project, description, dateFormatted, time, tags);
        const method = state.id ? 'PUT' : 'POST';

        /* We do not want to save the task if the task is a "new task."
         *  Something that has not even been saved yet, no need to make a call
         *  to save a task, we are leaving, if the task is not even going to be 
         *  in the database.
        */
        const isNotFromNewNote = location.indexOf("-1") === -1;
        if (state.id !== -1 && isNotFromNewNote) {
            fetchApiData('task', { body: timeTask, method }, dispatch);
        }
    };

    return onSubmit
};

export default useUpdateWhenLeave;