import Session from "../models/session";

class SessionController {
  store(req, res) {
    const user = req.body;

    Session.add(user)
      .then((userLogin) => {
        res.status(201).json(userLogin);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  }
}

export default new SessionController();
