import database from '../database';

class Pets {
  add(pet) {
    const sql = 'INSERT INTO Pets SET ?';
    return database.executaQuery(sql, pet);
  }

  listPets(id) {
    const sql =
      'SELECT Pets.nome, Pets.imagem, user.nome as tutor FROM Pets INNER JOIN user ON Pets.idUser = user.id where Pets.idUser = ?';
    return database.executaQuery(sql, Number(id));
  }
}

export default new Pets();
