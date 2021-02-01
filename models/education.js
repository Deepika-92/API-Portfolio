const education = (connection, Sequelize, resume) => {
  return connection.define('education', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    degree: { type: Sequelize.STRING },
    fieldOfStudy: { type: Sequelize.STRING },
    institution: { type: Sequelize.STRING },
    resumeId: { type: Sequelize.INTEGER, references: { model: resume, key: 'id' } },
  }, { paranoid: true })
}


module.exports = education
