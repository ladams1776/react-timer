const Tag = require('../../models/Tag');
const hydrate = require('../../hydrators/hydrate');

const TagRepository = {
  fetchAllTags: () => Tag.find({}, hydrate),
  deleteTag: id => Tag.deleteOne({ _id: id }),
};

module.exports = TagRepository;
