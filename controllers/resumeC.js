const resume = require('../resume')

const getAllResume = (request, response) => {
  return response.send(resume)
}

const getExpById = (request, response) => {
  const { id } = request.params

  const foundExp = resume.experience.filter((experience) => experience.id === parseInt(request.params.id))

  return response.send(foundExp)
}

const createNewExp = (request, response) => {
  const { id, role, company, summary } = request.body

  if (!id || !role || !company || !summary) {
    return response.status(400).send('Oops! The following is required: id, role, company, summary')
  }
  const newExp = resume.experience.create({ id, role, company, summary })

  return response.status(201).send(newExp)
}


module.exports = { getAllResume, getExpById, createNewExp }
