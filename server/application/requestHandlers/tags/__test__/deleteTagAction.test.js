const TagService = require('../../../../domain/services/tags/TagService');
const deleteTagAction = require('../deleteTagAction');

jest.mock('../../../../domain/services/tags/TagService');

describe('server/application/requestHandlers/tags/__test__/deleteTagAction.test.js', () => {
  // Arrange

  describe('deleteTagAction', () => {
    it('should call TagService.deleteTag()', () => {
      // Arrange
      const response = {
        jsonp: jest.fn(),
      };
      const id = 1;
      const request = {
        params: {
          id,
        },
      };
      const expected = { isSuccess: true, tagId: id };

      TagService.deleteTag = jest.fn();
      jest.spyOn(TagService, 'fetchAllTags');
      // Act
      deleteTagAction(request, response);

      // Assert
      expect(response.jsonp).toHaveBeenNthCalledWith(1, expected);
    });
  });
});
