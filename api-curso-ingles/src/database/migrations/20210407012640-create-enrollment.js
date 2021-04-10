module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Enrollments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            estudante_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'People', key: 'id' },
            },
            turma_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Classes', key: 'id' },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
        })
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Enrollments')
    },
}
