import { useContext } from 'react';
import { FlashMessageContext, FlashMessageActionsContext } from '../contexts/FlashMessageContext';

const useFlashMessage = () => useContext(FlashMessageContext);
const useSetFlashMessage = () => useContext(FlashMessageActionsContext);

const useFlashMessageContext = () => {
    const { message, success, info, error } = useFlashMessage();
    const { setSuccessFlashMessage, setErrorFlashMessage, setInfoFlashMessage, resetFlashMessage } = useSetFlashMessage();

    return { message, success, info, error, setSuccessFlashMessage, setErrorFlashMessage, setInfoFlashMessage, resetFlashMessage };
};

export default useFlashMessageContext;
