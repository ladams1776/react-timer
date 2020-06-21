import { renderHook } from '@testing-library/react-hooks';
import { fetchApiData } from 'utils';
import useTagContext from '../useTagContext';
import useFetchTags from '../useFetchTags';

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('../../hooks/useTagContext');

describe('src/pages/createOrEditTask/hooks/__test__/useFetchTags.test.js', () => {
    describe('useFetchTags', () => {
        // Arrange
        const useTagContextStub = {
            setAllTags: jest.fn(),
        };

        useTagContext.mockReturnValue(useTagContextStub);

        it("should call fetchApiData with 'tags' and 'setAllTags' as a dispatch", () => {
            // Arrange

            // Act
            renderHook(() => useFetchTags());

            // Assert
            expect(fetchApiData).toHaveBeenNthCalledWith(1, 'tags', {}, useTagContextStub.setAllTags);
        });
    });
});