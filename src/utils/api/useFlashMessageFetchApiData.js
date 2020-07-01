import { fetchApiData } from 'utils';
import flashMessageHandleResponse from './flashMessageHandleResponse';
import useFlashMessageAndIsLoadin from './useFlashMessageAndIsLoadin';

/**
 * Ultimately, so we can control FlashMessaging and Loading in one location
 * @param {String} url without the /api/.
 * @param {Func} dispatch function that will be called when items return.
 * @param {Object} config object for fetchApiData.
 * @param {String} message Success Message displayed if no problem.
 * @param {String} failedMessage Fail Message displayed when there is no problem.
 */
const useFlashMessageFetchApiData = (url, config, dispatch, message, failedMessage) => {
    const { setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin } = useFlashMessageAndIsLoadin();
    const responseHandler = flashMessageHandleResponse(dispatch, setErrorFlashMessage, setSuccessFlashMessage, setIsLoadin, message, failedMessage);

    return () => {
        setIsLoadin(true);
        fetchApiData(url, config, responseHandler);
    };
};

export default useFlashMessageFetchApiData;