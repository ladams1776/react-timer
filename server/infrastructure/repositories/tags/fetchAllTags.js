const hydrateAndResponse = require("../../hydrators/hydrateAndResponse");
const Tag = require("../../models/Tag");

module.exports = (res) => Tag.find({}, hydrateAndResponse(res)).sort('-_id');

