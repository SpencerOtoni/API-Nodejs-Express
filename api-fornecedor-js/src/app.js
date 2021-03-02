import 'dotenv/config';

import express from 'express';
import fornecedor from './app/models/Fornecedor'
import routes from './routes'


class App {
    constructor() {
      this.server = express();

      this.middlewares();
      this.routes();
      this.createTable()
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
      this.server.use(routes)
    }

    createTable(){
      fornecedor.sync()
      .then(() => console.log('Tabela criada com sucesso'))
      .catch(console.log)
    }

  }

  export default new App().server;
