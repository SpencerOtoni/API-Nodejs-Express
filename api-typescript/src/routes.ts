import { Router } from 'express'

import { FornecedorController } from './app/Controllers/FornecedorController'
import { UserController} from './app/Controllers/UserController'

//import authMiddleware from './app/middlewares/auth';

const routes = Router()

const fornecedor = new FornecedorController()
const user = new UserController()

routes.post('/fornecedores', fornecedor.store);
routes.post('/user', user.store);

//routes.use(authMiddleware)

routes.get('/fornecedores', fornecedor.show);
routes.get('/fornecedores/:id', fornecedor.index);
routes.put('/fornecedores/:id', fornecedor.update);
routes.delete('/fornecedores/:id', fornecedor.delete);

export default routes;