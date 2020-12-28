import { combineReducers } from 'redux'
import {
    FETCH_TASK_BY_ID,
    FETCH_TASK_BY_ID_RESPONSE
} from "../types";

export const fetchTaskByIdReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TASK_BY_ID:
            return state;
        default:
            return state;
    }
};

export const responseTaskByIdReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TASK_BY_ID_RESPONSE:
            return action.data;
        default:
            return state;
    }
}

export const responseTimeByTaskIdReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TASK_BY_ID_RESPONSE:
            return action.data.time;
        default:
            return state;
    }
}

export default combineReducers({
    fetchTaskByIdReducer: fetchTaskByIdReducer,
    taskById: responseTaskByIdReducer,
    time: responseTimeByTaskIdReducer,
});