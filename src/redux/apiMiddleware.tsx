import { fetchApiDataWithFlashMessageAndReduxActions, fetchApiDataWithReduxActions } from '../utils/api/fetchApiData';

const apiMiddleware = (reduxStore: any): Function => {
  const { dispatch } = reduxStore;

  return (next: (action: action) => void) => (action: action) => {
    const { type, url, method, requestApi, isFlash, body } = action;

    if (type && requestApi && isFlash) {
      return fetchApiDataWithFlashMessageAndReduxActions(url, { method, body }, dispatch);
    } else if (type && requestApi) {
      return fetchApiDataWithReduxActions(url, { method, body }, dispatch);
    } else {
      return next(action);
    }
  };
};

interface action {
  type: string;
  url: string;
  method: string;
  requestApi: boolean;
  isFlash: boolean;
  body: Object;
}

export default apiMiddleware;
