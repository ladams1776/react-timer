import fetchApiDataFlashMessage from '../utils/api/fetchApiData/fetchApiDataFlashMessage';
import fetchApiDataTest from '../utils/api/fetchApiData/fetchApiDataTest';

const apiMiddleware = (reduxStore:any):Function => {
    const { dispatch } = reduxStore;

    return (next:Function) => (action:action) => {
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

interface action {
    type: string;
    url: string;
    method: string;
    requestApi: boolean;
    isFlash: boolean;
    body: Object;
}

export default apiMiddleware;