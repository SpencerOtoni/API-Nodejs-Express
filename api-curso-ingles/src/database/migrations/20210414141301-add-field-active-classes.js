module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Classes', 'active', {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Classes', 'active')
    },
}
