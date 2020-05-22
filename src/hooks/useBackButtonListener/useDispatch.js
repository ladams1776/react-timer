import { useCallback } from 'react';
import useBrowserHistory from 'hooks/useBrowserHistory';
import checkToMakeSureUserWantsToLeave from './checkToMakeSureUserWantsToLeave';

const useDispatch = () => {
    const history = useBrowserHistory();

    return useCallback(event => {
        history.block(checkToMakeSureUserWantsToLeave);
    }, [history]);
}


export default useDispatch;