
import { renderHook, act } from '@testing-library/react-hooks';
import { fetchApiData } from 'utils';
import useFetchAllTags from '../useFetchAllTags';

jest.mock('utils/api/fetchApiData/fetchApiData');

describe('src/pages/tags/TagsPage/__test__/useFetchAllTags.test.js', () => {
  describe('useFetchAllTags', () => {
    // Arrange
    const setTags = jest.fn();

    beforeEach(() => {
      setTags.mockReset();
      fetchApiData.mockReset();
    });

    it('should call setTags', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useFetchAllTags(setTags));
      act(() => result.current);

      // Assert
      expect(fetchApiData).toHaveBeenNthCalledWith(1, 'tags', {}, setTags);
    });
  });
});
