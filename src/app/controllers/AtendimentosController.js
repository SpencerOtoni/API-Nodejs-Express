import Atendimento from '../models/atendimentos'

class AtendimentosController {

  async store(req, res){
    const atendimento = req.body

   await Atendimento.add(atendimento , res)
  }

  async index(req, res){
    const { id } = req.params

    await Atendimento.listAtendimento(id, res)
  }

  async show(req, res){

   await Atendimento.listAtendimentos(res)
  }

  async update(req, res){
    const { id } = req.params
    const atendimento = req.body

    await Atendimento.update(id, atendimento, res)
  }

  async delete(req, res){
    const { id } = req.params

    await Atendimento.delete(id, res)
  }
}

export default new AtendimentosController



