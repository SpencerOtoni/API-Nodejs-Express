import * as Yup from 'yup';
import Atendimento from "../models/atendimentos";

class AtendimentosController {
  async store(req, res) {

    const schema = Yup.object().shape({
      cliente: Yup.string().required(),
      pet: Yup.string().required(),
      servico: Yup.string().required(),
      data: Yup.date().required(),
      dataCriacao: Yup.date().required(),
      status: Yup.string().required(),
      observacoes: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails.' });
    }

    const atendimento = req.body;

    Atendimento.add(atendimento)
      .then((atendimentoCadastrado) => {
        res.status(201).json(atendimentoCadastrado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }

  index(req, res) {
    const { id } = req.params;

    Atendimento.listAtendimento(id)
      .then((listAtendimento) => {
        res.status(200).json(listAtendimento);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }

  async show(req, res) {
    Atendimento.listAtendimentos()
      .then((listAtendimentos) => {
        res.status(200).json(listAtendimentos);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }

  async update(req, res) {
    const { id } = req.params;
    const atendimento = req.body;

    Atendimento.update(id, atendimento)
      .then((updateAtendimento) => {
        res.status(200).json(updateAtendimento);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }

  async delete(req, res) {
    const { id } = req.params;

    Atendimento.delete(id)
      .then((deleteAtendimento) => {
        res.status(200).json(id);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
}

export default new AtendimentosController();
