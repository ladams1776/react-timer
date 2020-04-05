import { useContext } from 'react';
import { FlashMessageContext, FlashMessageActionsContext } from '../contexts/FlashMessageContext';

const useFlashMessage = () => useContext(FlashMessageContext);
const useSetFlashMessage = () => useContext(FlashMessageActionsContext);

const useFlashMessageContext = () => {
    const flashMessage = useFlashMessage();
    const setFlashMessage = useSetFlashMessage();

    return { flashMessage, setFlashMessage };
};

export default useFlashMessageContext;
