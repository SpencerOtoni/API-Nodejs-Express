import { Router } from 'express'

import FornecedorController from './app/Controllers/FornecedorController'

const routes = new Router()

routes.post('/fornecedores', FornecedorController.store);
routes.get('/fornecedores', FornecedorController.show);
routes.get('/fornecedores/:id', FornecedorController.index);
routes.put('/fornecedores/:id', FornecedorController.update);
routes.delete('/fornecedores/:id', FornecedorController.delete);

export default routes;
