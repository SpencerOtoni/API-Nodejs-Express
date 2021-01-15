import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes.js'

const app = express()

app.use(routes)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

export default app