import 'dotenv/config';
import express from 'express';

import fornecedor from './app/models/Fornecedor'
import routes from './routes'


class App {

  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.createTable()
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json())
  }

  routes(): void {
    this.server.use(routes)
  }

  createTable(): void {
    fornecedor.sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)
  }

}
  
  export { App }