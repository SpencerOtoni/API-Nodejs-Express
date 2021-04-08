module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'levels',
            [
                {
                    descr_nivel: 'básico',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    descr_nivel: 'intermediário',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    descr_nivel: 'avançado',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('levels', null, {}),
}
