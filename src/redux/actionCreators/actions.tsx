import { FETCH_ALL_TAGS, FETCH_TASK_BY_ID, PUT_TASK_BY_ID } from "../types";
import { RequestAction, RequestPostPutAction} from 'interfaces/redux/actions';

interface Body {}

export const fetchTaskById = (taskId: string): RequestAction<'FETCH_TASK_BY_ID'> => {
    return {
        type: FETCH_TASK_BY_ID,
        url: `task/${taskId}`,
        requestApi: true
    }
};

export const fetchAllTags = ():RequestAction<'FETCH_ALL_TAGS'> => {
    return {
        type: FETCH_ALL_TAGS,
        url: `tags`,
        requestApi: true
    }
};

export const putTaskById = (body:Body): RequestPostPutAction<'PUT_TASK_BY_ID'>=> {
    return {
        type: PUT_TASK_BY_ID,
        url: `task`,
        method: 'PUT',
        body,
        requestApi: true
    }
};