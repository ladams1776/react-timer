const hydrate = require('./hydrate');
const logger = require('../logger');

const hydrateAndResponse = responder => (err, docs) => {
  const item = hydrate(err, docs);
  err && logger.error(err);
  docs && logger.debug(`hydrated: ${docs}`);
  !item && responder({ error: err, items: [] });
  item && responder({ items: item });
};

module.exports = hydrateAndResponse;
