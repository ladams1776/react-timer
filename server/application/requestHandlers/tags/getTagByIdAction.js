const TagService = require('../../../domain/services/tags/TagService');
const jsonResponse = require('../jsonResponse');

module.exports = (req, res) => {
  const responseHandler = jsonResponse(res);
  TagService.fetchTagById(req.params.id, responseHandler);
};