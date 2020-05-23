const TagService = require('../../../../domain/services/tags/TagService');
const getAllTagsAction = require('../getAllTagsAction');

jest.mock('../../../../domain/services/tags/TagService');

describe('server/application/requestHandlers/tags/__test__/getAllTagsAction.test.js', () => {
  // Arrange

  describe('getAllTagsAction', () => {
    it('should call TagService.fetchAllTags() and return in res.jsonp()', async () => {
      // Arrange
      const response = {
        jsonp: jest.fn(),
      };
      const tags = [{ _id: 1 }];

      TagService.fetchAllTags = jest.fn().mockImplementation(() => tags);
      jest.spyOn(TagService, 'fetchAllTags');

      // Act
      await getAllTagsAction({}, response);

      // Assert
      expect(response.jsonp).toHaveBeenNthCalledWith(1, tags);
    });
  });
});
