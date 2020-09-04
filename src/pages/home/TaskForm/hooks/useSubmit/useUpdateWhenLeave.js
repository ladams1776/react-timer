import { useCallback } from 'react';
import { fetchApiData, getFormattedDate } from 'utils';
import { useTimeContext } from '..';
import hydrateTaskForm from './hydrateTaskForm';

const useUpdateWhenLeave = (state, allTags, dispatch) => {
    const { time } = useTimeContext();

    const onSubmit = useCallback(() => {
        const dateFormatted = getFormattedDate(new Date());

        const payload = {
            project: state.project,
            dateFormatted,
            time,
            tagSelectedOption: state.tags,
            description: state.description,
        };
        const timeTask = hydrateTaskForm(state, allTags, payload);

        const method = state.id ? 'PUT' : 'POST';

        fetchApiData('task', { body: timeTask, method }, dispatch);
    }, [allTags, dispatch, state, time]);



    return onSubmit;
};

export default useUpdateWhenLeave;
