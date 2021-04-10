module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Classes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            data_inicio: {
                type: Sequelize.DATEONLY,
            },
            docente_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'People', key: 'id' },
            },
            niveis_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Levels', key: 'id' },
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
        await queryInterface.dropTable('classes')
    },
}
