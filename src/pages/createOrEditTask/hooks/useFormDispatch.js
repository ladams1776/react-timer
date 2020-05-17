import {
    useTaskEditContext,
    useFlashMessageContext
} from 'hooks';

const useFormDispatch = (history) => {
    const { updateTask } = useTaskEditContext();
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();

    //@TODO: Left off here.
    return data => {
        if (data._id) {
            setSuccessFlashMessage('Successfully Added/Edited a Task');
        } else {
            setErrorFlashMessage('Failed to Add/Edit a Task')
        }

        history.push(`/task/${data._id}`);
        updateTask(data);
    };
};

export default useFormDispatch;