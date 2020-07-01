const TagService = require('../../../../domain/services/tags/TagService');
const editTagAction = require('../editTagAction');
const jsonResponse = require('../../jsonResponse');

jest.mock('../../../../domain/services/tags/TagService');
jest.mock('../../jsonResponse');

describe('server/application/requestHandlers/tags/__test__/editTagAction.test.js', () => {
  // Arrange

  describe('editTagAction', () => {
    it('should call TagService.updateTag()', () => {
      // Arrange
      const request = {
        body: {
          name: 'name',
          description: 'description'
        }
      }
      const response = jest.fn();

      jsonResponse.mockReturnValue(response);

      TagService.editTag = jest.fn().mockImplementation(tag => tag);
      jest.spyOn(TagService, 'updateTag');

      // Act
      editTagAction(request, response);

      // Assert
      expect(jsonResponse).toHaveBeenNthCalledWith(1, response);
      expect(TagService.updateTag).toHaveBeenNthCalledWith(1, request.body, response);
    });
  });
});
