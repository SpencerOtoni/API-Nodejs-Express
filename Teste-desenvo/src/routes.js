import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FormController from './app/controllers/FormController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/user', UserController.store)

routes.post('/session', SessionController.store)

routes.post('/form', FormController.store)

routes.use(authMiddleware)

routes.get('/teste', (req, res) => {
  res.send('teste de rotas')
})

export default routes
