import React, { useState, createContext } from 'react';

export const FlashMessageContext = createContext();
export const FlashMessageActionsContext = createContext();

const FlashMessageContextProvider = ({ children}) => {
    const [flashMessage, setFlashMessage] = useState('');

    return <FlashMessageContext.Provider value={flashMessage}>
        <FlashMessageActionsContext.Provider value={setFlashMessage}>
            {children}
        </FlashMessageActionsContext.Provider>
    </FlashMessageContext.Provider>
};

export default FlashMessageContextProvider;