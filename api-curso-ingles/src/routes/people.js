import { Router } from 'express'

import PersonController from '../app/controllers/PeopleController'

const routes = Router()

routes.get('/person', PersonController.index)
routes.get('/person/:id', PersonController.show)
routes.post('/person', PersonController.store)
routes.put('/person/:id', PersonController.update)
routes.delete('/person/:id', PersonController.delete)

export default routes
