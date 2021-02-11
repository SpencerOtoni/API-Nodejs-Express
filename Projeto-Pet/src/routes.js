import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import Atendimentos from './app/controllers/AtendimentosController';
import Pets from './app/controllers/PetsController';
import Users from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', Users.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/atendimentos', Atendimentos.store);
routes.get('/atendimentos/:id', Atendimentos.index);
routes.get('/atendimentos', Atendimentos.show);
routes.patch('/atendimentos/:id', Atendimentos.update);
routes.delete('/atendimentos/:id', Atendimentos.delete);

routes.post('/pet', upload.single('file'), Pets.store);

export default routes;
