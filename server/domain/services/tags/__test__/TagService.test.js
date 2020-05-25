const TagService = require('../TagService');
const TagRepository = require('../../../../infrastructure/repositories/tags/TagRepository');

jest.mock('../../../../infrastructure/repositories/tags/TagRepository');

describe('server/domain/services/tags/__test__/TagService.test.js', () => {
  // Arrange

  describe('TagService', () => {
    // Arrange
    const tasks = [{ _id: 1 }];

    it('should call TagRepository.fetchAllTAgs(), when TagService.fetchAllTags() is called.', () => {
      // Arrange
      TagRepository.fetchAllTags = jest.fn().mockImplementation(() => tasks);
      jest.spyOn(TagRepository, 'fetchAllTags');

      // Act
      const actual = TagService.fetchAllTags();

      // Assert
      expect(TagRepository.fetchAllTags).toHaveBeenCalledTimes(1);
      expect(actual).toEqual(tasks);
    });
  });
});
