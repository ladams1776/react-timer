import { useFlashMessageContext } from 'hooks';

const useDispatch = taskId => {
    const { setSuccessFlashMessage } = useFlashMessageContext();

    return () => {
        setSuccessFlashMessage(`Successfully Deleted Task with id of ${taskId}`);
        window.location.reload();
    };
};

export default useDispatch;