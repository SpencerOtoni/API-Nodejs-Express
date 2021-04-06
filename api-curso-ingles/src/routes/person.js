import { Router } from 'express'

import PersonController from '../app/controllers/PersonController'

const routes = Router()

routes.get('/person', PersonController.show)
routes.get('/person/:id', PersonController.index)

export default routes
