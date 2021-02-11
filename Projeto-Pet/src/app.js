import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';

import * as Sentry from '@sentry/node';
import 'express-async-errors';
import Youch from 'youch';

import sentryConfig from './config/sentry';

import routes from './routes';

import './database';
import tabela from './database/tabelas';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.expectionHandler();

    tabela.init();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  expectionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error.' });
    });
  }
}

export default new App().server;
