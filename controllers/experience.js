const models = require('../models')
const getAllExperience = async (request, response) => {
  const experience = await models.experience.findAll()

  return experience
    ? response.send(experience)
    : response.sendStatus(404)
}
const getExpById = async (request, response) => {
  const { id } = request.params

  const foundExperience = await models.experience.findOne({
    where: { id },
    include: [{
      model: models.education,
      include: [{ model: models.resume }]
    }]
  })

  return foundExperience
    ? response.send(foundExperience)
    : response.sendStatus(404)
}

module.exports = {

  getAllExperience,
  getExpById,

}
