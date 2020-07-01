const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');

//@TODO: Need to do error handling in these request handlers
module.exports = (req, res) => {
    const responder = jsonResponse(res);
    TagService.updateTag(req.body, responder)
};