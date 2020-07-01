const TagService = require('../../../../domain/services/tags/TagService');
const addTagAction = require('../addTagAction');
const jsonResponse = require('../../jsonResponse');

jest.mock('../../../../domain/services/tags/TagService');
jest.mock('../../jsonResponse');

describe('server/application/requestHandlers/tags/__test__/addTagAction.test.js', () => {
  // Arrange

  describe('addTagAction', () => {
    it('should call TagService.fetchAllTags() and return in res.jsonp()', async () => {
      // Arrange
      const request = {
        body: {
          name: 'name',
          description: 'description'
        }
      }
      const expected = { status: 200, tag: request.body };
      const response = jest.fn();


      jsonResponse.mockReturnValue(response);

      TagService.addTag = jest.fn().mockImplementation(tag => tag);
      jest.spyOn(TagService, 'addTag');

      // Act
      addTagAction(request, response);

      // Assert
      expect(jsonResponse).toHaveBeenNthCalledWith(1, response);
      expect(TagService.addTag).toHaveBeenNthCalledWith(1, request.body, response);
    });
  });
});
