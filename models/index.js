const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const ResumeModel = require('./resume')
const ExperienceModel = require('./experience')
const EducationModel = require('./education')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]


const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})



const resume = ResumeModel(connection, Sequelize)
const experience = ExperienceModel(connection, Sequelize, resume)
const education = EducationModel(connection, Sequelize, experience, resume)

resume.hasMany(education)
education.belongsTo(resume)

education.belongsToMany(experience, { through: resume })
experience.belongsToMany(education, { through: resume })

module.exports = {
  resume, experience, education, Op: Sequelize.Op,
}
