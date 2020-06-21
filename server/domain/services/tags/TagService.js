const TagRepository = require('../../../infrastructure/repositories/tags/TagRepository');

const TagService = {
  fetchAllTags: () => TagRepository.fetchAllTags(),
  deleteTag: tagId => TagRepository.deleteTag(tagId),
  // fetchTaskById: async taskId => await TagRepository.fetchTaskById(taskId)
};

module.exports = TagService;
