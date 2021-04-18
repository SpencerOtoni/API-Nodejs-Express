import { Router } from 'express'

import ClasseController from '../app/controllers/ClasseController'

const routes = Router()

routes.get('/classe', ClasseController.index)
routes.get('/classe/ativas', ClasseController.getAll)
routes.get('/classe/:id', ClasseController.show)

routes.post('/classe', ClasseController.store)
routes.put('/classe/:id', ClasseController.update)
routes.delete('/classe/:id', ClasseController.delete)

export default routes
