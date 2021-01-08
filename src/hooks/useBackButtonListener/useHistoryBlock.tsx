import useBrowserHistory from 'hooks/useBrowserHistory';
import { Location } from 'interfaces/global';
import checkToMakeSureUserWantsToLeave from './checkToMakeSureUserWantsToLeave';

type UnregisterCallback = () => void;


const useHistoryBlock = (location: Location): UnregisterCallback => {
  const history = useBrowserHistory();

  return () => history.block(checkToMakeSureUserWantsToLeave(location));
};

export default useHistoryBlock;
