import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FormController from './app/controllers/FormController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/user', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)
routes.post('/form', FormController.store)

routes.get('/token', (req, res) => {
    res.json({ id: req.userId })
})

export default routes
