import Atendimento from '../models/atendimentos'

class AtendimentosController {

  store(req, res){
    const atendimento = req.body

    Atendimento.add(atendimento , res)
  }

  index(req, res){
    const { id } = req.params

    Atendimento.listAtendimento(id, res)
  }

  async show(req, res){

    Atendimento.listAtendimentos(res)
  }

  async update(req, res){
    const { id } = req.params
    const atendimento = req.body

    Atendimento.update(id, atendimento, res)
  }

  async delete(req, res){
    const { id } = req.params

    Atendimento.delete(id, res)
  }
}

export default new AtendimentosController()



