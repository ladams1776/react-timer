import { useEffect } from 'react';

/**
 * Use this hook to update the current time for Timer.js
 * @param {Number} time 
 * @param {Boolean} isActive 
 * @param {Function} setTime 
 */
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
    }, [isActive, time]);
};

export default useUpdateCurrentTime;