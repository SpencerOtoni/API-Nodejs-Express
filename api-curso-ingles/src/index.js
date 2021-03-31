import express from 'express'

const app = express()

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Teste de rota.')
})

app.listen(port, () => {
    console.log(`🚀 Server started! Port: ${port}!`)
})
