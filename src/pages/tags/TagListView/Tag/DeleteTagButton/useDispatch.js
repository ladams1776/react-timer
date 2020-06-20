import { useFlashMessageContext } from 'hooks';

const useDispatch = tagId => {
    const { setSuccessFlashMessage } = useFlashMessageContext();

    return () => {
        setSuccessFlashMessage(`Successfully Deleted Task with id of ${tagId}`);
        window.location.reload();
    };
};

export default useDispatch;