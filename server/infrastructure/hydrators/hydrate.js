module.exports = (err, docs) => {
    if (err) return `There was an issue! ${err}`;
    return docs;
};
