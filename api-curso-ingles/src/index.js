import express from 'express'
import 'express-async-errors'

import routes from './routes'
import AppError from './app/errors/AppError'

const app = express()
const port = 3000

app.use(express.json())

routes(app)

app.use((err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        })
    }

    return res.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`,
    })
})

app.listen(port, () => {
    console.log(`🚀 Server started! Port: ${port}!`)
})
