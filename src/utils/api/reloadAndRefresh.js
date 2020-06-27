import { fetchApiData } from 'utils';

/**
 * Used to reload the screen after we delete items or something.
 * It is also able to handle to handle the change from error and items being returned from api endpoints.
 */
const reloadAndRefresh = (url, urlConfig, dispatch) => () => {
    fetchApiData(url, urlConfig, ({ error, items }) => dispatch(items));
};

export default reloadAndRefresh;
