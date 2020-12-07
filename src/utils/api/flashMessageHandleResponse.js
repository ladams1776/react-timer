import PropType from 'prop-types';

/**
 * Stop loading
 * dispatch the items
 * set the error or success message if we need to.
 * 
 * @param {function} dispatch function we will be using to return the items
 * @param {Function} setErrorFlashMessage The function to set the error message
 * @param {Function} setSuccessFlashMessage the function to set the success message
 * @param {Function} setIsLoadin to set if we are loading or not.
 * @param {String} message for success message
 * @param {String} failedMessage for dailed message
 */
const flashMessageHandleResponse = (dispatch, setErrorFlashMessage, setSuccessFlashMessage, setIsLoadin, message, failedMessage) => {
    return ({ error, items }) => {
        setIsLoadin(false);
        dispatch(items);
        (error) && failedMessage && setErrorFlashMessage(`${failedMessage}: ${error.name}`);
        !error && message && setSuccessFlashMessage(message);
    }
}


flashMessageHandleResponse.PropType = {
    dispatcxh: PropType.func,
    setErrorFlashMessage: PropType.func,
    setSuccessFlashMessage: PropType.func,
    setIsLoadin: PropType.func,
    message: PropType.string,
    failedMessage: PropType.string,
    error: PropType.object,
    items: PropType.arrayOf
};

export default flashMessageHandleResponse;