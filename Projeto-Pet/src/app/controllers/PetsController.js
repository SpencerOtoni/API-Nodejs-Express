import * as Yup from 'yup';
import Pets from '../models/pets';

class PetsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      file: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails.' });
    }

    const pet = req.body;

    Pets.add(pet)
      .then((petCadastrado) => {
        res.status(201).json(petCadastrado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
}

export default new PetsController();
