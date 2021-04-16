import database from '../models'
import AppError from '../errors/AppError'

class LevelController {
    async store(req, res) {
        const resultClasse = await database.Levels.create(req.body)

        return res.status(201).json({
            resultClasse,
        })
    }

    async getAll(req, res) {
        const classes = await database.Levels.scope('getAll').findAll()

        if (classes.length === 0) {
            throw new AppError('There are no classes forms.')
        }

        return res.json({
            classes,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const classe = await database.Levels.findOne({
            where: { id },
        })

        if (!classe) {
            throw new AppError('Level not found.')
        }

        return res.json({ classe })
    }

    async index(req, res) {
        const Levels = await database.Levels.findAll()

        if (Levels.length === 0) {
            throw new AppError('There are no Levels forms.')
        }

        return res.json({
            Levels,
        })
    }

    async update(req, res) {
        const { id } = req.params

        const classe = await database.Levels.findByPk(id)

        if (!classe) {
            throw new AppError('Level not found.')
        }

        const newType = await database.Levels.update(req.body, {
            where: { id },
        })

        return res.json(newType)
    }

    async delete(req, res) {
        const { id } = req.params

        const classe = await database.Levels.findByPk(id)

        if (!classe) {
            throw new AppError('Level not found.')
        }

        await database.Levels.update(
            {
                active: false,
            },
            { where: { id } }
        )

        return res.json({ id })
    }
}

export default new LevelController()
