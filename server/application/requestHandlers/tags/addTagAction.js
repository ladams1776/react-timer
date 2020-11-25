const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');
const RequestToTagDto = require('./assemblers/RequestToTagDto');

module.exports = (req, res) => {
    const responder = jsonResponse(res);
    const dto = RequestToTagDto(req);
    TagService.addTag(dto, responder);
};  