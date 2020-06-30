const TagService = require('../TagService');
const TagRepository = require('../../../../infrastructure/repositories/tags/TagRepository');

jest.mock('../../../../infrastructure/repositories/tags/TagRepository');

describe('server/domain/services/tags/__test__/TagService.test.js', () => {
  describe('TagService', () => {
    const res = jest.fn();

    beforeEach(() => {
      res.mockReset();
    });

    describe('fetchAllTags', () => {
      it('should call TagRepository.fetchAllTags(), when TagService.fetchAllTags() is called.', () => {
        // Arrange
        jest.spyOn(TagRepository, 'fetchAllTags');

        // Act
        TagService.fetchAllTags(res);

        // Assert
        expect(TagRepository.fetchAllTags).toHaveBeenCalledTimes(1, res);
      });
    });

    describe('deleteTag', () => {
      it('should call TagRepository.deleteTag(), when TagService.deleteTag() is called.', () => {
        // Arrange
        const tagId = 1;
        jest.spyOn(TagRepository, 'deleteTag');

        // Act
        TagService.deleteTag(tagId, res);

        // Assert
        expect(TagRepository.deleteTag).toHaveBeenNthCalledWith(1, tagId, res);
      });
    });

    describe('addTag', () => {
      it('should call TagRepository.addTag(), when TagService.addTag() is called.', () => {
        // Arrange
        const expected = {
          name: 'name',
          description: 'description',
        };
        jest.spyOn(TagRepository, 'addTag');

        // Act
        TagService.addTag(expected, res);

        // Assert
        expect(TagRepository.addTag).toHaveBeenNthCalledWith(1, expected, res);
      });
    });

    describe('updateTag', () => {
      it('should call TagRepository.updateTag(), when TagService.updateTag() is called.', () => {
        // Arrange
        const expected = {
          name: 'name',
          description: 'description',
        };
        jest.spyOn(TagRepository, 'updateTag');

        // Act
        TagService.updateTag(expected, res);

        // Assert
        expect(TagRepository.updateTag).toHaveBeenNthCalledWith(1, expected, res);
      });
    });
  });
});
