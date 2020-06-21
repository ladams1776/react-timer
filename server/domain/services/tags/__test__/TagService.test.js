const TagService = require('../TagService');
const TagRepository = require('../../../../infrastructure/repositories/tags/TagRepository');

jest.mock('../../../../infrastructure/repositories/tags/TagRepository');

describe('server/domain/services/tags/__test__/TagService.test.js', () => {

  describe('TagService', () => {
    describe('fetchAllTags', () => {
      it('should call TagRepository.fetchAllTags(), when TagService.fetchAllTags() is called.', () => {
        // Arrange
        const expected = [{ _id: 1 }];
        TagRepository.fetchAllTags = jest.fn().mockImplementation(() => expected);
        jest.spyOn(TagRepository, 'fetchAllTags');

        // Act
        const actual = TagService.fetchAllTags();

        // Assert
        expect(TagRepository.fetchAllTags).toHaveBeenCalledTimes(1);
        expect(actual).toEqual(expected);
      });
    });

    describe('deleteTag', () => {
      it('should call TagRepository.deleteTag(), when TagService.deleteTag() is called.', () => {
        // Arrange
        const tagId = 1;
        TagRepository.deleteTag = jest.fn();
        jest.spyOn(TagRepository, 'deleteTag');

        // Act
        TagService.deleteTag(tagId);

        // Assert
        expect(TagRepository.deleteTag).toHaveBeenNthCalledWith(1, tagId);
      });
    });
  });
});
