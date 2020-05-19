import {
    useTaskEditContext,
    useFlashMessageContext,
    useBrowserHistory
} from 'hooks';

const useFormDispatch = () => {
    const { push } = useBrowserHistory();
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