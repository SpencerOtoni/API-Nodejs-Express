import database from '../models'
import AppError from '../errors/AppError'

class PersonController {
    async index(req, res) {
        try {
            const person = await database.People.findAll({
                include: [
                    {
                        model: database.Enrollments,
                        as: 'Matriculas',
                        attributes: ['id', 'status'],
                    },
                ],
            })

            return res.json(person)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async show(req, res) {
        const { id } = req.params
        const person = await database.People.findOne({
            where: { id },
            include: [
                {
                    model: database.Enrollments,
                    as: 'Matriculas',
                    attributes: ['id', 'status'],
                },
            ],
        })

        if (!person) {
            throw new AppError('Person does not exist')
        }

        return res.send(person)
    }

    async store(req, res) {
        const person = await database.People.create(req.body)

        return res.status(201).json(person)
    }

    async update(req, res) {
        const { id } = req.params

        const personExist = await database.People.findOne({
            where: { id },
        })

        if (!personExist) {
            throw new AppError('Person does not exist.')
        }

        const { name } = await personExist.update(req.body)

        return res.json({ name })
    }

    async delete(req, res) {
        const { id } = req.params

        const personExist = await database.People.findOne({
            where: { id },
        })

        if (!personExist) {
            throw new AppError('Person does not exist.')
        }

        const { name } = await personExist.destroy(req.body)

        return res.json({ name })
    }
}

export default new PersonController()
