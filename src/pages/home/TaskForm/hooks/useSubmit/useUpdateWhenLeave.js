import { useCallback } from 'react';
import { fetchApiData, getFormattedDate } from 'utils';
import { useTimeContext } from '..';
import hydrateTaskForm from './hydrateTaskForm';
import { useTagContext } from '../'
import useTaskEditContext from '../../../hooks/useTaskEditContext';

const useUpdateWhenLeave = () => {
    const { time } = useTimeContext();
    const { state } = useTaskEditContext();
    const { allTags } = useTagContext();

    const onSubmit = useCallback(() => {
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

        if (state.id !== -1) {
            fetchApiData('task', { body: timeTask, method }, dispatch);
        }
    }, [allTags, state, time]);



    return onSubmit
};

export default useUpdateWhenLeave;
