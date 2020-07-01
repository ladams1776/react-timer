const logger = require('../logger');

module.exports = (err, docs) => {
    err && logger.error(`Error hydrating: ${err}`);
    return docs;
};
