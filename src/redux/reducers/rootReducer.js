import { combineReducers } from 'redux';
import reducers from './reducers';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
    simpleReducer,
    reducers
});

export default rootReducer;