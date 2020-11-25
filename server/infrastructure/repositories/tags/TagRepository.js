const Tag = require('../../models/Tag');
const hydrateAndResponse = require('../../hydrators/hydrateAndResponse');
const DtoToTag = require('./hydrators/DtoToTag');

const TagRepository = {
  fetchAllTags: (res) => Tag.find({}, hydrateAndResponse(res)),
  deleteTag: (id, res) => Tag.deleteOne(
    { _id: id },
    hydrateAndResponse(res)
  ),
  addTag: (tagDto, res) => {
    const tag = new Tag();
    tag.toObject();
    tag.description = tagDto.description;
    tag.name = tagDto.name;
    tag.save(hydrateAndResponse(res));
  },
  fetchTagById: (id, res) =>
    Tag.findById(id, hydrateAndResponse(res)),
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
