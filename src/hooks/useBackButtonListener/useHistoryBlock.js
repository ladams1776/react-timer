import useBrowserHistory from 'hooks/useBrowserHistory';
import checkToMakeSureUserWantsToLeave from './checkToMakeSureUserWantsToLeave';

const useHistoryBlock = location => {
  const history = useBrowserHistory();

  return () => history.block(checkToMakeSureUserWantsToLeave(location));
};

export default useHistoryBlock;
