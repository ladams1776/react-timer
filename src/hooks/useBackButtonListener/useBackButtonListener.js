import { useEffect } from 'react';
import useDispatch from './useDispatch';

/**
 * We want to listen for the browser's back button event, and
 * if it fired, we want to make sure that we tell react router to 
 * redirect us over to the homepage.
 * 
 * @param {Object} history from react-router-dom 
 */
const useBackButtonListener = (history) => {
    const dispatch = useDispatch(history);
    return useEffect(() => {
        return window.addEventListener('popstate', dispatch);
    }, [history]);
};

export default useBackButtonListener;