import { useHistory } from 'react-router-dom';
import {
    useTaskEditContext,
    useFlashMessageContext
} from 'hooks';

const useFormDispatch = () => {
    const history = useHistory();
    const { updateTask } = useTaskEditContext();
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();

    return data => {
        if (data._id) {
            setSuccessFlashMessage('Successfully Added/Edited a Task');
        } else {
            setErrorFlashMessage('Failed to Add/Edit a Task')
        }

        updateTask(data);
        history.push(`/task/${data._id}`);
    };
};

export default useFormDispatch;