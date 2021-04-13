import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ConnectorController from './app/controllers/ConnectorController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/user', UserController.store)
routes.put('/user', UserController.update)

routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.get('/connectors', ConnectorController.getConnectors)

routes.post('/connector', upload.single('file'), ConnectorController.store)
routes.get('/connector', ConnectorController.index)
routes.get('/connector/:id', ConnectorController.show)
routes.put('/connector/:id', ConnectorController.update)
routes.delete('/connector/:id', ConnectorController.delete)

export default routes
