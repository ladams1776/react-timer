import { useFlashMessageContext } from 'hooks';
import { useBrowserHistory } from 'hooks';
const useDispatch = taskId => {
    const { setSuccessFlashMessage } = useFlashMessageContext();
    const { push } = useBrowserHistory();

    return () => {
        setSuccessFlashMessage(`Successfully Deleted Task with id of ${taskId}`);
        sessionStorage.setItem('LOCATION', '/');
        push('/');
    };
};

export default useDispatch;