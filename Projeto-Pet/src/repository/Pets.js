import database from '../database';

class Pets {
  add(pet) {
    const sql = 'INSERT INTO Pets SET ?';
    return database.executaQuery(sql, pet);
  }

  listPets(id) {
    const sql =
      'SELECT Pets.nome, Pets.imagem FROM User JOIN Pets ON Pets.idUser = ?';
    return database.executaQuery(sql, Number(id));
  }
}

export default new Pets();
