import { useEffect } from 'react';
import useDispatch from './useDispatch';

//@TODO: Probs clean this up later
/**
 * Prevent the user from hitting the back button.
 */
const useBackButtonListener = () => {
    const dispatch = useDispatch();

    return useEffect(() => {
        window.addEventListener('popstate', dispatch);
        return () => {
            window.removeEventListener('popstate', dispatch);
        }
    }, [dispatch]);
};

export default useBackButtonListener;