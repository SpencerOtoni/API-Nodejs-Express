import * as Yup from 'yup';
import Pets from '../models/pets';

class PetsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails.' });
    }

    const idUser = req.userId;
    const pet = { ...req.body, idUser, imagem: req.file };

    Pets.add(pet)
      .then((petCadastrado) => {
        res.status(201).json(petCadastrado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }

  index(req, res) {
    const id = req.userId;
  
    Pets.listPets(id)
      .then((listPets) => {
        res.status(200).json(listPets);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
}

export default new PetsController();
