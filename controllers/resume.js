const models = require('../models')
const getAllResume = async (request, response) => {
  const resume = await models.resume.findAll()

  return resume
    ? response.send(resume)
    : response.sendStatus(404)
}


const getResumeById = async (request, response) => {
  const { id } = request.params

  const foundResume = await models.resume.findAll({
    where: {
      [models.Op.or]: [
        { id: { [models.Op.like]: id } },
        { name: { [models.Op.like]: `%${id}%` } },
      ]
    },
    include: [{
      model: models.experience,
      include: [{ model: models.education }]
    }]
  })

  return foundResume
    ? response.send(foundResume)
    : response.sendStatus(404)
}

module.exports = {
  getAllResume,
  getResumeById,

}
