const Tag = require('../../models/Tag');
const hydrateAndResponse = require('../../hydrators/hydrateAndResponse');

const TagRepository = {
  deleteTag: (id, res) => Tag.deleteOne(
    { _id: id },
    hydrateAndResponse(res)
  ),
  fetchTagById: (id, res) => Tag.findById(id),
  updateTag: (dto, res) => {
    Tag.findOneAndUpdate(
      { _id: dto.id },
      {
        $set: {
          _id: dto.id,
          name: dto.name,
          description: dto.description
        },
      },
      { new: true },
      hydrateAndResponse(res),
    );
  }
};

module.exports = TagRepository;
