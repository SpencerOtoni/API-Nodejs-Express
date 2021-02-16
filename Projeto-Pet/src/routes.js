import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import Brute from 'express-brute';

import Atendimentos from './app/controllers/AtendimentosController';
import Pets from './app/controllers/PetsController';
import Users from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);
const store = new Brute.MemoryStore();
const bruteforce = new Brute(store);

routes.post('/users', Users.store);
routes.post('/session', bruteforce.prevent, SessionController.store);

routes.use(authMiddleware);

routes.post('/atendimentos', Atendimentos.store);
routes.get('/atendimentos/:id', Atendimentos.index);
routes.get('/atendimentos', Atendimentos.show);
routes.patch('/atendimentos/:id', Atendimentos.update);
routes.delete('/atendimentos/:id', Atendimentos.delete);

routes.post('/pet', upload.single('file'), Pets.store);
routes.get('/pet', Pets.index);

export default routes;
