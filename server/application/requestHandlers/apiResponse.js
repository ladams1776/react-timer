/**
 * Moving towards this response. Moving this way of catching data loads 
 * on the front end. 
 * @param {Function} res express response callback
 */
module.exports = (res, type) => data => {
    res.jsonp({ items: data, type });
}