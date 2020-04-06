import React from 'react';
import classnames from 'classnames';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import './FlashMessage.css';

const FlashMessage = () => {
  const { message, success, info, error, resetFlashMessage } = useFlashMessageContext();

  return (
    !message || (
      <div className={classnames('flashMessage', {
        success,
        info,
        error
      })}
        test-data-id="flash-flashMessage"
        onClick={() => resetFlashMessage()}>

        <div className="flashMessageContent"
          test-data-id="flash-message_message">
          {message}
        </div>

        <div className="flashMessageCancel">X</div>
      </div>
    )
  );
};

export default FlashMessage;
