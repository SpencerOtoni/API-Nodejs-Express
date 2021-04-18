import { PeopleServices } from '../services'
import AppError from '../errors/AppError'

const peopleService = new PeopleServices()
class PersonController {
    async index(req, res) {
        try {
            const person = await peopleService.getRegistros()
            return res.json(person)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async show(req, res) {
        const { id } = req.params
        const person = await peopleService.getOneRegistro(id)

        if (!person) {
            throw new AppError('Person does not exist')
        }

        return res.send(person)
    }

    async store(req, res) {
        const person = await peopleService.createRegistro(req.body)
        console.log(person)
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
