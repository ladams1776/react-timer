const Task = require("../../../../models/Task");
const hydrateAndSave = require("./hydrateAndSave");

/**
 * 
 * @param {Object} dto the incoming dto
 * @param {Function} res response function
 */
module.exports = async (dto, res) => Task.findOne({ _id: dto.id }, hydrateAndSave(dto, res));