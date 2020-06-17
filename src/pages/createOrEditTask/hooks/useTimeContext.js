import { useContext } from 'react';
import { TimeContext, TimeActionContext } from '../contexts/TimeContext';

const useTime = () => useContext(TimeContext);
const useSetTime = () => useContext(TimeActionContext);

const useTimeContext = () => {
  const time = useTime();
  const setTime = useSetTime();
  return { time, setTime };
};

export default useTimeContext;
