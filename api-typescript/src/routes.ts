import { Router } from 'express'

import { UserController} from './app/Controllers/UserController'
import { SessionController } from './app/Controllers/SessionController'
import { FornecedorController } from './app/Controllers/FornecedorController'

import authMiddleware from './app/middlewares/auth';

const routes = Router()

const fornecedor = new FornecedorController()
const user = new UserController()
const session = new SessionController()


routes.post('/user', user.store);
routes.post('/session', session.store);

routes.use(authMiddleware)

routes.post('/fornecedores', fornecedor.store);
routes.get('/fornecedores', fornecedor.show);
routes.get('/fornecedores/:id', fornecedor.index);
routes.put('/fornecedores/:id', fornecedor.update);
routes.delete('/fornecedores/:id', fornecedor.delete);

export default routes;