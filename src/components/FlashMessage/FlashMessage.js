import React from 'react';
import PropTypes from 'prop-types';
import useTaskEditContext from 'hooks/useTaskEditContext';
import './FlashMessage.css';

const FlashMessage = () => {
  const { message, setMessage } = useTaskEditContext();

  return (
    !message || (
      <div className="flash-message" onClick={() => setMessage(null)}>
        <div className="flash-message_message" test-data-id="flash-message">{message}</div>
        <div className="flash-message_cancel">X</div>
      </div>
    )
  );
};

FlashMessage.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default FlashMessage;
