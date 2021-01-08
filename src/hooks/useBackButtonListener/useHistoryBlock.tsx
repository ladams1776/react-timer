import useBrowserHistory from 'hooks/useBrowserHistory';
import { Location } from 'interfaces/global';
import checkToMakeSureUserWantsToLeave from './checkToMakeSureUserWantsToLeave';

const useHistoryBlock = (location: Location) => {
  const history = useBrowserHistory();

  return () => history.block(checkToMakeSureUserWantsToLeave(location));
};

export default useHistoryBlock;
