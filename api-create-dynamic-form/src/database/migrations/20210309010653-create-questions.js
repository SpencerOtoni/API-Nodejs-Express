module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            form_id: {
                type: Sequelize.INTEGER,
                references: { model: 'form', key: 'id' },
                onUpdate: 'CASCADE',
                OnDelete: 'CASCADE',
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('questions')
    },
}
