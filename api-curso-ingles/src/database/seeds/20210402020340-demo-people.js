module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'person',
            [
                {
                    name: 'John Doe',
                    active: true,
                    email: 'ana@ana.com',
                    role: 'estudante',
                    created_at: new Date(),
                    updated_at: new Date(),
                },

                {
                    name: 'Marcos Cintra',
                    active: true,
                    email: 'marcos@marcos.com',
                    role: 'estudante',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Mel',
                    active: true,
                    email: 'mel@mel.com',
                    role: 'professor',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Roben',
                    active: true,
                    email: 'roben@roben.com',
                    role: 'professor',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        )
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('person', null, {})
    },
}
