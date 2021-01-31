import { FETCH_TASK_BY_ID, PUT, PUT_TASK_BY_ID, FETCH_ALL_TAGS, FETCH_TAG_BY_ID, UPDATE_DATE_TIME } from "redux/types";
import { fetchTaskById, putTaskById, fetchAllTags, fetchTagById, putDateTime } from "../actions";

describe('src/redux/actionCreators/__test__/actions.test.js', () => {
    describe('actions.tsx', () => {
        describe('fetchTaskById', () => {
            it('should return expected action.', () => {
                // Arrange
                const taskId = 'taskId';
                const expected = {
                    requestApi: true,
                    type: FETCH_TASK_BY_ID,
                    url: `task/${taskId}`
                };

                // Act
                const actual = fetchTaskById(taskId);

                // Assert
                expect(actual).toEqual(expected);
            });
        });
        describe('putTaskById', () => {
            it('should return expected action.', () => {
                // Arrange
                const body = {
                    taskId: 'taskId'
                };

                const expected = {
                    requestApi: true,
                    type: PUT_TASK_BY_ID,
                    url: 'task',
                    method: PUT,
                    body
                };

                // Act
                const actual = putTaskById(body);

                // Assert
                expect(actual).toEqual(expected);
            });
        });

        describe('putDateTime', () => {
            it('should return expected action.', () => {
                // Arrange
                const config = {
                    body: {id: 'bodyID'},
                    dateTimeId: 'dateTimeId',
                    taskId: 'taskId'
                };

                const expected = {
                    requestApi: true,
                    type: UPDATE_DATE_TIME,
                    url: `task/${config.taskId}/dateTime/${config.dateTimeId}`,
                    method: PUT,
                    body: config.body
                };

                // Act
                const actual = putDateTime(config);

                // Assert
                expect(actual).toEqual(expected);
            });
        });

        describe('fetchAllTags', () => {
            it('should return expected action.', () => {
                // Arrange
                const body = {
                    taskId: 'taskId'
                };

                const expected = {
                    requestApi: true,
                    type: FETCH_ALL_TAGS,
                    url: 'tags',
                };

                // Act
                const actual = fetchAllTags(body);

                // Assert
                expect(actual).toEqual(expected);
            });
        });

        describe('fetchTagById', () => {
            it('should return expected action.', () => {
                // Arrange
                const tagId = 'tagId';

                const expected = {
                    requestApi: true,
                    type: FETCH_TAG_BY_ID,
                    url: `tag/${tagId}`,
                };

                // Act
                const actual = fetchTagById(tagId);

                // Assert
                expect(actual).toEqual(expected);
            });
        });
    });
});