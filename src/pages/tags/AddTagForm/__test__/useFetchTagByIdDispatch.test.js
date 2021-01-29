import { renderHook, act } from '@testing-library/react-hooks';

// target
import useFetchTagByIdDispatch from '../useFetchTagByIdDispatch';

// dependencies
import { fetchTagById } from 'redux/actionCreators/actions';
jest.mock('redux/actionCreators/actions');

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}));

describe('useFetchTagByIdDispatch', () => {
    it('should invoke fetchTagById with expected tagId', () => {
        // Arrange
        const tagId = 'tagId';
        fetchTagById.mockImplementation();

        // Act
        renderHook(() => useFetchTagByIdDispatch(tagId));
        
        // Assert
        expect(fetchTagById).toBeCalledWith(tagId);
    });
});