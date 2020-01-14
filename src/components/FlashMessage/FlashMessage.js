import React from 'react';
import PropTypes from 'prop-types';
import useTaskEditContext from 'pages/CreateOrEditTask/Form/EditTask/hooks/useTaskEditContext';
import './FlashMessage.css';

//@TODO: Probably want to just drop this component at the top of the app
//@TODO: Then use `ref` and `context` to toggle it on and off and then
//@TODO: we won't need to have to declare/instantiate it in other components,
//@TODO: the other comps can just call the func provided by the context.
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
