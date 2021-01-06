import { combineReducers } from 'redux'
import {
    FETCH_ALL_TAGS,
    FETCB_ALL_TAGS_RESPONSE
} from "../types";
import { Tag, ResponseAction } from 'interfaces/redux/reducers';

export const fetchTagsReducer = (state = null, action: ResponseAction<'FETCH_ALL_TAGS', Tag>) => {
    switch (action.type) {
        case FETCH_ALL_TAGS:
            return state;
        default:
            return state;
    }
};

export const responseAllTagsReducer = (state = null, action:ResponseAction<'FETCB_ALL_TAGS_RESPONSE', Tag>) => {
    switch (action.type) {
        case FETCB_ALL_TAGS_RESPONSE:
            return action.data;
        default:
            return state;
    }
}



export default combineReducers({
    fetchTagsReducer: fetchTagsReducer,
    allTags: responseAllTagsReducer,
});