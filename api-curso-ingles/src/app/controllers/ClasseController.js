import database from '../models'
import AppError from '../errors/AppError'

class ClasseController {
    async store(req, res) {
        const { name } = req.body

        const classe = await database.Classes.findOne({ where: { name } })

        if (!classe) {
            throw new AppError('Classe already registered!.', 401)
        }

        const resultClasse = await database.Classes.create(req.body)

        return res.status(201).json({
            resultClasse,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const classe = await database.Classes.findOne({
            where: { id, active: false },
        })

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        return res.json(classe)
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

        const classe = await Types.findByPk(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        const { name } = classe

        const existType = await Types.findOne({ where: { name } })

        if (!existType) {
            throw new AppError('Type already registered!.', 401)
        }

        const newType = await type.update(req.body)

        return res.json(newType)
    }

    async delete(req, res) {
        const { id } = req.params

        const classe = await Types.findByPk(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        const { name } = await type.update({
            active: false,
        })

        return res.json(newType)
    }
}

export default new ClasseController()
