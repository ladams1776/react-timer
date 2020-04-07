import React, { useState, createContext, useCallback } from 'react';

export const LoadinSpinnerContext = createContext();
export const LoadinSpinnerActionsContext = createContext();

const LoadinSpinnerContextProvider = ({ children }) => {
    const [isLoadin, setLoadin] = useState(false);
    const setIsLoadin = useCallback(isLoadin => setLoadin(isLoadin), [setLoadin]);

    return <LoadinSpinnerContext.Provider value={isLoadin}>
        <LoadinSpinnerActionsContext.Provider value={setIsLoadin}>
            {children}
        </LoadinSpinnerActionsContext.Provider>
    </LoadinSpinnerContext.Provider>
}

export default LoadinSpinnerContextProvider;