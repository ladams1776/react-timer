import { useBrowserHistory } from 'hooks';

export const URL = '/tag/-1';

const useHomeOnClick = () => {
    const { push } = useBrowserHistory();

    return () => {
        sessionStorage.setItem('LOCATION', URL);
        push(URL);
    };
};

export default useHomeOnClick;