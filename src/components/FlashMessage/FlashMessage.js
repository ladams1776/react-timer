import React from 'react';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import styles from './FlashMessage.module.css';

const FlashMessage = () => {
  const { flashMessage, setFlashMessage } = useFlashMessageContext();

  return (
    !flashMessage || (
      <div className={styles.flashMessage} test-data-id="flash-flashMessage" onClick={() => setFlashMessage(null)}>
        <div className={styles.flashMessageContent} test-data-id="flash-message_message">{flashMessage}</div>
        <div className={styles.flashMessageCancel}>X</div>
      </div>
    )
  );
};

export default FlashMessage;
