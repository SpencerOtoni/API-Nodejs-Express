import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

import './database'

class App {
    constructor(){
        this.server = express()

        this.middlewares();
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(bodyParser.urlencoded({ extended: true }))      
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server


