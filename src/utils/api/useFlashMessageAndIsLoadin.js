import {
    useFlashMessageContext,
    useLoadinSpinnerContext
} from 'hooks';

/**
 * Functional Cohesion (I believe), since, "every element of 
 * processing is an integral part of, and essential to, the performance of 
 * a single function" -Larry Constantine
 * 
 * The single function here is to afford the developer the 3 essential functions to
 * perform a good interactive user feedback experience. For instance, when the user is 
 * fetching data, it would be nice to
 * 1. let them know we are working (setIsLoadin(true)).
 * 2. When done, let the user know we are done working (setIsLoadin(false))
 * 3. Let the user know how it went with either a success message or a error message 
 */
const useFlashMessageAndIsLoadin = () => {
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();
    const { setIsLoadin } = useLoadinSpinnerContext();

    return { setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin };
};

export default useFlashMessageAndIsLoadin;