

module.exports = (err, docs) => {
    console.log('In Hydrator');
    if (err) return `There was an issue! ${err}`;
    return docs;
};