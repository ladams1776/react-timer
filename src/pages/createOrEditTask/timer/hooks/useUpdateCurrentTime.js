import { useEffect } from 'react';

const useUpdateCurrentTime = (time, isActive, setTime) => {
    return useEffect(() => {
        let interval;

        if (isActive) {
            let timeOffset = Date.now() - time;
            interval = setInterval(() => setTime(Date.now() - timeOffset), 25);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [isActive, time]);
};

export default useUpdateCurrentTime;