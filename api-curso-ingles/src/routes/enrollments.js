import { Router } from 'express'

import EnrollmentControllere from '../app/controllers/EnrollmentController'

const routes = Router()

routes.get(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.index
)
routes.post('/pessoas/:estudanteID/matricula', EnrollmentControllere.store)
routes.put(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.update
)
routes.delete(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    EnrollmentControllere.delete
)

export default routes
