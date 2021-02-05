import database from "../database";

class User {
  add(user) {
    const sql = "INSERT INTO User SET ?";
    return database.executaQuery(sql, user);
  }
}

export default new User();
