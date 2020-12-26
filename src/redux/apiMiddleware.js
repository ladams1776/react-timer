import { fetchApiData } from 'utils';
import fetchApiDataTest from '../utils/api/fetchApiData/fetchApiDataTest';

export const apiMiddleware = reduxStore => {
    const { dispatch } = reduxStore;

    return next => action => {
        const { type, url, method, requestApi } = action;

        if (type && requestApi) {
            return fetchApiDataTest(url, {method}, dispatch);
        } else {
            return next(action);
        }
    }
}