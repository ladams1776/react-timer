const TagRepository = require('../../../infrastructure/repositories/tags/TagRepository');

const TagService = {
  fetchAllTags: () => TagRepository.fetchAllTags(),
  // fetchTaskById: async taskId => await TagRepository.fetchTaskById(taskId)
};

module.exports = TagService;
