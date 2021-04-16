import database from '../models'
import AppError from '../errors/AppError'

class ClasseController {
    async store(req, res) {
        const resultClasse = await database.Classes.create(req.body)

        return res.status(201).json({
            resultClasse,
        })
    }

    async getAll(req, res) {
        const classes = await database.Classes.scope('getAll').findAll()

        if (classes.length === 0) {
            throw new AppError('There are no classes forms.')
        }

        return res.json({
            classes,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const classe = await database.Classes.findOne({
            where: { id },
        })

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        return res.json({ classe })
    }

    async index(req, res) {
        const classes = await database.Classes.findAll()

        if (classes.length === 0) {
            throw new AppError('There are no classes forms.')
        }

        return res.json({
            classes,
        })
    }

    async update(req, res) {
        const { id } = req.params

        const classe = await database.Classes.findByPk(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        const newType = await database.Classes.update(req.body, {
            where: { id },
        })

        return res.json(newType)
    }

    async delete(req, res) {
        const { id } = req.params

        const classe = await database.Classes.findByPk(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        await database.Classes.update(
            {
                active: false,
            },
            { where: { id } }
        )

        return res.json({ id })
    }
}

export default new ClasseController()
