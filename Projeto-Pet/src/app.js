import 'dotenv/config';

import express from 'express';
import { resolve } from 'path';

import * as Sentry from '@sentry/node';
import 'express-async-errors';
import Youch from 'youch';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import sentryConfig from './config/sentry';

import routes from './routes';

import './database';
import tabela from './database/tabelas';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

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
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
<<<<<<< HEAD
    // this.server.use(bodyParser.urlencoded({ extended: true }));
=======

>>>>>>> 4ce9c8129b9581c23459ab4e31118a954adcccf4
    this.server.use(
      '/pet',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    if (process.env.NODE_ENV !== 'development') {
      this.server.use(limiter);
    }
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
