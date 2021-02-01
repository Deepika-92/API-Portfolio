const models = require('../models')
const getAllEducation = async (request, response) => {
  const education = await models.education.findAll({
    include: [
      { model: models.resume },
      { model: models.experience },
    ]
  })

  return education
    ? response.send(education)
    : response.sendStatus(404)
}


const getEduById = async (request, response) => {
  const { id } = request.params

  const foundEducation = await models.education.findOne({
    where: {
      [models.Op.or]: [
        { id: id },
        { title: { [models.Op.like]: `%${id}%` } },
      ]
    },
    include: [{ model: models.resume }, { model: models.education }]
  })

  return foundEducation
    ? response.send(foundEducation)
    : response.sendStatus(404)
}




module.exports = {

  getAllEducation,
  getEduById
}
