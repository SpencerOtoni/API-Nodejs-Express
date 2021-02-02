import database from '../database'

class Pets {
    add(pet) {
        const sql = 'INSERT INTO Pets SET ?'
        return database.executaQuery(sql, pet)
    }
}

export default new Pets()