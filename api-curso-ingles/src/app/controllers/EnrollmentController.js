import database from '../models'
import AppError from '../errors/AppError'

class EnrollmentController {
    async index(req, res) {
        const { estudanteId, matriculaId } = req.params

        const estudanteAndMatricula = await database.Enrollments.findOne({
            where: {
                estudante_id: estudanteId,
                id: matriculaId,
            },
        })

        if (!estudanteAndMatricula) {
            throw new AppError('Student does not exist')
        }

        return res.json(estudanteAndMatricula)
    }

    async store(req, res) {
        const { estudanteId } = req.params
        const { turma_id } = req.body

        const estudanteAndMatricula = await database.Enrollments.findOne({
            where: {
                estudante_id: estudanteId,
                turma_id,
            },
        })

        if (estudanteAndMatricula) {
            throw new AppError('Student já matriculado.')
        }

        const novaMatricula = { ...req.body, estudante_id: estudanteId }

        const novaMatriculaEstudante = await database.Enrollments.create(
            novaMatricula
        )

        return res.status(201).json(novaMatriculaEstudante)
    }

    async update(req, res) {
        const { estudanteId, matriculaId } = req.params

        const estudanteAndMatricula = await database.Enrollments.findOne({
            where: {
                estudante_id: estudanteId,
                id: matriculaId,
            },
        })

        if (!estudanteAndMatricula) {
            throw new AppError('Student does not exist')
        }

        const matriculaAtualizada = await estudanteAndMatricula.update(req.body)

        return res.json(matriculaAtualizada)
    }

    async delete(req, res) {
        const { matriculaId } = req.params

        const matriculaExist = await database.Enrollments.findOne({
            where: { id: matriculaId },
        })

        if (!matriculaExist) {
            throw new AppError('Matricula does not exist.')
        }

        const { name } = await matriculaExist.destroy()

        return res.json({ name })
    }
}

export default new EnrollmentController()
