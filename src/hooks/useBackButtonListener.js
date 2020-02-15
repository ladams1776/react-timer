import { useEffect } from 'react';

const BACK_BUTTON_EVENT = 'POP';

/**
 * We want to listen for the browser's back button event, and
 * if it fired, we want to make sure that we tell react router to 
 * redirect us over to the homepage.
 * 
 * @param {Object} history from react-router-dom 
 */
const useBackButtonlistener = history => {
    return useEffect(() => {
        return window.onpopstate = (e) => {
            if (history.action === BACK_BUTTON_EVENT) {
                history.replace('/');
            }
        }
    }, [history]);
};

export default useBackButtonlistener;