const education = (connection, Sequelize, resume) => {
  return connection.define('experience', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    role: { type: Sequelize.STRING },
    company: { type: Sequelize.STRING },
    summary: { type: Sequelize.STRING },
    resumeId: { type: Sequelize.INTEGER, references: { model: resume, key: 'id' } },
  }, { paranoid: true })
}


module.exports = education
