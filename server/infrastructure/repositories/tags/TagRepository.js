const Tag = require('../../models/Tag');
const hydrate = require('../../hydrators/hydrate');

const TagRepository = {
  fetchAllTags: () => Tag.find({}, hydrate),
};

module.exports = TagRepository;
