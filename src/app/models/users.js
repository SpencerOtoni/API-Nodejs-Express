import bcrypt from "bcryptjs";
import repositoryUser from "../../repository/User";

class User {
  async add(user) {
    let { senha } = user;

    senha = await bcrypt.hash(senha, 8);

    const userAlterado = { ...user, senha };

    return repositoryUser.add(userAlterado).then((result) => {
      const id = result.insertId;
      return { ...userAlterado, id };
    });
  }
}

export default new User();
