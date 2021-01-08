import { useHistory } from 'react-router-dom';
import * as H from 'history';

const useBrowserHistory = (): H.History => useHistory();

export default useBrowserHistory;
