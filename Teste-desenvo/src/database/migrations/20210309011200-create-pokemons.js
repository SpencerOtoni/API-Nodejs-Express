module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokedex_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      generation: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      evolution: {
        type: Sequelize.STRING,
      },
      family_id: {
        type: Sequelize.INTEGER,
      },
      type_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weather_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weather_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stat_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      atk: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      def: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      legendary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cp39: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cp40: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        default: true,
        allowNull: true,
      },
      type_1: {
        type: Sequelize.INTEGER,
        references: { model: 'types', key: 'id' },
        onUpdate: 'CASCADE',
        OnDelete: 'CASCADE',
        allowNull: false,
      },
      weather_1: {
        type: Sequelize.INTEGER,
        references: { model: 'weather', key: 'id' },
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
    await queryInterface.dropTable('pokemons')
  },
}
