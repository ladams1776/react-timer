import { useHistory } from 'react-router-dom';

const useBrowserHistoryPush = () => {
    const history = useHistory();
    return history.push;
};

export default useBrowserHistoryPush;