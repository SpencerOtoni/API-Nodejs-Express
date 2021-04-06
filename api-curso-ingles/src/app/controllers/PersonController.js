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
}

export default new PersonController()
