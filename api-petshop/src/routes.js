import { Router } from 'express'

import FornecedorController from './app/Controllers/FornecedorController'

const routes = new Router()

routes.post('/fornecedores', FornecedorController.store)