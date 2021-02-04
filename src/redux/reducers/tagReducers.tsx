import { combineReducers } from 'redux';
import { FETCH_ALL_TAGS, FETCH_ALL_TAGS_RESPONSE, FETCH_TAG_BY_ID_RESPONSE } from '../types';
import { Tag, ResponseAction } from 'interfaces/redux/reducers';

export const fetchTagsReducer = (state = null, action: ResponseAction<'FETCH_ALL_TAGS', Tag>) => {
  switch (action.type) {
    case FETCH_ALL_TAGS:
      return action.data;
    default:
      return state;
  }
};

export const responseAllTagsReducer = (state = null, action: ResponseAction<'FETCH_ALL_TAGS_RESPONSE', Tag>) => {
  switch (action.type) {
    case FETCH_ALL_TAGS_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export const responseFetchTagByIdReducer = (state = null, action: ResponseAction<'FETCH_TAG_BY_ID_RESPONSE', Tag>) => {
    switch (action.type) {
    case FETCH_TAG_BY_ID_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  fetchTagsReducer: fetchTagsReducer,
  tagById: responseFetchTagByIdReducer,
  allTags: responseAllTagsReducer,
});
