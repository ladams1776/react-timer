const Tag = require('../../../models/Tag');
const hydrate = require('../../../hydrators/hydrate');
const TagRepository = require('../TagRepository');

jest.mock('../../../models/Tag');
jest.mock('../../../hydrators/hydrate');

describe('infrastructure/repositories/tags/__test/TagRepository.test.js', () => {
  describe('TagRepository', () => {
    describe('fetchAllTags', () => {
      it('should call Tag.find', () => {
        // Arrange
        const { fetchAllTags } = TagRepository;

        // Act
        fetchAllTags();

        // Assert
        expect(Tag.find).toHaveBeenNthCalledWith(1, {}, hydrate);
      });
    });

    describe('deleteTag', () => {
      it('should call Tag.deleteOne', () => {
        // Arrange
        const id = 1;
        const { deleteTag } = TagRepository;

        // Act
        deleteTag(id);

        // Assert
        expect(Tag.deleteOne).toHaveBeenNthCalledWith(1, { _id: id });
      });
    });
  });
});
