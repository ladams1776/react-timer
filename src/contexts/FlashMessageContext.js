import React, { createContext } from 'react';
import useFlashMessage from './hooks/useFlashMessage';

export const FlashMessageContext = createContext();
export const FlashMessageActionsContext = createContext();

const FlashMessageContextProvider = ({ children }) => {
  const { message, success, info, error, setSuccessFlashMessage, setErrorFlashMessage, setInfoFlashMessage, resetFlashMessage } = useFlashMessage();

  return (
    <FlashMessageContext.Provider value={{ message, success, info, error }}>
      <FlashMessageActionsContext.Provider value={{ setSuccessFlashMessage, setErrorFlashMessage, setInfoFlashMessage, resetFlashMessage }}>
        {children}
      </FlashMessageActionsContext.Provider>
    </FlashMessageContext.Provider>
  );
};

export default FlashMessageContextProvider;
