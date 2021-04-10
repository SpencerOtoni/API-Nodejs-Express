module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Classes',
            [
                {
                    data_inicio: '2020-02-01',
                    niveis_id: 1,
                    docente_id: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    data_inicio: '2020-02-01',
                    niveis_id: 2,
                    docente_id: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    data_inicio: '2020-02-01',
                    niveis_id: 3,
                    docente_id: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    data_inicio: '2020-07-01',
                    niveis_id: 3,
                    docente_id: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('classes', null, {}),
}
