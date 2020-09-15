import { useCallback } from 'react';
import { fetchApiData, getFormattedDate } from 'utils';
import { useTimeContext } from '..';
import hydrateTaskForm from './hydrateTaskForm';
import { useTagContext } from '../'
import useTaskEditContext from '../../../hooks/useTaskEditContext';

/**
 * We want to save the task, when we navigate away from editing it, automatically.
 * But we do not want to save the task if it is a new one (denoted with '-1') 
 */
const useUpdateWhenLeave = () => {
    const { time } = useTimeContext();
    const { state } = useTaskEditContext();
    const { allTags } = useTagContext();

    const onSubmit = useCallback(() => {
        const location = sessionStorage.getItem('LOCATION');
        const dateFormatted = getFormattedDate(new Date());
        const dispatch = () => { };
        const payload = {
            project: state.project,
            dateFormatted,
            time,
            tagSelectedOption: state.tags,
            description: state.description,
        };
        const timeTask = hydrateTaskForm(state, allTags, payload);

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

    }, [allTags, state, time]);



    return onSubmit
};

export default useUpdateWhenLeave;