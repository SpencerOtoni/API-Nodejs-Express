import { Router } from 'express'

import LevelController from '../app/controllers/LevelController'

const routes = Router()

routes.get('/classe/:id', LevelController.show)
routes.get('/classe', LevelController.index)
routes.get('/classe/all', LevelController.getAll)
routes.post('/classe', LevelController.store)
routes.put('/classe/:id', LevelController.update)
routes.delete('/classe/:id', LevelController.delete)

export default routes
