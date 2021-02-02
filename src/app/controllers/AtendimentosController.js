import Atendimento from '../models/atendimentos'

class AtendimentosController {

  store(req, res){
    const atendimento = req.body

    Atendimento.add(atendimento).then(
      atendimentoCadastrado => {  
        res.status(201).json(atendimentoCadastrado) 
      }
    ).catch(erro => {
      res.status(400).json(erro)
    })

    
  }

  index(req, res){
    const { id } = req.params

    Atendimento.listAtendimento(id).then(
      listAtendimento => {
        res.status(200).json(listAtendimento) 
      }
    ).catch(erro => {
      res.status(400).json(erro)
    })
  }

  async show(req, res){

    Atendimento.listAtendimentos().then(
      listAtendimentos =>{
        res.status(200).json(listAtendimentos) 
      }
    ).catch(erro => {
      res.status(400).json(erro)
    })
  }

  async update(req, res){
    const { id } = req.params
    const atendimento = req.body

    Atendimento.update(id, atendimento).then(
      updateAtendimento => {
        res.status(200).json(updateAtendimento) 
      }
    ).catch(erro => {
      res.status(400).json(erro)
    })
  }

  async delete(req, res){
    const { id } = req.params

    Atendimento.delete(id).then(
      deleteAtendimento => {
        res.status(200).json(id) 
      }
    ).catch(erro => {
      res.status(400).json(erro)
    })
  }
}

export default new AtendimentosController()



