import { combineReducers } from 'redux';
import tagReducers from './tagReducers';
import taskReducers from './taskReducers';

const rootReducer = combineReducers({
    tasks: taskReducers,
    tags: tagReducers,
});

export default rootReducer;