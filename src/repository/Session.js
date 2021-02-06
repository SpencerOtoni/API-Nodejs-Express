import database from "../database";

class Session {
  add(user) {
    const { email } = user;
    console.log(email)
    const sql = `SELECT * FROM User WHERE email='${email}'`;
    return database.executaQuery(sql);
  }
}

export default new Session();
