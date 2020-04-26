const TagRepository = require('../../../infrastructure/repositories/tags/TagRepository');

const TagService = {
    fetchAllTags: async () => await TagRepository.fetchAllTags(),
    // fetchTaskById: async taskId => await TagRepository.fetchTaskById(taskId)
};


module.exports = TagService;