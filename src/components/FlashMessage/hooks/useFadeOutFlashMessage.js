import {useEffect} from 'react';
import useFlashMessageContext from 'hooks/useFlashMessageContext';


const useFadeOutFlashMessage = () => {
    const { message, success, info, error, resetFlashMessage } = useFlashMessageContext();
    
    useEffect(() => {
        const timer = setTimeout(() => {
          resetFlashMessage()
        }, 10000);
    
        return () => clearTimeout(timer);
      }, [message, resetFlashMessage]);    
}

export default useFadeOutFlashMessage;