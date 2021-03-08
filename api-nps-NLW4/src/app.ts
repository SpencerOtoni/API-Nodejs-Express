import 'reflect-metadata'
//import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express'
//import cors from 'cors';

import 'express-async-errors'

import createConnection from './database'
import { router } from './routes'
import { AppError } from './errors/AppError'

createConnection()
const app = express()

//app.use(cors());
app.use(express.json())
app.use(router)

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

export { app }
