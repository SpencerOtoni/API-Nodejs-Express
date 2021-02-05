import database from "../database";

class Atendimentos {
  add(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ?";
    return database.executaQuery(sql, atendimento);
  }

  listAtendimento(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${Number(id)}`;
    return database.executaQuery(sql);
  }

  listAtendimentos() {
    const sql = "SELECT * FROM Atendimentos";
    return database.executaQuery(sql);
  }

  update(atendimento, id) {
    const sql = "UPDATE Atendimentos set ? WHERE id=?";
    return database.executaQuery(sql, [atendimento, Number(id)]);
  }

  delete(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${Number(id)}`;
    return database.executaQuery(sql);
  }
}

export default new Atendimentos();
