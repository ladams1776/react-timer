const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');

module.exports = (req, res) => {
    const responder = jsonResponse(res);
    TagService.addTag(req.body, responder);
};  