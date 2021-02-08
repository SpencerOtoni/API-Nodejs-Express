import * as Yup from 'yup';
import User from '../models/users';

class UserController {
  async store(req, res) {

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails.' });
    }

    const user = req.body;

    User.add(user)
      .then((userCadastrado) => {
        res.status(201).json(userCadastrado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
}

export default new UserController();
