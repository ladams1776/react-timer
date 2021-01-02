import fetchApiDataFlashMessage from '../utils/api/fetchApiData/fetchApiDataFlashMessage';
import fetchApiDataTest from '../utils/api/fetchApiData/fetchApiDataTest';

export const apiMiddleware = reduxStore => {
    const { dispatch } = reduxStore;

    return next => action => {
        const { type, url, method, requestApi, isFlash, body } = action;

        if (type && requestApi && isFlash) {
            return fetchApiDataFlashMessage(url, { method, body }, dispatch);
        }
        else if (type && requestApi) {
            return fetchApiDataTest(url, { method, body }, dispatch);
        } else {
            return next(action);
        }
    }
}