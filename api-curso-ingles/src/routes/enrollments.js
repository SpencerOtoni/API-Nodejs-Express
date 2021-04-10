import { Router } from 'express'

import EnrollmentControllere from '../app/controllers/EnrollmentController'

const routes = Router()

routes.get(
    '/pessoas/:estudanteID/matricula/:matriculaID',
    EnrollmentControllere.index
)

routes.post('/pessoas/:estudanteID/matricula', EnrollmentControllere.store)

export default routes
