import { combineReducers } from 'redux';
import { FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_RESPONSE, PUT_TASK_BY_ID, UPDATE_DATE_TIME_RESPONSE } from '../types';
import { ResponseAction, Tag } from 'interfaces/redux/reducers';
import { DateTimeInterface } from 'interfaces/pages/tasks/Task';

interface TaskAction {
  _id: string;
  contractId: number;
  description: string;
  date: string;
  tags: Tag[];
  time?: number;
  dateTimes: DateTimeInterface[];
}

interface TagAction {
  items: any;
}

export const fetchTaskByIdReducer = (state = null, action: ResponseAction<'FETCH_TASK_BY_ID', TaskAction>) => {
  switch (action.type) {
    case FETCH_TASK_BY_ID:
      return state;
    default:
      return state;
  }
};

export const responseTaskByIdReducer = (state = null, action: ResponseAction<'FETCH_TASK_BY_ID_RESPONSE', TaskAction>) => {
  switch (action.type) {
    case FETCH_TASK_BY_ID_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export const responseTimeByTaskIdReducer = (state = null, action: ResponseAction<'FETCH_TASK_BY_ID_RESPONSE', TaskAction>) => {
  switch (action.type) {
    case FETCH_TASK_BY_ID_RESPONSE:
      return action.data.time;
    default:
      return state;
  }
};

export const putTaskByIdReducer = (state = null, action: ResponseAction<'PUT_TASK_BY_ID', TaskAction>) => {
  switch (action.type) {
    case PUT_TASK_BY_ID:
      return action.data;
    default:
      return state;
  }
};

export const putDateTimeReducer = (state = null, action: ResponseAction<'UPDATE_DATE_TIME_RESPONSE', TagAction>) => {
  switch (action.type) {
    case UPDATE_DATE_TIME_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  fetchTaskByIdReducer: fetchTaskByIdReducer,
  taskById: responseTaskByIdReducer,
  time: responseTimeByTaskIdReducer,
  putTaskByIdReducer: putTaskByIdReducer,
});
