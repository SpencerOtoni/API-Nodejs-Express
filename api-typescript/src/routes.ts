import { Router } from 'express'

import { FornecedorController } from './app/Controllers/FornecedorController'

import authMiddleware from './app/middlewares/auth';

const routes = Router()

const fornecedor = new FornecedorController()

routes.post('/fornecedores', fornecedor.store);

routes.use(authMiddleware)

routes.get('/fornecedores', fornecedor.show);
routes.get('/fornecedores/:id', fornecedor.index);
routes.put('/fornecedores/:id', fornecedor.update);
routes.delete('/fornecedores/:id', fornecedor.delete);

export default routes;