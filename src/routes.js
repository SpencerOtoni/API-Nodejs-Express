import { Router } from "express";

import Atendimentos from "./app/controllers/AtendimentosController";
import Pets from "./app/controllers/PetsController";
import Users from "./app/controllers/UserController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", Users.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.post("/atendimentos", Atendimentos.store);
routes.get("/atendimentos/:id", Atendimentos.index);
routes.get("/atendimentos", Atendimentos.show);
routes.patch("/atendimentos/:id", Atendimentos.update);
routes.delete("/atendimentos/:id", Atendimentos.delete);

routes.post("/pet", Pets.store);

export default routes;
