const TagRepository = require('../TagRepository');
const Tag = require('../../../models/Tag');
const hydrate = require('../../../hydrators/hydrate');

describe('server/infrastructure/repositories/tags/__test__/TagRepository.test.js', () => {
  describe('TagRepository', () => {
    // Arrange
    beforeEach(() => {
      jest.mock('../../../models/Tag');
      jest.mock('../../../hydrators/hydrate');
    });

    describe('#fetchAllTags', () => {
      it('should call Tag.find(), with hydrate function', () => {
        // Arrange
        const tags = [{ _id: 1 }];
        Tag.find = jest.fn().mockImplementation(() => tags);

        // Act
        const actual = TagRepository.fetchAllTags();

        // Assert
        expect(Tag.find).toHaveBeenNthCalledWith(1, {}, hydrate);
        expect(actual).toEqual(tags);
      });
    });
  });
});
