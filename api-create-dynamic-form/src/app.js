import 'dotenv/config'
import express from 'express'

import AppError from './app/errors/AppError'
import routes from './routes'

import './database'

class App {
    constructor() {
        this.server = express()

        this.middlewares()
        this.routes()
        this.error()
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }

    error() {
        this.server.use((err, req, res, next) => {
            console.error(err)
            if (err instanceof AppError) {
                return res.status(err.statusCode).json({
                    status: 'Error',
                    message: err.message,
                })
            }
            console.error(err)
            return res.status(500).json({
                status: 'Error',
                message: `Internal server error ${err.message}`,
            })
        })
    }
}

export default new App().server
