import { FETCH_ALL_TAGS_RESPONSE, FETCH_ALL_TAGS, FETCH_TAG_BY_ID_RESPONSE } from "redux/types";
import { fetchTagsReducer, responseFetchTagByIdReducer, responseAllTagsReducer } from "../tagReducers";

describe('src/redux/reducers/__test__/tagReducers.test.js', () => {
    describe('tagReducers.tsx', () => {

        describe('fetchTagsReducer', () => {
            it('should return expected data', () => {
                // Arrange
                const state = {
                    id: 'id'
                };
                const expected = { id: 'expectedID' };
                const action = {
                    type: FETCH_ALL_TAGS,
                    data: expected
                };

                // Act
                const actual = fetchTagsReducer(state, action);

                // Assert
                expect(actual).toEqual(expected);
            });
            it('should return expected state', () => {
                // Arrange
                const expected = {
                    id: 'id'
                };
                const action = {
                    type: 'NOT VALID TYPE',
                };

                // Act
                const actual = fetchTagsReducer(expected, action);

                // Assert
                expect(actual).toEqual(expected);
            });
        });

        describe('responseAllTagsReducer.tsx', () => {
            it('should return expected data', () => {
                // Arrange
                const state = {
                    id: 'id'
                };
                const expected = { id: 'expectedID' };
                const action = {
                    type: FETCH_ALL_TAGS_RESPONSE,
                    data: expected
                };

                // Act
                const actual = responseAllTagsReducer(state, action);

                // Assert
                expect(actual).toEqual(expected);
            });
            it('should return expected state', () => {
                // Arrange
                const expected = {
                    id: 'id'
                };
                const action = {
                    type: 'NOT VALID TYPE',
                };

                // Act
                const actual = responseAllTagsReducer(expected, action);

                // Assert
                expect(actual).toEqual(expected);
            });
        });

        describe('responseFetchTagByIdReducer.tsx', () => {
            it('should return expected expected', () => {
                // Arrange
                const state = {
                    id: 'id'
                };
                const expected = { id: 'expectedID' };
                const action = {
                    type: FETCH_TAG_BY_ID_RESPONSE,
                    data: expected
                };

                // Act
                const actual = responseFetchTagByIdReducer(state, action);

                // Assert
                expect(actual).toEqual(expected);
            });

            it('should return expected state', () => {
                // Arrange
                const expected = {
                    id: 'id'
                };
                const action = {
                    type: 'NOT VALID TYPE',
                };

                // Act
                const actual = responseFetchTagByIdReducer(expected, action);

                // Assert
                expect(actual).toEqual(expected);
            });
        });
    });
});