import { FETCH_TASK_BY_ID } from "../types";

export const fetchTaskById = (taskId) => {
    return {
        type: FETCH_TASK_BY_ID,
        url: `task/${taskId}`,
        requestApi: true
    }
};