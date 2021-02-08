import User from '../models/users';

class UserController {
  store(req, res) {
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
