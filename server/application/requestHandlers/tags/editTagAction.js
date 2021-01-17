const TagService = require('../../../domain/services/tags/TagService');
const apiResponse = require('../apiResponse');
const jsonResponse = require('../jsonResponse');
const { UPDATE_DATE_TIME_RESPONSE } = require('../reduxTypes');

//@TODO: Need to do error handling in these request handlers
module.exports = (req, res) => {
    console.log('working here - edit Tag Action');
    const feature = false;
    const responder = ifFeatureChangeResponse(feature, res);
    TagService.updateTag(req.body, responder)
};

const ifFeatureChangeResponse = (feature, res) => {
    if (feature) {
        return apiResponse(res, UPDATE_DATE_TIME_RESPONSE);
    }
    
    return jsonResponse(res);
};