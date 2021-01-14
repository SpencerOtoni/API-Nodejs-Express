import app from '../../app.js'

app.get('/atendimentos', (req, res)=> {
  res.send('Você está na rota de atendimentos')
})