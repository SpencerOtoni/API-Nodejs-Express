import database from "../database";

class Session {
  add(user) {
    const { email, senha } = user;
    const sql = `SELECT * FROM User WHERE email=${email} AND senha=${senha}`;
    return database.executaQuery(sql, user);
  }
}

export default new Session();
