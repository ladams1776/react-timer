import useBrowserHistoryPush from 'hooks/useBrowserHistoryPush';
import {
    useTaskEditContext,
    useFlashMessageContext
} from 'hooks';

const useFormDispatch = () => {
    const push = useBrowserHistoryPush();
    const { updateTask } = useTaskEditContext();
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();

    return data => {
        if (data._id) {
            setSuccessFlashMessage('Successfully Added/Edited a Task');
        } else {
            setErrorFlashMessage('Failed to Add/Edit a Task')
        }

        updateTask(data);
        push(`/task/${data._id}`);
    };
};

export default useFormDispatch;