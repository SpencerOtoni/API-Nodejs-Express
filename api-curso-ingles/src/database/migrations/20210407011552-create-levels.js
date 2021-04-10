module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Levels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            descr_level: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Levels')
    },
}
