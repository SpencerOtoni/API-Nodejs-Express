import { Router } from 'express'

import PersonController from '../app/controllers/PersonController'

const routes = Router()

routes.get('/person', PersonController.show)
routes.get('/person/:id', PersonController.index)
routes.post('/person', PersonController.store)
routes.put('/person/:id', PersonController.update)
routes.delete('/person/:id', PersonController.delete)

export default routes
