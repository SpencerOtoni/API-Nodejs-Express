import 'dotenv/config';
import express from 'express';

import fornecedor from './app/models/Fornecedor'
import user from './app/models/User'

import routes from './routes'

const models = [fornecedor, user];

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
    models.map((model)=> {
      model.sync()
      .then(() => console.log('Tabela criada com sucesso'))
      .catch(console.log)
    })
  }

}
  
  export { App }