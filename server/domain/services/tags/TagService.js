const TagRepository = require('../../../infrastructure/repositories/tags/TagRepository');

const TagService = {
  fetchTagById: (tagId, res) =>
    TagRepository.fetchTagById(tagId, res),
  fetchAllTags: (res) =>
    TagRepository.fetchAllTags(res),
  deleteTag: (tagId, res) =>
    TagRepository.deleteTag(tagId, res),
  addTag: (dto, res) => TagRepository.addTag(dto, res),
  updateTag: (tagDto, res) =>
    TagRepository.updateTag(tagDto, res)
};

module.exports = TagService;
