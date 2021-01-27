import express from 'express'
import faker from 'faker'


const app = express()


app.use(express.json())

app.get('/:cpf', (req, res) => {
    const { cpf } = req.params

    res.status(200).json({
        cpf,
        nome: faker.name.findName(),
        dataDeNascimento: faker.date.past()
    })
})

app.listen(8082, () => console.log('Api rodando'))