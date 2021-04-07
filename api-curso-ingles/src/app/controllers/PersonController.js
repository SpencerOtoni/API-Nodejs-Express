import database from '../models'
import AppError from '../errors/AppError'

class PersonController {
    async show(req, res) {
        try {
            const person = await database.Person.findAll()

            return res.json(person)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async index(req, res) {
        const { id } = req.params
        const person = await database.Person.findOne({
            where: { id },
        })

        if (!person) {
            throw new AppError('Person does not exist')
        }

        return res.send(person)
    }

    async store(req, res) {
        const person = await database.Person.create(req.body)

        return res.status(201).json(person)
    }

    async update(req, res) {
        const { id } = req.params

        const personExist = await database.Person.findOne({
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

        const personExist = await database.Person.findOne({
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
