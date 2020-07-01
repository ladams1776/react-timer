const Tag = require('../../../models/Tag');
const hydrateAndResponse = require('../../../hydrators/hydrateAndResponse');
const assembleTag = require('../assembleTag');
const TagRepository = require('../TagRepository');

jest.mock('../../../models/Tag');
jest.mock('../../../hydrators/hydrateAndResponse');
jest.mock('../assembleTag');

describe('server/infrastructure/repositories/tags/__test__/TagRepository.test.js', () => {
  describe('TagRepository', () => {
    // Arrange
    const res = jest.fn();
    const hydrate = jest.fn();

    beforeEach(() => {
      res.mockReset();
      hydrate.mockReset();
      hydrateAndResponse.mockReturnValue(hydrate);
    });

    describe('fetchAllTags', () => {
      it('should call Tag.find', () => {
        // Arrange
        const { fetchAllTags } = TagRepository;

        // Act
        fetchAllTags(res);

        // Assert
        expect(hydrateAndResponse).toHaveBeenNthCalledWith(1, res);
        expect(Tag.find).toHaveBeenNthCalledWith(1, {}, hydrate);
      });
    });

    describe('deleteTag', () => {
      it('should call Tag.deleteOne', () => {
        // Arrange
        const tag = {
          _id: 1,
        };
        const { deleteTag } = TagRepository;

        // Act
        deleteTag(tag._id, res);

        // Assert
        expect(hydrateAndResponse).toHaveBeenNthCalledWith(1, res);
        expect(Tag.deleteOne).toHaveBeenNthCalledWith(1, tag, hydrate);
      });
    });

    describe('addTag', () => {
      it('should call assembleTag, and have tag.save(), then returned', () => {
        // Arrange
        const expected = {
          name: 'name',
          description: 'description',
        };

        const tag = {
          name: 'name',
          description: 'description',
          save: jest.fn().mockImplementation(() => expected),
        };

        assembleTag.mockReturnValue(tag);

        const { addTag } = TagRepository;

        // Act
        addTag(tag, res);

        // Assert
        expect(assembleTag).toHaveBeenNthCalledWith(1, tag);
        expect(hydrateAndResponse).toHaveBeenNthCalledWith(1, res);
        expect(tag.save).toHaveBeenNthCalledWith(1, hydrate);
      });
    });

    describe('fetchTagById', () => {
      it('should call Tag.findById', () => {
        // Arrange
        const id = 1;
        const { fetchTagById } = TagRepository;

        // Act
        fetchTagById(id, res);

        // Assert
        expect(hydrateAndResponse).toHaveBeenNthCalledWith(1, res);
        expect(Tag.findById).toHaveBeenNthCalledWith(1, id, hydrate);
      });
    });

    describe('updateTag', () => {
      it('should call Tag.findOneAndUpdate', () => {
        // Arrange
        const description = 'description';
        const name = 'name';
        const dto = {
          id: 1,
          description,
          name
        };
        const { updateTag } = TagRepository;

        // Act
        updateTag(dto, res);

        // Assert
        expect(hydrateAndResponse).toHaveBeenNthCalledWith(1, res);
        expect(Tag.findOneAndUpdate).toHaveBeenNthCalledWith(1,
          { _id: dto.id },
          { "$set": { "_id": 1, description, name } },
          { "new": true },
          hydrate);
      });
    });
  });
});
