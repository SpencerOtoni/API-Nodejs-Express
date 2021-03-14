import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FormController from './app/controllers/FormController'
import AnswerController from './app/controllers/AnswerController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/user', UserController.store)

routes.post('/session', SessionController.store)

routes.get('/answer/:id', AnswerController.index)

routes.use(authMiddleware)

routes.post('/form', FormController.store)
routes.get('/form', FormController.show)
routes.get('/form/:id', FormController.index)

routes.post('/answer', AnswerController.store)

export default routes
