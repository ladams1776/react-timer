import React, { useState, createContext, useContext } from 'react';

export const LoadinSpinnerContext = createContext();
export const LoadinSpinnerActionsContext = createContext();

const LoadinSpinnerContextProvider = ({ children }) => {
    const [isLoadin, setIsLoadin] = useState(false);

    return <LoadinSpinnerContext.Provider value={isLoadin}>
        <LoadinSpinnerActionsContext.Provider value={setIsLoadin}>
            {children}
        </LoadinSpinnerActionsContext.Provider>
    </LoadinSpinnerContext.Provider>
}

export default LoadinSpinnerContextProvider;