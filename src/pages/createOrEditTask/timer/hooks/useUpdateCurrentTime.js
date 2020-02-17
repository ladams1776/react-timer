import { useEffect } from 'react';

const useUpdateCurrentTime = (time, isActive, setTime) => {
    return useEffect(() => {
        let interval;

        if (isActive) {
            const currentTime = Date.now();
            let timeOffset = currentTime - time;
            interval = setInterval(() => setTime(currentTime - timeOffset), 25);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [isActive, time]);clearInterval
};

export default useUpdateCurrentTime;