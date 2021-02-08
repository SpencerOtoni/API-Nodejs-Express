import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import authConfig from '../../config/auth';
import repositorySession from '../../repository/Session';

class Session {
  async add(user) {
    const { senha } = user;
    const userResult = await repositorySession.add(user);

    const id = userResult.insertId;

    const checkPassword = await bcrypt.compare(senha, userResult[0].senha);

    if (checkPassword) {
      return {
        User: userResult[0],
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      };
    }

    return { error: 'Password does not match.' };
  }
}

export default new Session();
