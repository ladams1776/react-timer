import { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

//@TODO: Probs clean this up later
/**
 * Prevent the user from hitting the back button.
 */
const useBackButtonListener = () => {
    const history = useHistory();
    const action = history.action;

    const dispatch = useCallback((event) => {
        if (history.action === 'PUSH') {
            history.block((location, action) => {
                if (location.pathname === "/") {
                    if (history.action === 'PUSH') {
                        return 'Are you sure you want to leave this page?';
                    }
                }
            });
        }
    }, [history, action]);

    return useEffect(() => {
        window.addEventListener('popstate', dispatch);
        return () => {
            window.removeEventListener('popstate', dispatch);
        }
    }, [dispatch]);
};

export default useBackButtonListener;