module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Enrollments',
            [
                {
                    status: 'confirmado',
                    estudante_id: 1,
                    turma_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: 'confirmado',
                    estudante_id: 2,
                    turma_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: 'confirmado',
                    estudante_id: 3,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: 'confirmado',
                    estudante_id: 4,
                    turma_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: 'cancelado',
                    estudante_id: 1,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    status: 'cancelado',
                    estudante_id: 2,
                    turma_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('Enrollments', null, {}),
}
