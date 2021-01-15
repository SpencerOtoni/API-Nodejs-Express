class Atendimentos {
  index(req, res){
    return res.send('Você está na rota de atendimentos')
  }

  store(req, res){
    return res.send('Você está na rota de atendimentos e está realizando um POST')
  }
}

export default new Atendimentos()



