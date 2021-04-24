import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'


import createConnection from './database'

import { routes } from './routes'
import { AppError } from './errors/AppError'

createConnection()

const app = express()

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {
    console.log('Se conectou', socket.id)
})

app.use(express.json())
app.use(routes)

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

http.listen(3333, ()=> console.log('Servidor online!'))
