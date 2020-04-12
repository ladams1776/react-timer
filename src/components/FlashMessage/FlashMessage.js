import React from 'react';
import cn from 'classnames';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import useFadeOutFlashMessage from './hooks/useFadeOutFlashMessage';
import './FlashMessage.css';

const FlashMessage = () => {
  const { message, success, info, error, resetFlashMessage } = useFlashMessageContext();
  
  useFadeOutFlashMessage();
  
  return (
    !message || (
      <div className={cn('flashMessage', {
        'fade-out': !error,
        success,
        info,
        error
      })}
        test-data-id="flash-flashMessage"
        onClick={() => resetFlashMessage()}>

        <div className={cn("flashMessageIcon", {
          "glyphicon glyphicon-ok-sign": success,
          "glyphicon glyphicon-exclamation-sign": error,
          "glyphicon glyphicon-info-sign": info,
        })} />

        <div className="flashMessageContent"
          test-data-id="flash-message_message">
          {message}
        </div>

        <div className={cn("flashMessageCancel", "glyphicon glyphicon-remove-circle")} />

      </div>
    )
  );
};

export default FlashMessage;
