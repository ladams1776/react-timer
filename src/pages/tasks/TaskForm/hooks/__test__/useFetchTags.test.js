import { renderHook, act } from '@testing-library/react-hooks';
import { fetchApiData, useFlashMessageFetchApiData } from 'utils';
import useTagContext from '../useTagContext';
import useFetchTags from '../useFetchTags';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('utils/api/useFlashMessageFetchApiData');
jest.mock('../../hooks/useTagContext');

describe('src/pages/createOrEditTask/hooks/__test__/useFetchTags.test.js', () => {
    describe('useFetchTags', () => {
        // Arrange
        const useTagContextStub = {
            setAllTags: jest.fn(),
        };
        const fetchApiData = jest.fn();

        beforeEach(() => {
            useTagContext.mockReturnValue(useTagContextStub);
            useFlashMessageFetchApiData.mockReturnValue(fetchApiData);
        });

        it("should call useFlashMessageFetchApiData with correct args and call fetchApiData", () => {
            // Arrange

            // Act
            renderHook(() => useFetchTags());

            // Assert
            expect(useFlashMessageFetchApiData).toHaveBeenNthCalledWith(1, 'tags', {}, useTagContextStub.setAllTags, "", 'Failed to get Tags');
            expect(fetchApiData).toHaveBeenCalledTimes(1);
        });
    });
});