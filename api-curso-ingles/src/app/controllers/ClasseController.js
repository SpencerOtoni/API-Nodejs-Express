import { Op } from 'sequelize'

import { ClassServices } from '../services'

import AppError from '../errors/AppError'

const ClasseServices = new ClassServices()
class ClasseController {
    async index(req, res) {
        const { data_inicial, data_final } = req.query

        const where = {}
        data_inicial || data_final ? (where.data_inicio = {}) : null
        data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null
        data_final ? (where.data_inicio[Op.lte] = data_final) : null

        const classes = await ClasseServices.getRegistrosAtivos(where)

        if (classes.length === 0) {
            throw new AppError('There are no classes forms.')
        }

        return res.json({
            classes,
        })
    }

    async getAll(req, res) {
        const classes = await ClasseServices.getRegistrosAtivos()

        if (classes.length === 0) {
            throw new AppError('There are no classes forms.')
        }

        return res.json({
            classes,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const classe = await ClasseServices.getOneRegistro(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        return res.json({ classe })
    }

    async store(req, res) {
        const resultClasse = await ClasseServices.createRegistro(req.body)

        return res.status(201).json({
            resultClasse,
        })
    }

    async update(req, res) {
        const { id } = req.params

        const classe = await ClasseServices.getOneRegistro(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        const newType = await ClasseServices.updateRegistro(req.body, id)

        return res.json(newType)
    }

    async delete(req, res) {
        const { id } = req.params

        const classe = await ClasseServices.getOneRegistro(id)

        if (!classe) {
            throw new AppError('Classe not found.')
        }

        await ClasseServices.deleteRegistro(id)

        return res.json({ id })
    }
}

export default new ClasseController()
