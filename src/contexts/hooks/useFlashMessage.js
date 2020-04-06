import { useCallback, useReducer } from 'react';
import useFlashMessageReducer, { SUCCESS, INFO, ERROR, RESET } from './reducers/useFlashMessageReducer';


const useFlashMessage = () => {
    const initialDefaultState = {
        message: '',
        SUCCESS: false,
        INFO: false,
        ERROR: false,
        RESET: false,
    };

    const [state, dispatch] = useReducer(useFlashMessageReducer, initialDefaultState);

    const setSuccessFlashMessage = useCallback(message => dispatch({ type: SUCCESS, message }), []);
    const setErrorFlashMessage = useCallback(message => dispatch({ type: ERROR, message }), []);
    const setInfoFlashMessage = useCallback(message => dispatch({ type: INFO }, { message }), []);
    const resetFlashMessage = useCallback(() => dispatch({ type: RESET }), []);

    return { ...state, setSuccessFlashMessage, setErrorFlashMessage, setInfoFlashMessage, resetFlashMessage };
}

export default useFlashMessage;