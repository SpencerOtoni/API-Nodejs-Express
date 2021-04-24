import 'dotenv/config';
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';
import helmet from 'helmet';
import { errors } from 'celebrate';

import { createServer } from 'http'
import { Server } from 'socket.io'

import path from 'path';
import { renderFile } from 'ejs';


import createConnection from './database'

import { routes } from './routes'
import { AppError } from './errors/AppError'

createConnection()

const app = express()

const http = createServer(app)
const io = new Server(http)

const publicPath = path.join(__dirname, '..', 'public');

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json())

app.use(express.static(publicPath));
app.set('views', publicPath);
app.engine('html', renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (request: Request, response: Response) => {
  return response.render('html/client.html');
});
app.get('/pages/admin', (request: Request, response: Response) => {
  return response.render('html/admin.html');
});

app.use(routes)

app.use(errors());
app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if( err instanceof AppError){
            return res.status(err.statusCode).json({
                message: err.message
            })
        }

        return res.status(500).json({
            status: "Error",
            message: `Internal server error ${err.message}`
        })
    }
)

export { http, io };