const TagService = require('../../../domain/services/tags/TagService');

module.exports = async (req, res) => {
    const { id } = req.params;
    TagService.deleteTag(id);
    res.jsonp({ tagId: id, isSuccess: true });
};
