import React, { useState, createContext, useCallback } from 'react';

export const TimeContext = createContext();
export const TimeActionContext = createContext();

const TimeContextProvider = ({ children }) => {
    const [time, setTs] = useState(0);
    const setTime = useCallback(time => setTs(time), [setTs]);

    return <TimeContext.Provider value={time}>
        <TimeActionContext.Provider value={setTime}>
            {children}
        </TimeActionContext.Provider>
    </TimeContext.Provider>
}

export default TimeContextProvider;