import { Router } from 'express'

import atendimentos from './app/controllers/atendimentos.js'

const routes = new Router()

routes.get('/atendimentos', atendimentos.index)
routes.post('/atendimentos', atendimentos.store)

export default routes