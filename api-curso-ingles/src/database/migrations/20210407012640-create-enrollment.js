module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('enrollments', {
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
                references: { model: 'person', key: 'id' },
            },
            turma_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'classes', key: 'id' },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('enrollments')
    },
}
