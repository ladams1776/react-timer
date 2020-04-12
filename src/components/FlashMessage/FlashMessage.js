import React, { useEffect, useState, useCallback } from 'react';
import cn from 'classnames';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import './FlashMessage.css';

const FlashMessage = () => {
  const { message, success, info, error, resetFlashMessage } = useFlashMessageContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      resetFlashMessage()
    }, 10000);

    return () => clearTimeout(timer);
  }, [message, resetFlashMessage]);

  return (
    !message || (
      <div className={cn('flashMessage', 'fade-out', {
        success,
        info,
        error
      })}
        test-data-id="flash-flashMessage"
        onClick={() => resetFlashMessage()}>
        {/* <div className="innerFlashMessage">   */}
        <div className={cn("flashMessageIcon", { 
          "glyphicon glyphicon-ok-sign": success,
          "glyphicon glyphicon-exclamation-sign": error,
          "glyphicon glyphicon-info-sign": info,
        })}/>
        <div className="flashMessageContent"
          test-data-id="flash-message_message">
          {message}
        </div>
        <div className={cn("flashMessageCancel", "glyphicon glyphicon-remove-circle")}/>
        {/* </div> */}
      </div>
    )
  );
};

export default FlashMessage;
