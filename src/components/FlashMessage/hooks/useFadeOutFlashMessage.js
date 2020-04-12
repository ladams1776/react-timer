import { useEffect } from 'react';
import useFlashMessageContext from 'hooks/useFlashMessageContext';


const useFadeOutFlashMessage = () => {
    const { message, error, resetFlashMessage } = useFlashMessageContext();

    useEffect(() => {
        const timer = !error && setTimeout(() => resetFlashMessage(), 10000);
        
        return () => clearTimeout(timer);
    }, [message, resetFlashMessage, error]);
}

export default useFadeOutFlashMessage;