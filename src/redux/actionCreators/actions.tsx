import { FETCH_ALL_TAGS, FETCH_TASK_BY_ID, PUT_TASK_BY_ID } from "../types";

interface Action<T> {
    type: T;
}

interface ReturnedAction<T> extends Action<T>{
    url: String;
    requestApi:Boolean;
}

interface AllTagAction<T> extends ReturnedAction<T> {
}

interface PutTaskById<T> extends ReturnedAction<T> {
    body: any;
    method: string;
}

interface Body {}

export const fetchTaskById = (taskId: string): ReturnedAction<'FETCH_TASK_BY_ID'> => {
    return {
        type: FETCH_TASK_BY_ID,
        url: `task/${taskId}`,
        requestApi: true
    }
};

export const fetchAllTags = ():AllTagAction<'FETCH_ALL_TAGS'> => {
    return {
        type: FETCH_ALL_TAGS,
        url: `tags`,
        requestApi: true
    }
};

export const putTaskById = (body:Body): PutTaskById<'PUT_TASK_BY_ID'>=> {
    return {
        type: PUT_TASK_BY_ID,
        url: `task`,
        method: 'PUT',
        body,
        requestApi: true
    }
};