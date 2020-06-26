const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');

module.exports = async (req, res) => {
    TagService.deleteTag(req.params.id, jsonResponse(res));
};