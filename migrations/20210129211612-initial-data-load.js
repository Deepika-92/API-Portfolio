module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('resume', [
      { name: 'Deepika Sharma' },
    ])
    await queryInterface.bulkInsert('experience', [
      { role: 'Computer Teacher' },
      { role: 'Assembler-1' }
    ])
    await queryInterface.bulkInsert('education', [
      { degree: 'Certificate' },
      { degree: 'Master of Computer' },
      { degree: 'Bachelor of Computer Application' }
    ])
  },

  down: async (queryInterface,) => {
    /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable{(}'users');
         */
    await queryInterface.bulkDelete('education')

    await queryInterface.bulkDelete('experience')

    return queryInterface.bulkDelete('resume')
  }
}
