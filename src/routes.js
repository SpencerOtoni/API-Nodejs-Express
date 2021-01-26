import { Router } from 'express'

import Atendimentos from './app/controllers/AtendimentosController'
import Pets from './app/controllers/PetsController'

const routes = new Router()

routes.post('/atendimentos', Atendimentos.store)
routes.get('/atendimentos/:id', Atendimentos.index)
routes.get('/atendimentos', Atendimentos.show)
routes.patch('/atendimentos/:id', Atendimentos.update)
routes.delete('/atendimentos/:id', Atendimentos.delete)

routes.post('/pet', Pets.store)

export default routes