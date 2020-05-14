import {
    useFlashMessageContext,
    useLoadinSpinnerContext,
    useTaskEditContext
} from 'hooks';

const useDispatch = () => {
    const { updateTasks } = useTaskEditContext();
    const { setIsLoadin } = useLoadinSpinnerContext();
    const { setSuccessFlashMessage } = useFlashMessageContext();

    return () => {
        setSuccessFlashMessage('Successfully deleted all tasks');
        updateTasks([]);
        setIsLoadin(false);
    };
};

export default useDispatch;