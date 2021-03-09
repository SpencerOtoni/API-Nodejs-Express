module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('answer', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            answer: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            question_id: {
                type: Sequelize.INTEGER,
                references: { model: 'questions', key: 'id' },
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
        await queryInterface.dropTable('answer')
    },
}
