import { FETCH_ALL_TAGS, FETCH_TASK_BY_ID, PUT_TASK_BY_ID } from "../types";

export const fetchTaskById = (taskId) => {
    return {
        type: FETCH_TASK_BY_ID,
        url: `task/${taskId}`,
        requestApi: true
    }
};

export const fetchAllTags = () => {
    return {
        TYPE: FETCH_ALL_TAGS,
        url: `tags`,
        requestApi: true
    }
};

export const putTaskById = (body) => {
    return {
        type: PUT_TASK_BY_ID,
        url: `task`,
        method: 'PUT',
        body,
        requestApi: true
    }
};