const TagService = require('../../../domain/services/tags/TagService');

module.exports = async (req, res) => {
    const tags = await TagService.fetchAllTags();
    res.jsonp(tags);
};