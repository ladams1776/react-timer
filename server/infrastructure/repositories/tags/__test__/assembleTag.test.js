const Tag = require('../../../models/Tag');
const assembleTag = require('../assembleTag');

// jest.mock('../../../models/Tag');

describe('server/infrastructure/repositories/tag/__test__/assembleTag.test.js', () => {
  describe('assembleTag', () => {
    it('should return new tag, ready to be saved', () => {
      // Arrange
      const tagDto = {
        description: 'description',
        name: 'name',
      };

      // Act
      const { _id, description, name } = assembleTag(tagDto)

      // Assert
      expect(description).toEqual(tagDto.description);
      expect(name).toEqual(tagDto.name);
      expect(_id.toString().length).toEqual(24);
    });
  });
});
