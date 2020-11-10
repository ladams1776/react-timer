
module.exports = (mins) => {
    const [minutes, seconds] = mins.split(":");
    
    const minutesToMilliseconds = minutes * 1000 * 60;
    const secondsToMilliseconds = (seconds * 1000);

    return minutesToMilliseconds + secondsToMilliseconds;
};
