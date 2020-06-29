const Tag = require('../../models/Tag');

const assembleTag = tagDto => {
    const tag = new Tag();
    tag.toObject();
    tag.description = tagDto.description;
    tag.name = tagDto.name;
    return tag;
};

module.exports = assembleTag;