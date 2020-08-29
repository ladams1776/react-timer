import { renderHook, act } from '@testing-library/react-hooks';
import useFetchTagById from '../useFetchTagById';
import { useFlashMessageFetchApiData } from 'utils';

jest.mock('utils/api/useFlashMessageFetchApiData');

describe('src/pages/tags/AddTagPage/__test__/useFetchTagById.test.js', () => {
    describe('useFetchTagById', () => {
        it("should call setTag with an object with id of -1, when taskId is '-1'", () => {
            // Arrange
            const tagId = "-1";
            const setTag = jest.fn();

            const dispatch = jest.fn();
            const fetchApiData = jest.fn().mockImplementation(() => dispatch);
            useFlashMessageFetchApiData.mockReturnValue(fetchApiData);

            // Act
            const { result } = renderHook(() => useFetchTagById(tagId, setTag));

            // Assert
            expect(setTag).toHaveBeenNthCalledWith(1, { _id: tagId });
            expect(dispatch).not.toHaveBeenCalled();
        });

        it("should call dispatch, when taskId is anything other than '-1'", () => {
            // Arrange
            const tagId = "asd&*(7sdasc";
            const setTag = jest.fn();

            const dispatch = jest.fn();
            const fetchApiData = jest.fn().mockImplementation(() => dispatch);
            useFlashMessageFetchApiData.mockReturnValue(fetchApiData);

            // Act
            renderHook(() => useFetchTagById(tagId, setTag));

            // Assert
            expect(fetchApiData).toHaveBeenCalled();
            expect(setTag).not.toHaveBeenCalled();
        });
    });
});