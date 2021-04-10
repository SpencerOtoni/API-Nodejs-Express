import database from '../models'
import AppError from '../errors/AppError'

class EnrollmentController {
    async index(req, res) {
        const { estudanteID, matriculaID } = req.params

        const estudanteAndMatricula = await database.Enrollments.findOne({
            where: {
                estudante_id: estudanteID,
                turma_id: matriculaID,
            },
        })

        if (!estudanteAndMatricula) {
            throw new AppError('Student does not exist')
        }

        return res.send(estudanteAndMatricula)
    }

    async store(req, res) {
        const { estudanteID } = req.params
        const { turma_id } = req.body

        const estudanteAndMatricula = await database.Enrollments.findOne({
            where: {
                estudante_id: estudanteID,
                turma_id,
            },
        })

        if (estudanteAndMatricula) {
            throw new AppError('Student já matriculado.')
        }

        const novaMatricula = { ...req.body, estudante_id: estudanteID }

        const novaMatriculaEstudante = await database.Enrollments.create(
            novaMatricula
        )

        return res.status(201).send(novaMatriculaEstudante)
    }
}

export default new EnrollmentController()
