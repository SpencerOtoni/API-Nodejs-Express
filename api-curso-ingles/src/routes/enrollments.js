import { Router } from 'express'

import EnrollmentControllere from '../app/controllers/EnrollmentController'

const routes = Router()

routes.get(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.index
)
routes.get(
    '/pessoas/matricula/:matriculaId/confirmado',
    EnrollmentControllere.getMatriculaPorTurma
)
routes.get('/pessoas/matricula/lotacao', EnrollmentControllere.getTurmaLotadas)

routes.post('/pessoas/:estudanteId/matricula', EnrollmentControllere.store)
routes.post(
    '/pessoas/:estudanteId/cancelada',
    EnrollmentControllere.cancelaPessoa
)

routes.put(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.update
)

routes.delete(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.delete
)

export default routes
