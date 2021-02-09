import { PUT, FETCH_ALL_TAGS, FETCH_TASK_BY_ID, PUT_TASK_BY_ID, UPDATE_DATE_TIME, FETCH_TAG_BY_ID, PUT_TAG } from '../types';
import { RequestAction, RequestPostPutAction, RequestPostPutFlashAction } from 'interfaces/redux/actions';
import { EditDateTimeInterface } from 'interfaces/pages/tasks/Task';

// Tasks
export const fetchTaskById = (taskId: string): RequestAction<'FETCH_TASK_BY_ID'> => {
  return {
    type: FETCH_TASK_BY_ID,
    url: `task/${taskId}`,
    requestApi: true,
  };
};

interface Body {}

export const putTaskById = (body: Body): RequestPostPutAction<'PUT_TASK_BY_ID'> => {
  return {
    type: PUT_TASK_BY_ID,
    url: `task`,
    method: PUT,
    body,
    requestApi: true,
  };
};

// Date Time
interface Config {
  body: EditDateTimeInterface;
  taskId: String;
  dateTimeId: String;
}

export const putDateTime = (config: Config): RequestPostPutAction<'UPDATE_DATE_TIME'> => {
  const { taskId, dateTimeId, body } = config;

  return {
    type: UPDATE_DATE_TIME,
    url: `task/${taskId}/dateTime/${dateTimeId}`,
    method: PUT,
    body,
    requestApi: true,
  };
};

// Tags
export const fetchAllTags = (): RequestAction<'FETCH_ALL_TAGS'> => {
  return {
    type: FETCH_ALL_TAGS,
    url: `tags`,
    requestApi: true,
  };
};

export const fetchTagById = (tagId: string): RequestAction<'FETCH_TAG_BY_ID'> => {
  return {
    type: FETCH_TAG_BY_ID,
    url: `tag/${tagId}`,
    requestApi: true,
  };
};

export const putTag = (body: Body): RequestPostPutFlashAction<'PUT_TAG'> => { 
  console.log('the body: ', body);
  return {
    type: PUT_TAG,
    url: 'tag',
    method: PUT,
    isFlash: true,
    body,
    requestApi: true,
  };
};