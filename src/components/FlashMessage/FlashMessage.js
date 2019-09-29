import React, { useState, useEffect } from "react";
import "./FlashMessage.css";

const FlashMessage = ({opacity, message, handler}) => {

  const [stateOpacity, setStateOpacity] = useState(0);

  useEffect(() => {
    if (opacity !== stateOpacity) {
      setStateOpacity(opacity);
    }
  });

  const handleClick = e => {
    setStateOpacity(0);
    handler(0);
  };

  return (
    <div
      className="flash-message"
      onClick={handleClick}
      style={{ opacity: opacity }}
    >
      {message}
      <div className="flash-message-cancel">X</div>
    </div>
  );
};

export default FlashMessage;
