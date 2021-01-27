import useTagByIdSelector from "../useTagById";

jest.mock('react-redux', () => {
    return {
        useSelector: (state) => state
    }
});

describe('src/redux/selectors/__test/useTagById.test.js', () => {
    it('should return tag', () => {
        // Arrange 
        const expected = { tags: { tagById: { _id: 'id' } } };

        // Act
        const target = useTagByIdSelector();

        // Assert
        expect(target(expected)).toEqual({ _id: 'id' });

    });
});