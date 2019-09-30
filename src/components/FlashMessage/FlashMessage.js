import React from "react";
import PropTypes from "prop-types";
import "./FlashMessage.css";

const FlashMessage = ({ message, onClick }) => {
  const handleClick = e => {
    onClick(false);
  };

  return (
    <div className="flash-message" onClick={handleClick}>
      {message}
      <div className="flash-message-cancel">X</div>
    </div>
  );
};

FlashMessage.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default FlashMessage;
