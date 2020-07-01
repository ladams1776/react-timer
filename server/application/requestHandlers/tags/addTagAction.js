const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');

module.exports = async (req, res) => {
    const responder = jsonResponse(res);
    TagService.addTag(req.body, responder);
};
