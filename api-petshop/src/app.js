import 'dotenv/config';

import express from 'express';
import fornecedor from './app/models/Fornecedor'
import routes from './routes'

import './database';

class App {
    constructor() {
      this.server = express();
  
      this.middlewares();
      this.routes();
      this.createTable()
    }
  
    middlewares() {
    }
  
    routes() {
      this.server.use(routes)
    }

    createTable(){
      fornecedor.teste().sync()
      .then(() => console.log('Tabela criada com sucesso'))
      .catch(console.log)
    }

  }
  
  export default new App().server;